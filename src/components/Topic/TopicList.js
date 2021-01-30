import { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { List, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import Topic from "./Topic";

export const GET_RELATED_TOPICS_LIST = gql`
  query getTopics($topicNameFilter: String!) {
    search(query: $topicNameFilter, type: REPOSITORY, first: 20) {
      nodes {
        ... on Repository {
          repositoryTopics(first: 10) {
            nodes {
              topic {
                name
                stargazerCount
                relatedTopics(first: 10) {
                  name
                  stargazerCount
                }
              }
            }
          }
        }
      }
    }
  }
`;

const TopicsList = ({ topicName }) => {
  const topicNameFilter = `topic=${topicName}`;
  const { loading, error, data } = useQuery(GET_RELATED_TOPICS_LIST, {
    variables: { topicNameFilter },
  });

  if (loading) return <CircularProgress />;
  if (error) return `Error in Fetching Related Topics ! ${error}`;

  return (
    <List data-testid="topicsList">
      {data &&
        data.search.nodes.map((node, index) => (
          <Fragment key={index}>
            {node.repositoryTopics.nodes.map(({ topic }, index1) => (
              <Topic topic={topic} key={index1} />
            ))}
          </Fragment>
        ))}
      {data && data.search.nodes.length === 0 && (
        <Typography variant="subtitle1" align="center" color="secondary">
          No Related topics found.
        </Typography>
      )}
    </List>
  );
};

TopicsList.propTypes = {
  topicName: PropTypes.string,
};

export default TopicsList;
