import Footer from "@/components/footer/Footer";
import AddProduct from "@/components/forms/AddProduct/AddProduct";
import NavBar from "@/components/navbar/Navbar";
import { useRef, useState } from "react";

const ManageProducts = () => {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
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
              className="flex items-center border-b border-yell ow-200"
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
                  aria-setsize="3"
                  aria-posinset="1"
                  tabIndex={tabSelected.currentTab === 2 ? 0 : -1}
                  aria-controls="tab-panel-1ai"
                  aria-selected={`${
                    tabSelected.currentTab === 1 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 1 })
                  }
                >
                  <span className="order-2 pt-1.5">ADD PRODUCT</span>
                  <span className="relative only:-mx-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="hidden h-6 w-6 sm:block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-labelledby="title-77a desc-77a"
                    >
                      <title id="title-77a">Add Product</title>
                      <desc id="desc-77a">Creates New Products</desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
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
                  aria-setsize="3"
                  aria-posinset="2"
                  tabIndex={tabSelected.currentTab === 2 ? 0 : -1}
                  aria-controls="tab-panel-2ai"
                  aria-selected={`${
                    tabSelected.currentTab === 2 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 2 })
                  }
                >
                  <span className="order-2 pt-1.5">UPDATE PRODUCT</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden h-6 w-6 sm:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-77b desc-77b"
                  >
                    <title id="title-77b">Update Product</title>
                    <desc id="desc-77b">Update Existing Product</desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
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
                  aria-setsize="3"
                  aria-posinset="3"
                  tabIndex={tabSelected.currentTab === 2 ? 0 : -1}
                  aria-controls="tab-panel-3ai"
                  aria-selected={`${
                    tabSelected.currentTab === 3 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 3 })
                  }
                >
                  <span className="order-2 pt-1.5">DELETE PRODUCT</span>
                  <span className="relative only:-mx-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="hidden h-6 w-6 sm:block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-labelledby="title-77c desc-77c"
                    >
                      <title id="title-77c">Delete Product</title>
                      <desc id="desc-77c">Delete Existing Product</desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      />
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
            <div className="">
              <div
                className={`px-6 py-4 ${
                  tabSelected.currentTab === 1 ? "" : "hidden"
                }`}
                id="tab-panel-1ai"
                aria-selected={`${
                  tabSelected.currentTab === 1 ? "true" : "false"
                }`}
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
                aria-selected={`${
                  tabSelected.currentTab === 2 ? "true" : "false"
                }`}
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
                aria-selected={`${
                  tabSelected.currentTab === 3 ? "true" : "false"
                }`}
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
