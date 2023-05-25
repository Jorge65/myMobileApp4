import { useState } from "react";
import { PaperProvider, Menu, Button } from "react-native-paper";

const SortFilter = ({ refetch }) => {
  const [visible, setVisible] = useState(false);
  const [sortType, setSortType] = useState("Latest repositories");

  const handleSelected = (selected) => {
    setSortType(selected);
    if (selected === "Highest Rate") {
      refetch({ orderBy: "RATING_AVERAGE", orderDirection: "DESC" });
    } else if (selected === "Lowest Rate") {
      refetch({ orderBy: "RATING_AVERAGE", orderDirection: "ASC" });
    } else if (selected === "Latest") {
      refetch({ orderBy: "CREATED_AT", orderDirection: "DESC" });
    } else {
      refetch({ orderBy: "CREATED_AT", orderDirection: "DESC" });
    }
    closeMenu();
  };

  const openMenu = () => { setVisible(true) }
  const closeMenu = () => { setVisible(false) }

  return (
    <PaperProvider>
      <Menu
        visible={visible}
        style={{ 
          borderWidth: 1, 
          top: 100, 
          left: 50, 
          zIndex: 100 }}
        onDismiss={closeMenu}
        anchor={
          <Button
            onPress={openMenu}
            icon="menu-down"
            contentStyle={{ 
              flexDirection: "row-reverse",
              backgroundColor: "lightgrey" }}
          >
            {sortType}
          </Button>
        }
      >
        <Menu.Item 
          style={{ backgroundColor: "lightgrey" }}
          title="Select an item..." 
          disabled 
        />
        <Menu.Item
          style={{ backgroundColor: "white" }}
          onPress={() => handleSelected("Latest repositories")}
          title="Latest repositories"
        />
        <Menu.Item
          style={{ backgroundColor: "white" }}
          onPress={() => handleSelected("Highest Rate")}
          title="Highest rated repositories"
        />
        <Menu.Item
          style={{ backgroundColor: "white" }}
          onPress={() => handleSelected("Lowest Rate")}
          title="Lowest rated repositories"
        />
      </Menu>
    </PaperProvider>
  );
};

export default SortFilter;
