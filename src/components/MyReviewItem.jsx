import { StyleSheet } from "react-native";
import { format } from "date-fns";
import { View } from "react-native";
import Text from "./Text";
import theme from "../theme";

// Single review item
const MyReviewItem = ({ review }) => {

  console.log("...myReviewItem-review", review)

  const styles = StyleSheet.create({
    reviewContainer: {
      backgroundColor: theme.backgroundColors.repositoryItem,
      display: "flex",
      flexDirection: "row",
      padding: 20,
      marginTop: 10,
      marginHorizontal: 10,
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
      color: "textPrimary",
      marginTop: 5,
    },
  });

  return (
    <View style={styles.reviewContainer}>
      <Text 
        fontWeight='bold' 
        style={styles.rating}
      >
        {review.rating}
      </Text>

      <View style={styles.infoArea}>
        <Text 
          fontWeight="bold">
          {review.repository.fullName}
        </Text>

        <Text>
          {format(new Date(review.createdAt), 'dd.MM.yyyy')}
        </Text>

        <Text
          style={styles.reviewText}>
          {review.text}
        </Text>
      </View>
    </View>
  );
};

export default MyReviewItem;
