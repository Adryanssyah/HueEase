import { CodeBracketIcon, HeartIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconActive } from '@heroicons/react/24/solid';
import CardButton from '../../elements/CardButton';
import { useContext, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Select } from '@radix-ui/themes';

import { CardGradientDirection } from '../../../context/CardGradientContext';

const Card = ({ children }) => {
     return <article className="flex flex-col items-start justify-start gap-3.5">{children}</article>;
};

const FooterContainer = ({ children }) => {
     return <div className="relative flex items-center justify-between w-full px-1">{children}</div>;
};

const ButtonsContainer = ({ children }) => {
     return <div className="flex items-start justify-end gap-2">{children}</div>;
};

const Gradient = ({ direction, color }) => {
     const { cardGradientDirection } = useContext(CardGradientDirection);
     return <div className={`aspect-[4/3] w-full rounded-2xl ${cardGradientDirection || direction} ${color}`}></div>;
};

const Direction = ({ direction, dataDirections }) => {
     const { setCardGradientDirection } = useContext(CardGradientDirection);
     return (
          <Select.Root
               onValueChange={(value) => setCardGradientDirection(value)}
               defaultValue={direction}
               size={{
                    initial: '3',
                    sm: '2',
               }}
          >
               <Select.Trigger radius="large" />
               <Select.Content position="popper">
                    {dataDirections.map((item, index) => {
                         return (
                              <Select.Item key={index} value={item.css}>
                                   {item.name}
                              </Select.Item>
                         );
                    })}
               </Select.Content>
          </Select.Root>
     );
};

const Buttons = ({ savedGradients, id, addCollection, removeCollection }) => {
     const [popup, setPopup] = useState(false);
     const popupRef = useRef();
     const buttonRef = useRef();

     useEffect(() => {
          const handler = (e) => {
               if (!popupRef.current?.contains(e.target) && !buttonRef.current?.contains(e.target)) {
                    setPopup(false);
               }
          };
          window.addEventListener('mousedown', handler);
          return () => window.removeEventListener('mousedown', handler);
     });

     return (
          <>
               <CardButton label="Copy Code" ref={buttonRef} onClick={() => setPopup(!popup)}>
                    <CodeBracketIcon className="md:w-4 md:h-4 w-5 h-5" />
               </CardButton>

               <AnimatePresence>
                    {popup ? (
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              ref={popupRef}
                              key={popup}
                              className={`w-full absolute -top-52 left-0 flex items-center justify-center`}
                         >
                              <div className="flex flex-col gap-4 w-11/12 p-5 rounded-xl bg-white/90 dark:bg-darks/90  backdrop-blur">
                                   <div className="w-full">
                                        <h3 className="text-sm font-medium mb-1">Tailwind</h3>
                                        <div className="flex gap-2">
                                             <code className="px-3 py-1.5 text-xs rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden whitespace-nowrap truncate">
                                                  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
                                             </code>
                                             <CardButton label={'Copy Tailwind'}>
                                                  <ClipboardIcon className={`w-3 h-3`}></ClipboardIcon>
                                             </CardButton>
                                        </div>
                                   </div>
                                   <div className="w-full">
                                        <h3 className="text-sm font-medium mb-1">CSS</h3>
                                        <div className="flex gap-2">
                                             <code className="px-3 py-1.5 text-xs rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden whitespace-nowrap truncate">
                                                  linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))
                                             </code>
                                             <CardButton label={'Copy CSS'}>
                                                  <ClipboardIcon className={`w-3 h-3`}></ClipboardIcon>
                                             </CardButton>
                                        </div>
                                   </div>
                              </div>
                         </motion.div>
                    ) : null}
               </AnimatePresence>

               <CardButton onClick={() => (savedGradients.includes(id) ? removeCollection(id) : addCollection(id))} label={savedGradients.includes(id) ? 'Saved' : 'Save'}>
                    {savedGradients.includes(id) ? <HeartIconActive className={`md:w-4 md:h-4 w-5 h-5 text-red-500`} /> : <HeartIcon className={`md:w-4 md:h-4 w-5 h-5`} />}
               </CardButton>
          </>
     );
};

Card.FooterContainer = FooterContainer;
Card.ButtonsContainer = ButtonsContainer;
Card.Gradient = Gradient;
Card.Direction = Direction;
Card.Buttons = Buttons;

export default Card;
