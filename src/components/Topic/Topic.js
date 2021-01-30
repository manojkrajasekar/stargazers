import {
  Chip,
  Dialog,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  chipContainer: {
    backgroundColor: "#5389a3",
  },
}));

const Topic = ({ topic }) => {
  const [showRelatedTopics, setShowRelatedTopics] = useState(false);
  const classes = useStyles();

  return (
    <>
      <ListItem button divider onClick={() => setShowRelatedTopics(true)}>
        <ListItemText data-testid="topicName" primary={topic.name} />
        <Chip
          className={classes.chipContainer}
          color="primary"
          label={topic.stargazerCount}
        />
      </ListItem>
      <Dialog
        maxWidth="md"
        fullWidth
        open={showRelatedTopics}
        onClose={() => setShowRelatedTopics(false)}
      >
        <DialogTitle id="scroll-dialog-title" disableTypography>
          <Typography variant="h5">Related Topics</Typography>
        </DialogTitle>
        <Grid container>
          <Grid item md={14}>
            <List component="div" role="list">
              {topic.relatedTopics?.map((relatedTopic, index) => (
                <ListItem button divider role="listitem" key={index}>
                  <ListItemText primary={relatedTopic.name} />
                  <ListItemSecondaryAction>
                    <Chip
                      className={classes.chipContainer}
                      color="primary"
                      label={relatedTopic.stargazerCount}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
              {topic.relatedTopics && topic.relatedTopics.length === 0 && (
                <Typography
                  variant="subtitle1"
                  align="center"
                  color="secondary"
                >
                  No related topic found.
                </Typography>
              )}
            </List>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

Topic.propTypes = {
  topic: PropTypes.shape({
    name: PropTypes.string,
    stargazerCount: PropTypes.number,
    relatedTopics: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        stargazerCount: PropTypes.number,
      })
    ),
  }),
};

export default Topic;
