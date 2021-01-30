import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  makeStyles,
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
} from "@material-ui/core";
import TopicContainer from "./components/Topic/TopicContainer";

const useStyles = makeStyles((theme) => ({
  appDataContainer: {
    maxWidth: 1000,
    padding: theme.spacing(2),
  },
  appBar: {
    backgroundColor: "#6bb3d6",
  },
}));

const theme = createMuiTheme();

function App() {
  const classes = useStyles();
  return (
    <main>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h5">Git Topics Search App</Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Container className={classes.appDataContainer}>
          <TopicContainer />
        </Container>
      </MuiThemeProvider>
    </main>
  );
}

export default App;
