import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import ButtonIcon from './components/elements/ButtonIcon';
import FooterLayout from './components/layouts/FooterLayout';
import HeaderLayout from './components/layouts/HeaderLayout';
import Background from './components/elements/Background';

import GradientsLayout from './components/layouts/GradientsLayout';

function App() {
     return (
          <>
               <Background />
               <HeaderLayout />
               <div className="w-full font-poppins flex flex-col items-center justify-center h-full ">
                    <main className="w-full max-w-7xl px-2 py-16 mt-16 ">
                         <section className="grid gap-10 grid-cols-1 md:grid-cols-2">
                              <div className="px-2 flex flex-col justify-center items-center text-center md:text-start md:items-start">
                                   <h1 className="text-5xl font-semibold text-darks dark:text-white mb-8 xl:text-6xl">Discover Your Best Gradient Here.</h1>
                                   <p className="text-gray-500 dark:text-gray-400 px-4 md:px-0">Explore and create gradients with various color combinations for your Tailwind CSS and CSS code.</p>

                                   <div className="flex gap-4">
                                        <ButtonIcon title="Explore"></ButtonIcon>
                                        <ButtonIcon title="Generate" color="bg-none border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-darks">
                                             <ArrowLongRightIcon className="w-5 h-5 inline-block " />
                                        </ButtonIcon>
                                   </div>
                              </div>
                              <div className="w-full  px-2 flex justify-center">
                                   <div className="w-full h-80 rounded-2xl bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-emerald-200 via-blue-600 to-emerald-200"></div>
                              </div>
                         </section>
                         <GradientsLayout />
                    </main>
               </div>

               <FooterLayout />
          </>
     );
}

export default App;
