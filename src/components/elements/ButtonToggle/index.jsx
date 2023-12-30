import { Tooltip } from '@radix-ui/themes';

const ButtonToggle = ({ children, onClick, classes, label }) => {
     return (
          <Tooltip content={label}>
               <button aria-label={label} className={`${classes} p-2 rounded-lg hover:bg-gray-700 hover:bg-opacity-10 dark:hover:bg-gray-100 dark:hover:bg-opacity-10`} onClick={onClick}>
                    {children}
               </button>
          </Tooltip>
     );
};

export default ButtonToggle;
