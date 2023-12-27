import PagesLayout from '../components/layouts/PagesLayout';
import PlaygroundLayout from '../components/layouts/PlaygroundLayout';

const PlaygroundPage = () => {
     window.scrollTo(0, 0);
     return (
          <PagesLayout>
               <PlaygroundLayout>
                    <PlaygroundLayout.Title />
                    <PlaygroundLayout.MainPlayground />
               </PlaygroundLayout>
          </PagesLayout>
     );
};

export default PlaygroundPage;
