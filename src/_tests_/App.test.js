import { ApolloProvider } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import App from "../App";
import client from "../utils/createClient";

test("Renders App appropriately", () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  const linkElement = screen.getByText(/Git Topics Explorer App/i);
  expect(linkElement).toBeInTheDocument();
});
