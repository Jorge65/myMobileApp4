import { format } from "date-fns";
import { View, FlatList, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import theme from "../theme";
import Text from './Text';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review }) => {
  // Single review item
  const styles = StyleSheet.create({
    repositoryContainer: {
      marginHorizontal: 10,
    },
    reviewContainer: {
      backgroundColor: theme.backgroundColors.repositoryItem,
      display: "flex",
      flexDirection: "row",
      padding: 20,
    },
    rating: {
      borderColor: theme.backgroundColors.importantInfo,
      borderWidth: 2,
      width: 50,
      height: 50,
      borderRadius: 100,
      marginRight: 20,
      paddingTop: 15,
      textAlign: "center",
    },
    infoArea: {
      flex: 1,
    },
    reviewText: {
      marginTop: 5,
    },

  });

  //console.log("...review...", review)

  return (
    <View style={styles.repositoryContainer} >
      <View style={styles.reviewContainer}>
        <Text 
          color="textPrimary"
          fontWeight="bold" 
          style={styles.rating}
        >
          {review.rating}
        </Text>
        <View style={styles.infoArea}>
          <Text 
            fontWeight="bold"
            color="textPrimary"
          >
            {review.user.username}
          </Text>
          <Text
            >
            {format(new Date(review.createdAt), "dd.mm.yyyy")}
          </Text>
          <Text
            style={styles.reviewText}
          >
            {review.text}
          </Text>
        </View>
      </View>
    </View>
  )

};

const SingleRepository = () => {
  const repositoryId = useParams().id;

  //console.log("...before useRepository, repositoryId...", repositoryId)
  const { repositoryNode, loading } = useRepository(repositoryId);
  //console.log("..1.repositoryNode...", repositoryNode)

  const reviews = repositoryNode
  ? repositoryNode.reviews.edges.map((edge) => edge.node)
  : [];

  //console.log("..4.reviews ...", reviews)

  return (
    <View style={ styles.repositoryContainer }>
      <FlatList
        data={reviews}
        renderItem={({ item }) => 
          <ReviewItem
            review={item} 
          />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={() => 
          <RepositoryItem 
            repositoryNode={repositoryNode}
            loading={loading}
            repositoryId={repositoryId}
          />}
        // ...
      />
    </View>
  );

};

export default SingleRepository;
