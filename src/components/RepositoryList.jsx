import { FlatList, View, StyleSheet } from 'react-native';
//import RepositoryItem from './RepositoryItem'
import RepositoryListContainer from './RepositoryListContainer'
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const RepositoryList = () => {
  const { repositories } = useRepositories();
  //console.log("...repositories...", repositories)
  return (
    <RepositoryListContainer repositories={repositories} />
  );
};

export default RepositoryList;
