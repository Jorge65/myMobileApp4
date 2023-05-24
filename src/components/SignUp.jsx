import { View, StyleSheet, Pressable } from "react-native";
import { useMutation } from "@apollo/client";

import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";

import theme from "../theme";
import Text from "./Text";
import useSignIn from "../hooks/useSignIn";

import { CREATE_USER } from "../graphql/mutations";
import { useNavigate } from "react-router-native";


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, "Username length must be more than or equal to 1")
    .max(30, "Username length must less than or equal to 30")
    .required("Username required"),
  password: yup
    .string()
    .min(5, "Password length must be more than or equal to 5")
    .max(50, "Password length must less than or equal to 50")
    .required("Password required"),
  password2: yup
    .string()
    .oneOf([yup.ref("password")], "Password and confirmation must be equal")
    .required("Password confirmation required"),
});

const SignUpForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.backgroundColors.button,
      color: "white",
      textAlign: "center",
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    passwordForm: {
        backgroundColor: theme.backgroundColors.repositoryItem,
        padding: 10,
      },
    });

  return (
    <View style={styles.passwordForm}>
        <FormikTextInput 
            name="username" 
            placeholder="Username" />
        <FormikTextInput
            name="password"
            placeholder="Password"
            secureTextEntry={true} />
        <FormikTextInput
            name="password2"
            placeholder="Password confirmation"
            secureTextEntry={true} />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>
            Sign up
        </Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const [signUp] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    //console.log("...username, password...", username, password)

    try {        
        //console.log("...before signUp..")
        await signUp({ 
            variables: { user: { username, password } } 
        });
        //console.log("...before signIn..")
        await signIn(
            { username, password }
        );
        //console.log("...after signIn..")
        navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
        initialValues={{ 
            username: '', 
            password: '',
            password2: ''
        }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;