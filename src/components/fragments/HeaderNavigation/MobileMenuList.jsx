import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const MobileMenuList = ({ children }) => {
     return <div className="fixed top-[68.8px] left-0 w-full min-h-screen bg-white/80 dark:bg-black/80 backdrop-blur-xl flex flex-col items-center gap-2 px-4 py-5 z-50">{children}</div>;
};

const List = ({ link, title, onClick }) => {
     return (
          <NavLink
               to={link}
               onClick={onClick}
               className={({ isActive }) => {
                    const baseClass = 'px-3.5 py-2 w-full max-w-6xl rounded-lg font-medium';
                    return isActive
                         ? `text-white bg-[#1b80a8] dark:bg-[#1b80a8] hover:bg-[#4daacf] dark:hover:bg-[#4daacf] ${baseClass}`
                         : `text-darks dark:text-white hover:bg-opacity-10 hover:bg-gray-700 dark:hover:bg-opacity-10 dark:hover:bg-white ${baseClass}`;
               }}
          >
               {title}
          </NavLink>
     );
};

MobileMenuList.List = List;

export default MobileMenuList;
