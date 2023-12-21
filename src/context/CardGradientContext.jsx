import { createContext, useState } from 'react';

const CardGradientDirectionContext = createContext();

const CardGradientDirectionProvider = ({ children }) => {
     const [cardGradientDirection, setCardGradientDirection] = useState('');

     return <CardGradientDirectionContext.Provider value={{ cardGradientDirection, setCardGradientDirection }}>{children}</CardGradientDirectionContext.Provider>;
};

export const CardGradientDirection = CardGradientDirectionContext;
export default CardGradientDirectionProvider;
