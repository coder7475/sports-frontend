import Banner from "./components/banner/banner";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/Navbar";
import ContactUs from "./pages/homepage/ContactUs";
import FeaturedSection from "./pages/homepage/FeaturedSection";
import TopCategories from "./pages/homepage/TopCategories";

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
        <FeaturedSection />
      </section>
      <section className="max-w-[1280px] mx-auto mt-3">
        <TopCategories />
      </section>
      <section className="max-w-[1280px] mx-auto mt-3">
        <ContactUs />
      </section>
      <section className="max-w-[1280px] mx-auto mt-3">
        <Footer />
      </section>
    </main>
  );
};

export default App;
