import RepositoryItem from "./RepositoryItem";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";

const SingleRepository = () => {
  const repositoryId = useParams().id;

  //console.log("...before useRepository, repositoryId...", repositoryId)
  const { repositoryNode, loading } = useRepository(repositoryId);
  //console.log("...repositoryNode...", repositoryNode)

  return (
    <RepositoryItem 
        repositoryNode={repositoryNode}
        loading={loading}
        repositoryId={repositoryId}
    />
  );
};

export default SingleRepository;
