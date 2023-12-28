import { useEffect, useState } from 'react';
import GradientLists from '../fragments/GradientLists/GradientLists';
import TabsButton from '../elements/TabsButton';
import Card from '../fragments/Card';
import CardGradientDirectionProvider from '../../context/CardGradientContext';

import { primaryDirections, radialDirections, conicDirections } from '../../data/directions';
import { gradients } from '../../data/gradients';

const GradientsLayout = () => {
     const [type, setType] = useState('linear');
     const types = ['linear', 'radial', 'conic'];
     const [savedGradients, setSavedGradients] = useState(JSON.parse(localStorage.getItem('myCollection')) || []);

     const addCollection = (id) => {
          !savedGradients.includes(id) && setSavedGradients([...savedGradients, id]);
     };

     const removeCollection = (id) => {
          setSavedGradients(savedGradients.filter((item) => item !== id));
     };

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
                    {gradients
                         .filter((item) => item.type === type)
                         .map((item) => (
                              <Card key={item.id}>
                                   <CardGradientDirectionProvider>
                                        <Card.Gradient color={item.color} direction={item.direction}></Card.Gradient>
                                        <Card.FooterContainer>
                                             <Card.Direction direction={item.direction} dataDirections={item.type === 'conic' ? conicDirections : type === 'radial' ? radialDirections : primaryDirections} />
                                             <Card.ButtonsContainer>
                                                  <Card.Buttons savedGradients={savedGradients} id={item.id} addCollection={addCollection} removeCollection={removeCollection}>
                                                       <Card.Popup color={item.color} direction={item.direction}></Card.Popup>
                                                  </Card.Buttons>
                                             </Card.ButtonsContainer>
                                        </Card.FooterContainer>
                                   </CardGradientDirectionProvider>
                              </Card>
                         ))}
               </GradientLists.CardList>
          </GradientLists>
     );
};

export default GradientsLayout;
