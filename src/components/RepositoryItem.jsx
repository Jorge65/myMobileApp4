import { Image, View, StyleSheet } from "react-native";
import theme from "../theme";
import Text from './Text';

const TwoRowInfo = ({ text, number, testID }) => {
  const styles = StyleSheet.create({
    number: {
      fontWeight: theme.fontWeights.bold,
      textAlign: "center",
    },
    text: {
      color: theme.colors.desc,
      textAlign: "center",
    },
  });
  return (
    <View 
      testID={testID}
    > 
      <Text style={styles.count}>{number}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColors.repositoryItem,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    upperContainer: { 
      backgroundColor: theme.backgroundColors.repositoryItem,
      display: "flex", 
      flexDirection: "row" 
    },
    lowerContainer: { 
      backgroundColor: theme.backgroundColors.repositoryItem,
      display: "flex", 
      flexDirection: "row" ,
      justifyContent: "space-around",
      paddingTop: 10,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 10,
      marginRight: 20,
    },
    basicDataView: {
      display: "flex",
      flex: 1,
    },
    importantInfo: {
      backgroundColor: theme.backgroundColors.importantInfo,
      color: 'white',
      padding: 5,
      borderRadius: 5,
      alignSelf: "flex-start",
    },
  });

const RepositoryItem = ({ props }) => {
  //console.log("...", props)
  return (
    <View 
      testID="repositoryItem"
      style={styles.container}>
      <View style={styles.upperContainer}>
        <Image
          testID="avatar"
          style={styles.image}
          source={{ uri: props.ownerAvatarUrl }}
        ></Image>
          <View style={styles.basicDataView}>
            <Text 
              testID="fullname" 
              fontSize='subheading' 
              fontWeight='bold'
            >
              Full name: 
              {props.fullName}
            </Text>
            <Text
              testID="description"
            >
              Description: 
              {props.description}
            </Text>
            <Text 
              testID="language" 
              style={styles.importantInfo}
            >
              Language: {props.language}
            </Text>
            </View>
        </View>
      <View style={styles.lowerContainer}>
        <TwoRowInfo 
          testID="stars"
          text="Stars" 
          number={
            props.stargazersCount > 1000
              ? (props.stargazersCount / 1000).toFixed(2).slice(0, -1) + "k"
              : props.stargazersCount
          } />
        <TwoRowInfo 
          testID="forks"
          text="Forks" 
          number={
            props.forksCount > 1000
              ? (props.forksCount / 1000).toFixed(2).slice(0, -1) + "k"
              : props.forksCount
          } />
        <TwoRowInfo 
          testID="reviews"
          text="Reviews" 
          number={
            props.reviewCount > 1000
              ? (props.reviewCount / 1000).toFixed(2).slice(0, -1) + "k"
              : props.reviewCount
          } />
        <TwoRowInfo 
          testID="rating"
          text="Rating" 
          number={
            props.ratingAverage > 1000
              ? (props.ratingAverage / 1000).toFixed(2).slice(0, -1) + "k"
              : props.ratingAverage
          } />
      </View>
    </View>  
  );
}

export default RepositoryItem;
  