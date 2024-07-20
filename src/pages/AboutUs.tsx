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
        <p className="text-justify text-xl w-[80%] mx-auto font-bold">
          AccetPro is a leading provider of premium sports goods, dedicated to
          enhancing the performance and experience of athletes at all levels.
          Since our founding, we have been committed to offering high-quality
          products that meet the diverse needs of sports enthusiasts around the
          world. Our product range includes equipment, apparel, and accessories
          for a wide variety of sports, all designed with the latest technology
          and highest standards of craftsmanship.
        </p>

        <h2 className="text-5xl font-extrabold h-36 flex justify-center items-center">
          Mission and Vision Statements
        </h2>
        <div className="text-xl tracking-wider mx-auto text-center w-[80%] font-bold flex justify-center items-center">
          Our Mission is to empower athletes with innovative and reliable sports
          gear that enhances performance and fosters a passion for sports.
        </div>
        <br />
        <hr className="w-[80%] mx-auto" />
        <br />
        <div className="text-xl tracking-wide font-bold mx-auto w-[80%] text-center flex justify-center items-center">
          We aim be a global leader in sports goods, recognized for our quality,
          innovation, and dedication to customer satisfaction.
        </div>
        <h2 className="text-5xl font-extrabold h-36 flex justify-center items-center">
          Our Contact Information
        </h2>
        <div className="text-xl w-[80%] mx-auto text-center">
          <h3>
            <span className="font-bold">Email:</span> support@accelpro.io
          </h3>
          <h3>
            <span className="font-bold">Phone:</span> +880-134-977-6358
          </h3>
          <h3>
            <span className="font-bold">Address:</span> Chittagong, Bangladesh
          </h3>
        </div>
        <h2 className="text-5xl font-extrabold h-36 flex justify-center items-center">
          Our Team
        </h2>
        <div className="flex flex-col lg:flex-row gap-2 justify-center items-center">
          <div className="border-2 rounded-md">
            <img src="/src/assets/preview.png" alt="" className="" />
            <div className="text-center mt-2">
              <h3 className="font-black text-lg">Robiul Hossain</h3>
              <h4 className="font-semibold">CTO</h4>
            </div>
          </div>
          <div className="border-2 rounded-md p-2">
            <img src="/src/assets/preview.png" alt="" className="" />
            <div className="text-center mt-4">
              <h3 className="font-black text-lg">Robiul Hossain</h3>
              <h4 className="font-semibold">CEO</h4>
            </div>
          </div>
          <div className="border-2 rounded-md">
            <img src="/src/assets/preview.png" alt="" className="" />
            <div className="text-center mt-2">
              <h3 className="font-black text-lg">Robiul Hossain</h3>
              <h4 className="font-semibold">COO</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto mt-3">
        <Footer />
      </section>
    </main>
  );
};

export default AboutUs;
