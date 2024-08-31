const Category = ({ img, name }) => {
  return (
    <button className="rounded-lg relative text-white font-bold text-2xl hover:scale-90 hover:text-3xl">
      <img
        src={img}
        alt=""
        className="brightness-50 aspect-square rounded-lg object-fill"
      />
      <h3 className="absolute top-1/2 left-0 right-0">{name}</h3>
    </button>
  );
};

export default Category;
