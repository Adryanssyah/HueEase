import { createContext, useEffect, useState } from 'react';

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
     const [alert, setAlert] = useState(false);
     const [alertText, setAlertText] = useState('');
     useEffect(() => {
          if (alert) {
               setTimeout(() => {
                    setAlert(false);
               }, 2000);
          }
     }, [alert]);
     return <AlertContext.Provider value={{ alert, setAlert, alertText, setAlertText }}>{children}</AlertContext.Provider>;
};

export const Alert = AlertContext;
export default AlertProvider;
