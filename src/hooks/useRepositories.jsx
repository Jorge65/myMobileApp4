import { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
    const { data, error, loading, ...result } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
      });

      //console.log("...data.repositories...", data.repositories)
      return {
        repositories: data ? data.repositories : undefined,
        loading,
        ...result,
      };
};

export default useRepositories;
