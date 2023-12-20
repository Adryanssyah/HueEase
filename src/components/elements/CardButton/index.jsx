import { forwardRef } from 'react';

const CardButton = forwardRef(({ children, label, onClick }, ref) => {
     return (
          <button ref={ref} onClick={onClick} aria-label={label} className="btn-code p-2 rounded-lg border bg-none border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
               {children}
          </button>
     );
});

export default CardButton;
