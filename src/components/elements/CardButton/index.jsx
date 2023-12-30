import { Tooltip } from '@radix-ui/themes';
import { forwardRef } from 'react';

const CardButton = forwardRef(({ children, label, onClick, classes = 'hover:bg-gray-100 dark:hover:bg-gray-800' }, ref) => {
     return (
          <Tooltip content={label}>
               <button ref={ref} onClick={onClick} aria-label={label} className={`${classes} flex items-center justify-center btn-code p-2 rounded-lg border bg-none border-gray-300 dark:border-gray-700`}>
                    {children}
               </button>
          </Tooltip>
     );
});

export default CardButton;
