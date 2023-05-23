import { useMutation, useApolloClient } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import { useAuthStorage } from "./useAuthStorage";

const useSignIn = () => {
  const [signInMutate, result] = useMutation(SIGN_IN, {
    onError: (error) => window.alert(error),
  });

  //const authStorage = useContext(AuthStorageContext);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await signInMutate({
      variables: { credentials: { username, password } }
    });
    //console.log("...data.authenticate.accessToken...", data.authenticate.accessToken)
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
    return data
  };
  return [signIn, result];

};

export default useSignIn;
