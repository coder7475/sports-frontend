import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/Navbar";

const App = () => {
  return (
    <main className="font-helve container mx-auto mt-3">
      <section className="max-w-[1280px] mx-auto">
        <NavBar />
      </section>
      <section className="max-w-[1280px] mx-auto">
        <Footer />
      </section>
    </main>
  );
};

export default App;
