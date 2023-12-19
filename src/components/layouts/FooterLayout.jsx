const FooterLayout = () => {
     return (
          <footer className="w-full flex items-center justify-center">
               <div className="w-full py-10 max-w-7xl px-4 text-xs md:text-sm text-center md:text-start dark:text-gray-400 text-gray-500">
                    Built by{' '}
                    <a href="#" className="underline">
                         Adryan
                    </a>{' '}
                    @2023. See the source code on{' '}
                    <a href="https://github.com/Adryanssyah/HueEase" target="_blank" className="underline">
                         Github
                    </a>
                    .{' '}
               </div>
          </footer>
     );
};

export default FooterLayout;