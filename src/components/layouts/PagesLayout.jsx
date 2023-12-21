const PagesLayout = ({ children }) => {
     return (
          <div className="w-full font-poppins flex flex-col items-center justify-center h-full ">
               <main className="w-full max-w-7xl px-2 py-16 mt-16 ">{children}</main>
          </div>
     );
};

export default PagesLayout;
