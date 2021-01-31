import { ApolloProvider } from "@apollo/client";

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Topic from "../../components/topic/Topic";
import client from "../../utils/createClient";

afterEach(cleanup);

test("Renders Topic Appropriately", () => {
  render(
    <ApolloProvider client={client}>
      <Topic
        topic={{
          name: "Test_Topic",
          stargazerCount: 5,
        }}
      />
    </ApolloProvider>
  );
  const linkElement = screen.getByText(/Test_Topic/i);
  expect(linkElement).toBeInTheDocument();
});
