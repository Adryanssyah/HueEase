import { CodeBracketIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconActive } from '@heroicons/react/24/solid';

const Card = ({ gradientData, savedGradients, addCollection, removeCollection }) => {
     return (
          <div className="flex flex-col items-start justify-start gap-3.5">
               <div className={`aspect-[4/3] w-full rounded-2xl ${gradientData.code.tailwind}`}></div>
               <div className="flex items-center justify-between w-full px-1">
                    <div>
                         <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-sm md:text-xs font-medium px-4">To Bottom Right</button>
                    </div>
                    <div className="flex items-start justify-end gap-2">
                         <button aria-label="copy" className="p-2 rounded-lg border border-gray-300 dark:border-gray-700">
                              <CodeBracketIcon className="md:w-4 md:h-4 w-5 h-5" />
                         </button>
                         {savedGradients.includes(gradientData.id) ? (
                              <button onClick={() => removeCollection(gradientData.id)} aria-label="saved" className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-red-500">
                                   <HeartIconActive className="md:w-4 md:h-4 w-5 h-5" />
                              </button>
                         ) : (
                              <button onClick={() => addCollection(gradientData.id)} aria-label="save" className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 ">
                                   <HeartIcon className="md:w-4 md:h-4 w-5 h-5" />
                              </button>
                         )}
                    </div>
               </div>
          </div>
     );
};

export default Card;
