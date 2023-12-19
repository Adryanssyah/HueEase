const ButtonToggle = ({ children, onClick, classes, label }) => {
     return (
          <button aria-label={label} className={`${classes} p-2 rounded-lg hover:bg-gray-700 hover:bg-opacity-10 dark:hover:bg-gray-100 dark:hover:bg-opacity-10`} onClick={onClick}>
               {children}
          </button>
     );
};

export default ButtonToggle;
