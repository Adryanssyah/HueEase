import { NavLink } from 'react-router-dom';

const MenuList = ({ children }) => {
     return <ul className="text-sm w-full text-dark text-center font-medium dark:text-white md:flex gap-2 items-center justify-center hidden">{children}</ul>;
};

const List = ({ children }) => {
     return <li>{children}</li>;
};

const Href = ({ link, title }) => {
     return (
          <NavLink
               to={link}
               className={({ isActive }) => {
                    const baseClass = 'px-3.5 py-1 rounded-lg hover:bg-gray-700 hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10';
                    return isActive ? `font-bold ${baseClass}` : `text-gray-500 dark:text-gray-400 ${baseClass}`;
               }}
          >
               {title}
          </NavLink>
     );
};

MenuList.List = List;
MenuList.Href = Href;

export default MenuList;
