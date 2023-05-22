import { StyleSheet, View } from 'react-native';
import { Route, Routes } from 'react-router-native';
//import Constants from 'expo-constants';

import RepositoryList from './RepositoryList';
import SingleRepository from "./SingleRepository";

//import Text from './Text';
import AppBar from './AppBar';
import SignIn from './SignIn';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/repository/:id" element={<SingleRepository />} />
      </Routes>
    </View>
  );
};



export default Main;
