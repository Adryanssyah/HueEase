const ButtonIcon = ({ children, title }) => {
     return (
          <button className="bg-darks dark:bg-white dark:text-darks hover:bg-[#2c2c2c] dark:hover:bg-slate-200 text-white px-5 py-2 rounded-lg font-medium text-sm mt-6 flex items-center gap-2">
               <span>{title}</span>
               {children}
          </button>
     );
};

export default ButtonIcon;
