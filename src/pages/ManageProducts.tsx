import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import { useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";
import { FaListAlt } from "react-icons/fa";
import AddProductPanel from "./ManageProducts/AddProductPanel";
import ListProducts from "./ManageProducts/ListProducts";
import UpdateProduct from "@/components/forms/UpdateProduct/UpdateProduct";

const ManageProducts = () => {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 3,
    noTabs: 3,
  });
  const wrapperRef = useRef(null);

  return (
    <main className="font-helve container mx-auto">
      <section className="max-w-[1280px] mx-auto mt-3">
        <NavBar />
      </section>

      <section className="max-w-[1280px] mx-auto mt-3">
        <div className="text-3xl font-bold text-center pt-10">
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
                  <span className="order-2 pt-1.5">LIST PRODUCTS</span>
                  <span className="relative only:-mx-6">
                    <FaListAlt className="text-xl" />
                  </span>
                </button>
              </li>
            </ul>
            <div className="w-full ">
              <AddProductPanel tabSelected={tabSelected} />
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
                <UpdateProduct tabSelected={tabSelected} />
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
                <ListProducts
                  tabSelected={tabSelected}
                  setTabSelected={setTabSelected}
                />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mt-3">
        <Footer />
      </section>
    </main>
  );
};

export default ManageProducts;
