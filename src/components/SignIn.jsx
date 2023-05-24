import { View, Pressable, Navigate, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import * as yup from 'yup';

import FormikTextInput from "./FormikTextInput";
import Text from './Text';
import theme from "../theme";
import useSignIn from "../hooks/useSignIn";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required"),
  password: yup
    .string()
    .required("Password is required"),
});

export const SignInComponent = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ 
        username: '', 
        password: '' 
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignInForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    form: {
      backgroundColor: theme.backgroundColors.repositoryItem,
      padding: 15,
    },
    button: {
      backgroundColor: theme.backgroundColors.button,
      color: "white",
      padding: 15,
      marginTop: 15,
      textAlign: "center",
    },
  });
  
  // console.log("onSubmit)")
  return (
    <View style={styles.form}>
      <FormikTextInput 
        name="username" 
        placeholder="Username" />
      <FormikTextInput 
        name="password" 
        placeholder="Password"
        secureTextEntry={true} />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}> 
          Sign in
        </Text>
      </Pressable>

    </View>
  );
};


const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { authenticate } = await signIn({ username, password });
      console.log("...accessToken:", authenticate.accessToken);
      navigate("/");
    } catch (e) {
      console.log("...e...", e);
    } 
  }
  return <SignInComponent onSubmit={onSubmit} />;

};

export default SignIn;

