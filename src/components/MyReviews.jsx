import { FlatList, View, StyleSheet } from "react-native";
import useMyReviews from "../hooks/useMyReviews";
import MyReviewItem from "./MyReviewItem";
import Text from "./Text";
import theme from "../theme";

const MyReviews = () => {
  const { reviews, refetch } = useMyReviews();

  //console.log("...myReviewItem-review", reviews)
  const reviewData = 
    reviews ? 
    reviews.edges.map((edge) => edge.node) : 
    [];

  if ( reviewData.length > 0 ) {
    return (
      <FlatList
        data = { reviewData }
        renderItem = {({ item }) => (
          <MyReviewItem 
            review = {item} 
            refetch = {refetch} 
          />
        )}
      />
  ) } else {
    return (
      <View 
        style={{
          backgroundColor: theme.backgroundColors.repositoryItem,
          padding: 20,
          textAlign: "left",
        }}>
        <Text>
          No reviews yet...
        </Text>
      </View>
    )
  }
};

export default MyReviews;
