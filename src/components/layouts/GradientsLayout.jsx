// import data from '../../data/gradients';
import Card from '../../components/fragments/Card';
import GradientLists from '../fragments/GradientLists/GradientLists';
import TabsButton from '../elements/TabsButton';
import { useEffect, useState } from 'react';
const GradientsLayout = () => {
     const [type, setType] = useState('linear');

     const gradients = [
          {
               id: 1,
               name: 'Gradient 1',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-r from-orange-400 to-rose-400',
                    css: 'background-image: linear-gradient(to right, #ff8c00, #ff007f);',
               },
          },
          {
               id: 2,
               name: 'Gradient 2',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-br from-gray-900 to-gray-600',
                    css: 'background-image: linear-gradient(to bottom right, #222, #666);',
               },
          },
          {
               id: 3,
               name: 'Gradient 3',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-br from-emerald-300 to-blue-300',
                    css: 'background-image: linear-gradient(to bottom right, #38a169, #4299e1);',
               },
          },
          {
               id: 4,
               name: 'Gradient 4',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800',
                    css: 'background-image: linear-gradient(to right, #4c1d95, #7f1ce3, #4c1d95);',
               },
          },
          {
               id: 5,
               name: 'Gradient 5',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-r from-rose-300 to-rose-500',
                    css: 'background-image: linear-gradient(to right, #f66, #f06);',
               },
          },
          {
               id: 6,
               name: 'Gradient 6',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-r from-emerald-500 to-lime-600',
                    css: 'background-image: linear-gradient(to right, #48bb78, #a2c779);',
               },
          },
          {
               id: 7,
               name: 'Gradient 7',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-r from-slate-500 to-yellow-100',
                    css: 'background-image: linear-gradient(to right, #4b5563, #f6e05e);',
               },
          },
          {
               id: 8,
               name: 'Gradient 8',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-b from-orange-500 to-yellow-300',
                    css: 'background-image: linear-gradient(to bottom, #ed8936, #f6e05e);',
               },
          },
          {
               id: 9,
               name: 'Gradient 9',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-r from-teal-200 to-lime-200',
                    css: 'background-image: linear-gradient(to right, #319795, #a2c779);',
               },
          },
          {
               id: 10,
               name: 'Gradient 10',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-r from-rose-100 to-teal-100',
                    css: 'background-image: linear-gradient(to right, #fdaeab, #a4ebf3);',
               },
          },
          {
               id: 11,
               name: 'Gradient 11',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-r from-red-500 to-red-800',
                    css: 'background-image: linear-gradient(to right, #f56565, #742a2a);',
               },
          },
          {
               id: 12,
               name: 'Gradient 12',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-r from-emerald-500 to-lime-600',
                    css: 'background-image: linear-gradient(to right, #48bb78, #a2c779);',
               },
          },
          {
               id: 13,
               name: 'Gradient 13',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-r from-rose-500 via-red-400 to-red-500',
                    css: 'background-image: linear-gradient(to right, #ef4444, #f56565, #ef4444);',
               },
          },
          {
               id: 14,
               name: 'Gradient 14',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-r from-violet-300 to-violet-400',
                    css: 'background-image: linear-gradient(to right, #9333ea, #d53f8c);',
               },
          },
          {
               id: 15,
               name: 'Gradient 15',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400',
                    css: 'background-image: linear-gradient(to right, #d53f8c, #fuchsia, #ff8c00);',
               },
          },
          {
               id: 16,
               name: 'Gradient 16',
               type: 'linear',
               code: {
                    tailwind: 'bg-gradient-to-r from-blue-400 to-emerald-400',
                    css: 'background-image: linear-gradient(to right, #4299e1, #48bb78);',
               },
          },
          {
               id: 17,
               name: 'Gradient 17',
               type: 'radial',
               code: {
                    tailwind: 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500',
                    css: 'background-image: radial-gradient(ellipse at center, var(--tw-gradient-stops));',
               },
          },
          {
               id: 18,
               name: 'Gradient 18',
               type: 'conic',
               code: {
                    tailwind: 'bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500',
                    css: 'background-image: conic-gradient(at left, var(--tw-gradient-stops));',
               },
          },
     ];

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
                    <TabsButton active={type === 'linear'} onClick={() => setType('linear')}>
                         Linear
                    </TabsButton>
                    <TabsButton active={type === 'radial'} onClick={() => setType('radial')}>
                         Radial
                    </TabsButton>
                    <TabsButton active={type === 'conic'} onClick={() => setType('conic')}>
                         Conic
                    </TabsButton>
               </GradientLists.Tabs>
               <GradientLists.CardList>
                    {gradients
                         .filter((item) => item.type === type)
                         .map((item) => (
                              <Card key={item.id} gradientData={item} savedGradients={savedGradients} addCollection={addCollection} removeCollection={removeCollection} />
                         ))}
               </GradientLists.CardList>
          </GradientLists>
     );
};

export default GradientsLayout;
