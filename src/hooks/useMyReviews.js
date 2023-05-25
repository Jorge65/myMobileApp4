import { useQuery } from "@apollo/client";
import { GET_ME2 } from "../graphql/queries";

const useMyReviews = () => {
  const { data, refetch } = useQuery(GET_ME2, {
    variables: { includeReviews: true },
  });

  return {
    reviews: 
      data 
      ? data.me.reviews 
      : undefined,
    refetch,
  };
};

export default useMyReviews;
