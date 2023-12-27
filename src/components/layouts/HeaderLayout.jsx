import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import ButtonToggle from '../elements/ButtonToggle';
import MenuList from '../fragments/HeaderNavigation/MenuList';
import Toggles from '../fragments/HeaderNavigation/Toggles';
import Logo from '../elements/Logo';
import HeaderNavigation from '../fragments/HeaderNavigation';
import MobileMenuList from '../fragments/HeaderNavigation/MobileMenuList';

const HeaderLayout = () => {
     const [darkTheme, setDarkTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : false);

     const menus = [
          {
               title: 'Home',
               link: '/',
               active: true,
          },
          {
               title: 'Playground',
               link: '/playground',
               active: false,
          },
          {
               title: 'Collections',
               link: '/collections',
               active: false,
          },
     ];

     useEffect(() => {
          if (darkTheme) {
               document.documentElement.classList.add('dark');
               document.documentElement.style.colorScheme = 'dark';
               localStorage.setItem('theme', 'dark');
          } else {
               document.documentElement.classList.remove('dark');
               document.documentElement.style.colorScheme = 'light';
               localStorage.setItem('theme', 'light');
          }
     }, [darkTheme]);

     const [isMobile, setIsMobile] = useState(true);
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

     useEffect(() => {
          function handleResize() {
               window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
          }
          window.addEventListener('resize', handleResize);
          return () => {
               window.removeEventListener('resize', handleResize);
          };
     }, []);

     useEffect(() => {
          if (mobileMenuOpen && isMobile) {
               document.body.style.overflow = 'hidden';
          } else {
               document.body.style.overflow = 'auto';
          }
     }, [isMobile, mobileMenuOpen]);

     return (
          <>
               <HeaderNavigation>
                    <Logo />
                    <MenuList>
                         {menus.map((item) => (
                              <MenuList.List key={item.title}>
                                   <MenuList.Href link={item.link} title={item.title}></MenuList.Href>
                              </MenuList.List>
                         ))}
                    </MenuList>
                    <Toggles>
                         <ButtonToggle onClick={() => setDarkTheme(!darkTheme)} label="Toggle Dark Mode">
                              {darkTheme ? <MoonIcon className="w-5 h-5 text-dark dark:text-white" /> : <SunIcon className="w-5 h-5 text-dark dark:text-white" />}
                         </ButtonToggle>
                         <ButtonToggle onClick={() => setMobileMenuOpen(!mobileMenuOpen)} classes={'md:hidden'} label="Toggle Mobile Menu">
                              <Bars3Icon className="w-5 h-5 text-dark dark:text-white" />
                         </ButtonToggle>
                    </Toggles>
               </HeaderNavigation>
               {mobileMenuOpen && isMobile ? (
                    <MobileMenuList>
                         {menus.map((item) => (
                              <MobileMenuList.List key={item.title} link={item.link} title={item.title} onClick={() => setMobileMenuOpen(false)}></MobileMenuList.List>
                         ))}
                    </MobileMenuList>
               ) : null}
          </>
     );
};
export default HeaderLayout;
