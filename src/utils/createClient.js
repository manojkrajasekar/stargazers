import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GRAPHQL_URL } from "../constants/Urls";

const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
});

const authenticationLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authenticationLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
