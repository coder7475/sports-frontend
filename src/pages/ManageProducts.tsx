import Footer from "@/components/footer/Footer";
import AddProduct from "@/components/forms/AddProduct/AddProduct";
import NavBar from "@/components/navbar/Navbar";
import { useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";
import { MdAutoDelete } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";

const ManageProducts = () => {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 4,
    noTabs: 4,
  });
  const wrapperRef = useRef(null);

  return (
    <main className="font-helve container mx-auto">
      <section className="max-w-[1280px] mx-auto mt-3">
        <NavBar />
      </section>

      <section className="max-w-[1280px] mx-auto mt-3">
        <h1 className="text-3xl font-bold text-center pt-10">
          <section className="max-w-full" aria-multiselectable="false">
            <ul
              className="flex items-center border-b border-yellow-200"
              role="tablist"
              ref={wrapperRef}
            >
              <li className="" role="presentation">
                <button
                  className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-card hover:stroke-card focus:bg-card focus-visible:outline-none disabled:cursor-not-allowed ${
                    tabSelected.currentTab === 1
                      ? "border-secondary stroke-secondary text-secondary hover:border-card  hover:text-card focus:border-primary focus:stroke-primary focus:text-primary disabled:border-slate-500"
                      : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-secondary hover:text-secondary focus:border-card focus:stroke-card focus:text-card disabled:text-slate-500"
                  }`}
                  id="tab-label-1ai"
                  role="tab"
                  aria-setsize={4}
                  aria-posinset={1}
                  tabIndex={tabSelected.currentTab === 1 ? 0 : -1}
                  aria-controls="tab-panel-1ai"
                  aria-selected={tabSelected.currentTab === 1}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 1 })
                  }
                >
                  <span className="order-2 pt-1.5">ADD PRODUCT</span>
                  <span className="relative only:-mx-6">
                    <IoMdAddCircle className="text-xl" />
                  </span>
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-card hover:stroke-card focus:bg-card focus-visible:outline-none disabled:cursor-not-allowed ${
                    tabSelected.currentTab === 2
                      ? "border-secondary stroke-secondary text-secondary hover:border-card  hover:text-card focus:border-primary focus:stroke-primary focus:text-primary disabled:border-slate-500"
                      : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-secondary hover:text-secondary focus:border-card focus:stroke-card focus:text-card disabled:text-slate-500"
                  }`}
                  id="tab-label-2ai"
                  role="tab"
                  aria-setsize={4}
                  aria-posinset={2}
                  tabIndex={tabSelected.currentTab === 2 ? 0 : -1}
                  aria-controls="tab-panel-2ai"
                  aria-selected={tabSelected.currentTab === 2}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 2 })
                  }
                >
                  <span className="order-2 pt-1.5">UPDATE PRODUCT</span>
                  <GrUpdate className="text-xl" />
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-card hover:stroke-card focus:bg-card focus-visible:outline-none disabled:cursor-not-allowed ${
                    tabSelected.currentTab === 3
                      ? "border-secondary stroke-secondary text-secondary hover:border-card  hover:text-card focus:border-primary focus:stroke-primary focus:text-primary disabled:border-slate-500"
                      : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-secondary hover:text-secondary focus:border-card focus:stroke-card focus:text-card disabled:text-slate-500"
                  }`}
                  id="tab-label-3ai"
                  role="tab"
                  aria-setsize={4}
                  aria-posinset={3}
                  tabIndex={tabSelected.currentTab === 3 ? 0 : -1}
                  aria-controls="tab-panel-3ai"
                  aria-selected={tabSelected.currentTab === 3}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 3 })
                  }
                >
                  <span className="order-2 pt-1.5">DELETE PRODUCT</span>
                  <span className="relative only:-mx-6">
                    <MdAutoDelete className="text-xl" />
                  </span>
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-card hover:stroke-card focus:bg-card focus-visible:outline-none disabled:cursor-not-allowed ${
                    tabSelected.currentTab === 4
                      ? "border-secondary stroke-secondary text-secondary hover:border-card  hover:text-card focus:border-primary focus:stroke-primary focus:text-primary disabled:border-slate-500"
                      : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-secondary hover:text-secondary focus:border-card focus:stroke-card focus:text-card disabled:text-slate-500"
                  }`}
                  id="tab-label-4ai"
                  role="tab"
                  aria-setsize={4}
                  aria-posinset={4}
                  tabIndex={tabSelected.currentTab === 4 ? 0 : -1}
                  aria-controls="tab-panel-4ai"
                  aria-selected={tabSelected.currentTab === 4}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 4 })
                  }
                >
                  <span className="order-2 pt-1.5">LIST PRODUCTS</span>
                  <span className="relative only:-mx-6">
                    <FaListAlt className="text-xl" />
                  </span>
                </button>
              </li>
            </ul>
            <div className="w-full ">
              <div
                className={`px-6 py-4 ${
                  tabSelected.currentTab === 1 ? "" : "hidden"
                }`}
                id="tab-panel-1ai"
                aria-selected={tabSelected.currentTab === 1}
                role="tabpanel"
                aria-labelledby="tab-label-1ai"
                tabIndex={-1}
              >
                <AddProduct />
              </div>
              <div
                className={`px-6 py-4 ${
                  tabSelected.currentTab === 2 ? "" : "hidden"
                }`}
                id="tab-panel-2ai"
                aria-selected={tabSelected.currentTab === 2}
                role="tabpanel"
                aria-labelledby="tab-label-2ai"
                tabIndex={-1}
              >
                <p>
                  One must be entirely sensitive to the structure of the
                  material that one is handling. One must yield to it in tiny
                  details of execution, perhaps the handling of the surface or
                  grain, and one must master it as a whole.
                </p>
              </div>
              <div
                className={`px-6 py-4 ${
                  tabSelected.currentTab === 3 ? "" : "hidden"
                }`}
                id="tab-panel-3ai"
                aria-selected={tabSelected.currentTab === 3}
                role="tabpanel"
                aria-labelledby="tab-label-3ai"
                tabIndex={-1}
              >
                <p>
                  Even though there is no certainty that the expected results of
                  our work will manifest, we have to remain committed to our
                  work and duties; because, even if the results are slated to
                  arrive, they cannot do so without the performance of work.
                </p>
              </div>
              <div
                className={`px-6 py-4 ${
                  tabSelected.currentTab === 4 ? "" : "hidden"
                }`}
                id="tab-panel-4ai"
                aria-selected={tabSelected.currentTab === 4}
                role="tabpanel"
                aria-labelledby="tab-label-4ai"
                tabIndex={-1}
              >
                <p>
                  This is where you can display a list of all products. You can
                  add a component or logic here to fetch and display the
                  products.
                </p>
              </div>
            </div>
          </section>
        </h1>
      </section>

      <section className="max-w-[1280px] mx-auto mt-3">
        <Footer />
      </section>
    </main>
  );
};

export default ManageProducts;
