import "./SwitchTabsButton.css";

const TabButton = ({ tabs, setCurrentTab, currentTab, className }) => {
  return (
    <div className={`tab-button-container ${className}`}>
      {tabs.map((data, index) => {
        return (
          <div
            key={index}
            className={`tab-button  ${
              currentTab === data ? "active" : "non-active"
            }`}
            onClick={() => setCurrentTab(data)}
          >
            {data}
          </div>
        );
      })}
    </div>
  );
};

export default TabButton;
