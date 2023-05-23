import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem'


const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  //console.log("...repositoryNodes...", repositoryNodes)
  return (
    <FlatList
      data={repositoryNodes}
      // other props
      renderItem={({item}) => <RepositoryItem repositoryNode={item} />}
    />
  );
};

export default RepositoryListContainer;
