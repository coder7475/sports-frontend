export interface TabSelectedProps {
  currentTab: number;
  noTabs: number;
}

export interface ListProductsProps {
  setTabSelected: React.Dispatch<
    React.SetStateAction<{
      currentTab: number;
      noTabs: number;
    }>
  >;
  tabSelected: {
    currentTab: number;
    noTabs: number;
  };
}
