const GradientLists = ({ children }) => {
     return (
          <section id="gradients" className="mt-20">
               {children}
          </section>
     );
};

const Tabs = ({ children }) => {
     return <div className="w-full px-2 py-3 border-b dark:border-gray-800 mb-10 flex gap-1 md:gap-4 ">{children}</div>;
};

const CardList = ({ children }) => {
     return <div className="w-full px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-7 gap-x-5">{children}</div>;
};

GradientLists.Tabs = Tabs;
GradientLists.CardList = CardList;

export default GradientLists;
