import { shimmer_card_unit, shimmer_menu_card_unit } from "../constants";

const CardShimmer = () => {
  return (
    <div
      data-testid="shimmer"
      className="w-56 h-72 p-4 m-2 shadow-lg bg-gray-200 animate-pulse rounded-lg flex flex-col justify-between"
    >
      <div className="h-32 bg-gray-300 mb-4 rounded-md"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-300 mb-2 rounded-md"></div>
        <div className="h-3 bg-gray-300 mb-2 rounded-md"></div>
        <div className="h-3 bg-gray-300 mb-2 rounded-md"></div>
      </div>
      <div className="h-4 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="pt-20 p-5 flex flex-col items-center">
      {/* Restaurant Summary Shimmer */}
      <div className="w-full max-w-4xl mb-8 animate-pulse">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="w-full md:w-1/3 h-48 bg-gray-300 rounded-lg"></div>
          <div className="mt-4 md:mt-0 flex-1 space-y-4">
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            <div className="flex justify-center md:justify-start items-center mt-4 space-x-2">
              <div className="h-6 bg-gray-300 rounded-md w-12"></div>
              <span className="h-6 w-6 bg-gray-300 rounded-full"></span>
              <div className="h-6 bg-gray-300 rounded-md w-24"></div>
              <span className="h-6 w-6 bg-gray-300 rounded-full"></span>
              <div className="h-6 bg-gray-300 rounded-md w-24"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items Shimmer */}
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 bg-gray-300 rounded w-32"></div>
          <div className="h-6 bg-gray-300 rounded w-16"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm animate-pulse"
              key={index}
            >
              <div className="flex-1 space-y-4">
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="h-5 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
              </div>
              <div className="ml-4 flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
                <div className="mt-2 h-6 bg-gray-300 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {new Array(shimmer_card_unit).fill(0).map((_, index) => {
        return <CardShimmer key={index.toString() + 1} />;
      })}
    </div>
  );
};

export default Shimmer;
