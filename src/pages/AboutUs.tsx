import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";

const AboutUs = () => {
  return (
    <main className="font-helve container mx-auto">
      <section className="max-w-[1280px] mx-auto mt-3">
        <NavBar />
      </section>
      <section className="max-w-[1280px] mx-auto mt-3">
        <h2 className="text-5xl font-extrabold h-36 flex justify-center items-center">
          About Us
        </h2>
        <p className="text-justify text-xl w-[80%] mx-auto font-medium">
          AccetPro is a leading provider of premium sports goods, dedicated to
          enhancing the performance and experience of athletes at all levels.
          Since our founding, we have been committed to offering high-quality
          products that meet the diverse needs of sports enthusiasts around the
          world. Our product range includes equipment, apparel, and accessories
          for a wide variety of sports, all designed with the latest technology
          and highest standards of craftsmanship.
        </p>
        <p>
          Mission and Vision Statements Mission: To empower athletes with
          innovative and reliable sports gear that enhances performance and
          fosters a passion for sports. Vision: To be a global leader in sports
          goods, recognized for our quality, innovation, and dedication to
          customer satisfaction.
        </p>
      </section>
      <section className="max-w-[1280px] mx-auto mt-3">
        <Footer />
      </section>
    </main>
  );
};

export default AboutUs;
