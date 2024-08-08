import devTheme from "../../../core/theme";

export const Window = ({ title, children }) => {
  return (
    <div className=" text-purple-300 font-mono justify-center h-full sm:mx-auto sm:w-[600px] md:mx-auto md:w-[700px]   lg:mx-auto lg:w-[1024px] mx-8 sm:px-0 rounded-lg shadow-elevate-light">
      <div className="bg-gray-800  backdrop-filter backdrop-blur-[2px] p-2 shadow-2xl  flex items-center justify-between  rounded-t-lg ">
        <div className="flex items-center space-x-2 pl-2">
          <span className="bg-red-500 h-3 w-3 rounded-full"></span>
          <span className="bg-yellow-500 h-3 w-3 rounded-full"></span>
          <span className="bg-green-500 h-3 w-3 rounded-full"></span>
        </div>
        <div style={{ color: devTheme.palette.secondary.main, paddingRight: 40 }}>{title}</div>
        <div className="w-6"></div>
      </div>
      <div className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-[2px] p-4 pb-8 pt-12 sm:pt-4 sm:pb-2 rounded-b-lg w-full overflow-x-hidden h-full md:h-[610px]">
        {children}
      </div>
      {/* <div className="bg-gray-900 p-4 pb-2 rounded-b-lg overflow-x-hidden h-[610px]">{children}</div> */}
    </div>
  );
};
