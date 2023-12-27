import GradientsLayout from '../components/layouts/GradientsLayout';
import PagesLayout from '../components/layouts/PagesLayout';
import HeroSectionLayout from '../components/layouts/HeroSectionLayout';
const HomePage = () => {
     window.scrollTo(0, 0);
     return (
          <>
               <PagesLayout>
                    <HeroSectionLayout>
                         <HeroSectionLayout.Title>
                              <HeroSectionLayout.Heading />
                              <HeroSectionLayout.Links />
                         </HeroSectionLayout.Title>
                         <HeroSectionLayout.MainGradient />
                    </HeroSectionLayout>
                    <GradientsLayout />
               </PagesLayout>
          </>
     );
};

export default HomePage;
