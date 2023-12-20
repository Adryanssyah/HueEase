import { useEffect, useState } from 'react';

const HeaderNavigation = ({ children }) => {
     const [scrolling, setScrolling] = useState(0);
     useEffect(() => {
          const handleScroll = () => {
               setScrolling(window.scrollY);
          };
          window.addEventListener('scroll', handleScroll);
          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     return (
          <header className={`fixed -top-0 left-0 w-full flex justify-center border-b border-gray-200 dark:border-gray-900 z-50 ${scrolling ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl' : ''} `}>
               <nav className="w-full py-4 px-2 grid grid-cols-2 md:grid-cols-3 max-w-7xl">{children}</nav>
          </header>
     );
};

export default HeaderNavigation;
