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
            <img src="/src/assets/ceo.jpg" alt="ceo" className="w-[500px] h-[400px]" />
            <div className="text-center mt-2">
              <h3 className="font-black text-lg">Adetola Afolabi</h3>
              <h4 className="font-semibold">CEO</h4>
            </div>
          </div>
          <div className="border-2 rounded-md p-2">
            <img src="/src/assets/cto.jpg" alt="" className="" />
            <div className="text-center mt-4">
              <h3 className="font-black text-lg">Robiul Hossain</h3>
              <h4 className="font-semibold">Founder & CTO</h4>
            </div>
          </div>
          <div className="border-2 rounded-md">
            <img src="/src/assets/coo.jpg" alt="" className="w-[500px] h-[400px]" />
            <div className="text-center mt-2">
              <h3 className="font-black text-lg">Sharaddha Kutty</h3>
              <h4 className="font-semibold">COO</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-graypy-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center"></h2> */}
        <h2 className="text-5xl font-extrabold h-36 flex justify-center items-center">
        Store Locations
        </h2>
        <p className="text-lg text-center mb-12">
          Visit us at one of our conveniently located stores for the best selection of sporting goods and expert advice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Store 1 */}
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Downtown Store</h3>
            <p className="mb-4">123 Main Street, Downtown City</p>
            <p className="mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="mb-4">
              <strong>Hours:</strong> Sat-Thu: 9am - 8pm, Fri: 10am - 6pm
            </p>
            
          </div>

          {/* Store 2 */}
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Uptown Store</h3>
            <p className="mb-4">456 Market Street, Uptown City</p>
            <p className="mb-2">
              <strong>Phone:</strong> (987) 654-3210
            </p>
            <p className="mb-4">
              <strong>Hours:</strong> Sat-Thu: 10am - 7pm, Fri: 10am - 6pm
            </p>
       
          </div>

          {/* Store 3 */}
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Suburban Store</h3>
            <p className="mb-4">789 Green Road, Suburban Area</p>
            <p className="mb-2">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className="mb-4">
              <strong>Hours:</strong> Sat-Fri: 9am - 9pm, Fri: 11am - 5pm
            </p>
           
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
