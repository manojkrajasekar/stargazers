import { useState } from "react";
import { TextField, Grid } from "@material-ui/core";
import TopicsList from "./TopicList";

const TopicContainer = () => {
  const [topicText, setTopicText] = useState("react");

  const handleTextChange = ({ target }) => {
    setTopicText(target.value);
  };
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item md={10}>
        <TextField
          variant="outlined"
          fullWidth
          type="text"
          name="topicText"
          value={topicText}
          onChange={handleTextChange}
        />
        <TopicsList topicName={topicText} />
      </Grid>
    </Grid>
  );
};

export default TopicContainer;
