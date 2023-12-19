const MenuList = ({ children }) => {
     return <ul className="text-sm w-full text-dark text-center font-medium dark:text-white md:flex gap-2 items-center justify-center hidden">{children}</ul>;
};

const List = ({ children }) => {
     return <li>{children}</li>;
};

const Link = ({ link, title }) => {
     return (
          <a
               href={link}
               className="px-3.5 py-1 rounded-lg hover:bg-gray-700 hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10
                                  "
          >
               {title}
          </a>
     );
};

MenuList.List = List;
MenuList.Link = Link;

export default MenuList;
