import { Image, View, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
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

const RepositoryItem = ({ repositoryNode, loading, repositoryID }) => {
  console.log("...repositoryNode...", repositoryNode)

  const navigate = useNavigate();

  if (!repositoryNode && loading) {
    return (
      <Text 
        style={{ textAlign: "left" }}>
        Loading... 
      </Text>
    )
  }

  return (
    <View 
      testID="repositoryItem"
      style={styles.container}>
      <Pressable 
          onPress={ () => 
            !repositoryID && navigate(`/repository/${repositoryNode.id}`) 
          }>
        <View style={styles.upperContainer}>
          <Image
            testID="avatar"
            style={styles.image}
            source={{ uri: repositoryNode.ownerAvatarUrl }}
          ></Image>
            <View style={styles.basicDataView}>
              <Text 
                testID="fullname" 
                fontSize='subheading' 
                fontWeight='bold'
              >
                Full name: 
                {repositoryNode.fullName}
              </Text>
              <Text
                testID="description"
              >
                Description: 
                {repositoryNode.description}
              </Text>
              <Text 
                testID="language" 
                style={styles.importantInfo}
              >
                Language: {repositoryNode.language}
              </Text>
              </View>
          </View>
        <View style={styles.lowerContainer}>
          <TwoRowInfo 
            testID="stars"
            text="Stars" 
            number={
              repositoryNode.stargazersCount > 1000
                ? (repositoryNode.stargazersCount / 1000).toFixed(2).slice(0, -1) + "k"
                : repositoryNode.stargazersCount
            } />
          <TwoRowInfo 
            testID="forks"
            text="Forks" 
            number={
              repositoryNode.forksCount > 1000
                ? (repositoryNode.forksCount / 1000).toFixed(2).slice(0, -1) + "k"
                : repositoryNode.forksCount
            } />
          <TwoRowInfo 
            testID="reviews"
            text="Reviews" 
            number={
              repositoryNode.reviewCount > 1000
                ? (repositoryNode.reviewCount / 1000).toFixed(2).slice(0, -1) + "k"
                : repositoryNode.reviewCount
            } />
          <TwoRowInfo 
            testID="rating"
            text="Rating" 
            number={
              repositoryNode.ratingAverage > 1000
                ? (repositoryNode.ratingAverage / 1000).toFixed(2).slice(0, -1) + "k"
                : repositoryNode.ratingAverage
            } />
        </View>
        </Pressable>
    </View>  
  );
}

export default RepositoryItem;
  