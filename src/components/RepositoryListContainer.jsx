import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem'
import SortFilter from "./SortFilter";
import SearchFilter from "./SearchFilter";

const RepositoryListContainer = ({ repositories, refetch }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  //console.log("...repositoryNodes...", repositoryNodes)
  return (
    <FlatList
      data={repositoryNodes}
      ListHeaderComponent={
        <>
          <SearchFilter
            refetch={refetch}
          />
          <SortFilter
            refetch={refetch}
          />
        </>
      }
      ListHeaderComponentStyle={{ 
        zIndex: 100 
      }}
      renderItem={({item}) => <RepositoryItem repositoryNode={item} />}
    />
  );
};

export default RepositoryListContainer;
