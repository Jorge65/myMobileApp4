import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { useNavigate } from "react-router-native";
import * as yup from 'yup';
import { View, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required("Owner name required"),
  repositoryName: yup
    .string()
    .required("Repository name required"),
  rating: yup
    .number()
    .min(0, "Rating value must be greater or equal to 0")
    .max(100, "Rating value must be less than or equal to 100")
    .required("Rating value required"),
  text: yup.string(),
});

const ReviewForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.backgroundColors.button,
      color: "white",
      padding: 10,
      borderRadius: 3,
      marginTop: 10,
      textAlign: "center",
    },
    reviewForm: {
      backgroundColor: theme.backgroundColors.repositoryItem,
      padding: 10,
    },
  });
  return (
    <View style={styles.reviewForm}>
      <FormikTextInput 
        name="ownerName" 
        placeholder="Repository owner name" />
      <FormikTextInput 
        name="repositoryName" 
        placeholder="Repository name" />
      <FormikTextInput 
        name="rating" 
        placeholder="Rate between 0 and 100" />
      <FormikTextInput 
        multiline={true} 
        name="text" 
        placeholder="Your review text" />
      <Pressable 
        onPress={onSubmit}>
        <Text style={styles.button}>
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};


const CreateReview = () => {
  const [createReview] = useMutation(CREATE_REVIEW, {
    onError: (error) => window.alert(error),
  });
  const navigate = useNavigate();

  const onSubmit = async ( values ) => {
    const { ownerName, repositoryName, rating, text  } = values;
    //console.log("...CreateReview-input-values...", ownerName, repositoryName, rating, text)

    try {
      //console.log("...before createReview call...")
      const review = await createReview({
        variables: {
          review: { ownerName, repositoryName, rating: Number(rating), text },
        },
      });
      //console.log("...after createReview call...")
      navigate(`/repository/${review.data.createReview.repositoryId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
        initialValues={ {
            ownerName: '',
            repositoryName: '',
            rating: '',
            text: '',
        }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};


export default CreateReview;

