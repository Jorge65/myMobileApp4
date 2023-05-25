import { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce";

const SearchFilter = ({ refetch }) => {
  const [ searchValue, setSearchValue ] = useState("");
  const [ searchKeyword ] = useDebounce(searchValue, 500);

  useEffect(() => {
    refetch({ searchKeyword });
  }, [ searchKeyword ]);

  return (
    <Searchbar
      style={{ 
        backgroundColor: 'white', 
        margin: 10 
      }}
      placeholder="Search with keyword..."
      value={ searchValue }
      onChangeText={
        ( value ) => setSearchValue( value )
      }
    />
  );
};

export default SearchFilter;
