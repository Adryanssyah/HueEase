import { useContext } from 'react';
import { Alert } from '../../../context/AlertContext';
import { AnimatePresence, motion } from 'framer-motion';
const AlertClipboard = () => {
     const { alert, alertText } = useContext(Alert);

     return (
          <div className="fixed bottom-0 left-0 w-full flex justify-center items-center py-5 ">
               <div className="grid grid-cols-1 place-items-center w-full max-w-7xl ">
                    <AnimatePresence>
                         {alert && (
                              <motion.div
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   exit={{ opacity: 0 }}
                                   transition={{ duration: 0.2 }}
                                   className="text-sm px-3 py-2 bg-white/80 border border-gray-500 dark:border-gray-700 rounded-lg dark:bg-darks/80 backdrop-blur-lg"
                              >
                                   {alertText}
                              </motion.div>
                         )}
                    </AnimatePresence>
               </div>
          </div>
     );
};

export default AlertClipboard;
