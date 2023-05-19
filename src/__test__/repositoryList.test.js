import { render, screen, within } from "@testing-library/react-native";
import RepositoryListContainer from "../components/RepositoryListContainer";

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      }
      // Add your test code here

      render(<RepositoryListContainer repositories={repositories} />);
      const repositoryItems = screen.getAllByTestId("repositoryItem");
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      //screen.debug();

      //   **** testing upper part of the view

      // testing avatar
      expect(within(firstRepositoryItem)
        .getByTestId("avatar"))
        .toHaveProp(
          "source", { uri: "https://avatars2.githubusercontent.com/u/4060187?v=4" }
      );
      expect(within(secondRepositoryItem)
        .getByTestId("avatar"))
        .toHaveProp(
          "source", { uri: "https://avatars1.githubusercontent.com/u/54310907?v=4" }
      );
      
      // testing full name
      expect(
        within(firstRepositoryItem)
        .getByTestId("fullname"))
        .toHaveTextContent("jaredpalmer/formik");
      expect(
        within(secondRepositoryItem)
        .getByTestId("fullname"))
        .toHaveTextContent("async-library/react-async");

      // testing description
      expect(
        within(firstRepositoryItem)
        .getByTestId("description"))
        .toHaveTextContent("Build forms in React, without the tears");
      expect(
        within(secondRepositoryItem)
        .getByTestId("description"))
        .toHaveTextContent("Flexible promise-based React data loader");

      // testing language
      expect(
        within(firstRepositoryItem)
        .getByTestId("language"))
        .toHaveTextContent("TypeScript");
      expect(
        within(secondRepositoryItem)
        .getByTestId("language"))
        .toHaveTextContent("JavaScript");
        
      //   **** testing the lower part and numbers 

      // testing stars
      expect(
        within(firstRepositoryItem)
          .getByTestId("stars"))
          .toHaveTextContent("21.8k");
      expect(
        within(secondRepositoryItem)
          .getByTestId("stars"))
          .toHaveTextContent("1.7k");

      // testing forks
      expect(
        within(firstRepositoryItem)
          .getByTestId("forks"))
          .toHaveTextContent("1.6k");
      expect(
        within(secondRepositoryItem)
          .getByTestId("forks"))
          .toHaveTextContent("69");

      // testing reviews
      expect(
        within(firstRepositoryItem)
          .getByTestId("reviews"))
          .toHaveTextContent("3");
      expect(
        within(secondRepositoryItem)
          .getByTestId("reviews"))
          .toHaveTextContent("3");

      // testing ratings
      expect(
        within(firstRepositoryItem)
          .getByTestId("rating"))
          .toHaveTextContent("88");
      expect(
        within(secondRepositoryItem)
          .getByTestId("rating"))
          .toHaveTextContent("72");


    });    
  });
});
