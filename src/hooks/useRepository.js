import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (repositoryId) => {
  //console.log("...useRepository starts...", repositoryId)

  const { data, error, loading, } = useQuery(GET_REPOSITORY, {
    variables: { id: repositoryId },
    fetchPolicy: "cache-and-network",
  });

  //debugger
  //console.log("...data?.repository...", data?.repository)

  return {
    repositoryNode: data ? data?.repository : undefined,
    loading
  };

};

export default useRepository;
