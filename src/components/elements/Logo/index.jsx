import { Link } from 'react-router-dom';

const Logo = () => {
     return (
          <Link to={'/'} className="font-bold px-2 text-dark dark:text-gray-100 text-xl flex items-center">
               Hue
               <span className="text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-emerald-400 dark:from-emerald-300 dark:to-blue-300">Ease</span>
          </Link>
     );
};

export default Logo;
