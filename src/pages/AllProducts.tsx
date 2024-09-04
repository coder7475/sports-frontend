import MyCard from "@/components/cards/MyCard";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";

const AllProducts = () => {
  return (
    <main className="font-helve container mx-auto">
      <section className="max-w-[1280px] mx-auto mt-3">
        <NavBar />
      </section>
      <section className="max-w-[1280px] mx-auto mt-3 h-screen">
        <h2 className="text-5xl font-extrabold h-36 flex justify-center items-center">
          All Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <MyCard />
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto mt-3">
        <Footer />
      </section>
    </main>
  );
};

export default AllProducts;
