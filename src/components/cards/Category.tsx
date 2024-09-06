import { useNavigate } from "react-router-dom";

const Category = ({ img, name }: { img: string; name: string }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/all-products?category=${encodeURIComponent(name)}`);
  };

  return (
    <button
      className="rounded-lg relative text-white font-bold text-2xl hover:scale-90 hover:text-3xl"
      onClick={handleClick}
    >
      <img
        src={img}
        alt={name}
        className="brightness-50 aspect-square rounded-lg object-fill"
      />
      <h3 className="absolute top-1/2 left-0 right-0">{name}</h3>
    </button>
  );
};

export default Category;
