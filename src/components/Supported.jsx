const Supported = () => {
  return (
    <div className="mt-20 mx-auto container md:p-5 p-3  flex items-center justify-center flex-col">
      <h1 className="md:text-3xl text-center font-bold text-xl sm:text-2xl">Supported by the Best Courses</h1>
      <div className="h-1 w-[35%] rounded-2xl bg-gray-200  dark:bg-gray-700 mt-5"></div>
      <div className="mt-10 flex-1 flex flex-col lg:flex-row gap-10">
        <div className="flex gap-3 sm:flex-row flex-col items-center w-full">
          <div className="w-50 border border-gray-400 dark:border-gray-800 h-50 rounded-[50%] flex items-center justify-center">
            Logo here
          </div>
          <div className="flex-1 p-2">
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta rem
            eaque officia ullam libero, magni provident? Qui, minima nulla neque
            voluptatum impedit ipsam accusamus quasi consequatur ratione amet
            quam quidem?
          </p>
          </div>
        </div>
        <div className="flex gap-3 items-center  sm:flex-row flex-col w-full">
          <div className="w-50 border border-gray-400 dark:border-gray-800 h-50 rounded-[50%] flex items-center justify-center">
            Logo here
          </div>
          <div className="flex-1">
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              rem eaque officia ullam libero, magni provident? Qui, minima nulla
              neque voluptatum impedit ipsam accusamus quasi consequatur ratione
              amet quam quidem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supported;
