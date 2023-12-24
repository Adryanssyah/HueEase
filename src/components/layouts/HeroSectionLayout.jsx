import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import ButtonIcon from '../elements/ButtonIcon';
import { Link } from 'react-router-dom';

const HeroSectionLayout = ({ children }) => {
     return <section className="grid gap-10 grid-cols-1 md:grid-cols-2 mb-20">{children}</section>;
};

const Title = ({ children }) => {
     return <div className="px-2 flex flex-col justify-center items-center text-center md:text-start md:items-start">{children}</div>;
};

const Heading = () => {
     return (
          <>
               <h1 className="text-5xl font-semibold text-darks dark:text-white mb-8 xl:text-6xl">Discover Your Best Gradient Here.</h1>
               <p className="text-gray-500 dark:text-gray-400 px-4 md:px-0">Explore and create gradients with various color combinations for your Tailwind CSS and CSS code.</p>
          </>
     );
};

const Links = () => {
     return (
          <div className="flex gap-4">
               <ButtonIcon
                    title="Explore"
                    onClick={() => {
                         document.getElementById('gradients').scrollIntoView();
                    }}
               ></ButtonIcon>
               <Link to={'/playground'} className="px-5 py-2 rounded-lg font-medium text-sm mt-6 flex items-center gap-2 bg-none border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-darks">
                    Generate
                    <ArrowLongRightIcon className="w-5 h-5 inline-block " />
               </Link>
          </div>
     );
};

const MainGradient = () => {
     return (
          <div className="w-full hidden md:flex px-2 justify-center">
               <div className="w-full h-80 rounded-2xl bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-emerald-200 via-blue-600 to-emerald-200"></div>
          </div>
     );
};

HeroSectionLayout.Title = Title;
HeroSectionLayout.Heading = Heading;
HeroSectionLayout.Links = Links;
HeroSectionLayout.MainGradient = MainGradient;

export default HeroSectionLayout;
