import { createContext, useEffect, useState } from 'react';

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
     const [alert, setAlert] = useState(false);
     useEffect(() => {
          if (alert) {
               setTimeout(() => {
                    setAlert(false);
               }, 2000);
          }
     }, [alert]);
     return <AlertContext.Provider value={{ alert, setAlert }}>{children}</AlertContext.Provider>;
};

export const Alert = AlertContext;
export default AlertProvider;
