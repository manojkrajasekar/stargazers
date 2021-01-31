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

test("Opens up Dialog modal with related topics on clicking the topic", () => {
  const { getByText } = render(
    <ApolloProvider client={client}>
      <Topic
        topic={{
          name: "Test_Topic",
          stargazerCount: 15,
          relatedTopics: [
            {
              name: "Test_Other_Topic",
              stargazerCount: 10,
            },
            {
              name: "Test_Yet_Another_Topic",
              stargazerCount: 10,
            },
          ],
        }}
      />
    </ApolloProvider>
  );
  const topicListItem = getByText("Test_Topic");
  fireEvent.click(topicListItem);
  const relatedTopicItem = getByText("Test_Other_Topic");
  expect(relatedTopicItem).toBeInTheDocument();
});
