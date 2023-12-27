import { useEffect, useState } from 'react';
import GradientLists from '../fragments/GradientLists/GradientLists';
import TabsButton from '../elements/TabsButton';
import Card from '../fragments/Card';
import CardGradientDirectionProvider from '../../context/CardGradientContext';

import { primaryDirections, radialDirections, conicDirections } from '../../data/directions';
import { gradients } from '../../data/gradients';
import EmptyHandler from '../elements/EmptyHandler';

const CollectionsLayout = () => {
     const [type, setType] = useState('custom');
     const types = ['linear', 'radial', 'conic', 'custom'];
     const [savedGradients, setSavedGradients] = useState(JSON.parse(localStorage.getItem('myCollection')) || []);
     const [customGradients, setCustomGradients] = useState(JSON.parse(localStorage.getItem('myCustomCollections')) || []);
     const [gradientsData, setGradientsData] = useState(gradients);

     useEffect(() => {
          setGradientsData([...gradientsData, ...customGradients]);
     }, []);

     const addCollection = (id) => {
          !savedGradients.includes(id) && setSavedGradients([...savedGradients, id]);
     };

     const removeCollection = (id) => {
          setSavedGradients(savedGradients.filter((item) => item !== id));
     };

     const removeCustom = (id) => {
          setGradientsData(gradientsData.filter((item) => item.id !== id));
          setCustomGradients(customGradients.filter((item) => item.id !== id));
     };

     useEffect(() => {
          localStorage.setItem('myCustomCollections', JSON.stringify(customGradients));
     }, [gradientsData]);

     useEffect(() => {
          localStorage.setItem('myCollection', JSON.stringify(savedGradients));
     }, [savedGradients]);

     return (
          <GradientLists>
               <GradientLists.Tabs>
                    {types.map((item) => (
                         <TabsButton key={item} active={type === item} onClick={() => setType(item)}>
                              {item}
                         </TabsButton>
                    ))}
               </GradientLists.Tabs>
               <GradientLists.CardList>
                    {gradientsData
                         .filter((item) => (item.type !== 'custom' && item.type === type && savedGradients.includes(item.id)) || (item.type === 'custom' && item.type === type && !savedGradients.includes(item.id)))
                         .map((item) => (
                              <Card key={item.id}>
                                   <CardGradientDirectionProvider>
                                        <Card.Gradient color={item.color} direction={item.direction} />
                                        <Card.FooterContainer>
                                             <Card.Direction
                                                  direction={item.direction}
                                                  dataDirections={
                                                       item.type === 'conic' ? conicDirections : type === 'radial' ? radialDirections : type === 'linear' ? primaryDirections : [...primaryDirections, ...radialDirections, ...conicDirections]
                                                  }
                                             />
                                             <Card.ButtonsContainer>
                                                  <Card.Buttons removeCustom={removeCustom} type={item.type} savedGradients={savedGradients} id={item.id} addCollection={addCollection} removeCollection={removeCollection}>
                                                       <Card.Popup color={item.color} direction={item.direction} />
                                                  </Card.Buttons>
                                             </Card.ButtonsContainer>
                                        </Card.FooterContainer>
                                   </CardGradientDirectionProvider>
                              </Card>
                         ))}
               </GradientLists.CardList>
               {gradientsData.filter((item) => (item.type !== 'custom' && item.type === type && savedGradients.includes(item.id)) || (item.type === 'custom' && item.type === type && !savedGradients.includes(item.id))).length === 0 ? (
                    <EmptyHandler type={type} />
               ) : (
                    ''
               )}
          </GradientLists>
     );
};

export default CollectionsLayout;
