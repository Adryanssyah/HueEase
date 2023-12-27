import CollectionsLayout from '../components/layouts/CollectionsLayout';
import PagesLayout from '../components/layouts/PagesLayout';

const CollectionPage = () => {
     window.scrollTo(0, 0);
     return (
          <PagesLayout>
               <div className="px-2 mb-20">
                    <h1 className="text-5xl font-semibold text-darks dark:text-white mb-8 xl:text-6xl">My Gradients</h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-xl">This showcases all of your saved gradient color collections.</p>
               </div>
               <CollectionsLayout />
          </PagesLayout>
     );
};

export default CollectionPage;
