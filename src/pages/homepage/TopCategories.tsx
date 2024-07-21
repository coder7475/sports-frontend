import Category from "@/components/cards/Category";

const TopCategories = () => {
  return (
    <div className="">
      <h2 className="text-5xl font-extrabold h-36 flex justify-center items-center">
        Top Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default TopCategories;
