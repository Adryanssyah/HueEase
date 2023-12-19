const TabsButton = ({ children, active, onClick }) => {
     return (
          <button
               onClick={onClick}
               className={`${active ? 'text-darks dark:text-white font-semibold' : 'text-gray-400 dark:text-gray-400 font-medium'}   px-3.5 py-1 rounded-lg hover:bg-gray-700 hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10`}
          >
               {children}
          </button>
     );
};

export default TabsButton;
