import { Formik } from "formik";
import * as yup from 'yup';
import { View } from "react-native";
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


const CreateReview = () => {
  const onSubmit = async () => {
    console.log("...CreateReview-OnSubmit...")
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

const ReviewForm = ({ onSubmit }) => {
    return (
      <View>
          <Text>jorma</Text>
      </View>
    );
  };
  

export default CreateReview;

