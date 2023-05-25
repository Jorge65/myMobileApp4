import { useState } from "react";
import { PaperProvider, Menu, Button } from "react-native-paper";

const SortFilter = ({ refetch }) => {
  const [visible, setVisible] = useState(false);
  const [sortType, setSortType] = useState("Latest");

  const handleSelected = (selection) => {
    setSortType(selection);
    if (selection === "Highest Rate") {
      refetch({ orderBy: "RATING_AVERAGE", orderDirection: "DESC" });
    } else if (selection === "Lowest Rate") {
      refetch({ orderBy: "RATING_AVERAGE", orderDirection: "ASC" });
    } else if (selection === "Latest") {
      refetch({ orderBy: "CREATED_AT", orderDirection: "DESC" });
    } else {
      refetch({ orderBy: "CREATED_AT", orderDirection: "DESC" });
    }
    setVisible(false)
  };

  return (
    <PaperProvider>
      <Menu
        visible={visible}
        style={{ 
          borderWidth: 1, 
          top: 100, 
          left: 50, 
          zIndex: 1 }}
        onDismiss={ () => { setVisible(false) }}
        anchor={
          <Button
            onPress={ () => { setVisible(true) } }
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
          onPress={() => handleSelected("Latest")}
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
