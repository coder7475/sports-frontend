import Banner from "./components/banner/banner";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/Navbar";

const App = () => {
  return (
    <main className="font-helve container mx-auto">
      <section className="max-w-[1280px] mx-auto mt-3">
        <NavBar />
      </section>
      <section className="container mx-auto mt-3">
        <Banner />
      </section>
      <section className="max-w-[1280px] mx-auto mt-3">
        <Footer />
      </section>
    </main>
  );
};

export default App;
