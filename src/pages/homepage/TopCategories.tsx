import Category from "@/components/cards/Category";

const TopCategories = () => {
  return (
    <div className="">
      <h2 className="text-5xl font-extrabold h-36 flex justify-center items-center">
        Top Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <Category
          img={
            "https://boltsfitness.com/images/resource/71AyxR0yeeL._SL1500_.jpg"
          }
          name={"Fitness"}
        />
        <Category
          img={
            "https://www.freevector.com/uploads/vector/preview/8374/FreeVector-Ball-Sports.jpg"
          }
          name={"Ball Sports"}
        />
        <Category
          img={
            "https://www.siroko.com/blog/c/app/uploads/2021/07/efectos-positivos_f766ef96-0811-452d-bbf8-ec38d244637a-1440x900.jpg.webp"
          }
          name={"Cycling"}
        />
      </div>
    </div>
  );
};

export default TopCategories;
