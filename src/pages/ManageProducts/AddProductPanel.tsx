import AddProduct from "@/components/forms/AddProduct/AddProduct";
import { TabSelectedProps } from "@/interfaces/manage.products";

const AddProductPanel = ({
  tabSelected,
}: {
  tabSelected: TabSelectedProps;
}) => {
  return (
    <div
      className={`px-6 py-4 ${tabSelected.currentTab === 1 ? "" : "hidden"}`}
      id="tab-panel-1ai"
      aria-selected={tabSelected.currentTab === 1}
      role="tabpanel"
      aria-labelledby="tab-label-1ai"
      tabIndex={-1}
    >
      <AddProduct />
    </div>
  );
};

export default AddProductPanel;
