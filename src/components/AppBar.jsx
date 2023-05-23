import { View, StyleSheet, ScrollView, Pressable } from 'react-native'
import { Link, useNavigate } from "react-router-native";
import { useQuery, useApolloClient } from "@apollo/client";

import Constants from 'expo-constants'
import Text from './Text'
import theme from '../theme'
import { GET_ME } from "../graphql/queries";
import { useAuthStorage } from "../hooks/useAuthStorage";


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.appBar,
  },
  pressable: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    padding: 20,
  },
})

const AppBar = () => {
  const navigate = useNavigate();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  const meData = useQuery(GET_ME);
  let meLoggedIn = false

  if (!meData.data?.me) {
    console.log("...meData.me...", meData.data?.me)
    console.log("...meData.me.username...", meData.data?.me?.username)
    meLoggedIn = true
  } else {
    console.log("...meData.me...", meData.data?.me)
    meLoggedIn = false
  }

  const signOut = () => {
    console.log("...signOut starts...")    
    authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/");
  };

  if (!meLoggedIn) {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <Link to="/">
            <Text style={styles.pressable}>Repositories</Text>
          </Link>
          <Link to="/create">
              <Text style={styles.pressable}>Create a review</Text>
          </Link>
          <Pressable onPress={ signOut }>
            <Text style={ styles.pressable }>Sign out</Text>
          </Pressable>
        </ScrollView>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <Link to="/">
            <Text style={styles.pressable}>Repositories</Text>
            </Link>
          <Link to="/sign-in">
            <Text style={styles.pressable}>Sign in</Text>
          </Link>
        </ScrollView>
      </View>
    )  
  }

}

export default AppBar
