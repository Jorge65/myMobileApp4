import { FlatList, View, StyleSheet } from 'react-native';
//import RepositoryItem from './RepositoryItem'
import RepositoryListContainer from './RepositoryListContainer'
import useRepositories from '../hooks/useRepositories';


const RepositoryList = () => {
  const { repositories, refetch } = useRepositories();
  //console.log("...repositories...", repositories)
  return (
    <RepositoryListContainer 
      repositories={repositories} 
      refetch={refetch}
    />
  );
};

export default RepositoryList;
