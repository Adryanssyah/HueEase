import PagesLayout from '../components/layouts/PagesLayout';

const ErrorPage = () => {
     return (
          <PagesLayout>
               <div className="w-full h-full flex items-center justify-center gap-5 py-48">
                    <strong className="text-5xl">404</strong> <span className="h-10 border-l dark:border-gray-800 border"></span> <div>This page could not be found.</div>
               </div>
          </PagesLayout>
     );
};

export default ErrorPage;
