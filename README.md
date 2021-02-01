# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth.

To interact with the Github GraphQL API you'll need to have

- a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.

## Evaluation:

- We will pay particular attention to the way the code is organized, and to the overall readability
- Unit tests will be greatly appreciated
- Design will be ignored, however usability and accessibility will be taken into consideration
- Remember to update this README with instructions on how to install, run and test your application
- Your first goal is to have a working app, but feel free to improve the application however you see fit
- We hope that you can complete the assignment within 2 hours but don't set any time constraints
- Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

- Leave any technical notes on any libraries or tools you chose to use, the more detail the better.

### How to run app & test

- Leave instruction on how to run and test your app here

1. Open up the source code, run "yarn install"
2. Once installed, run "yarn start" to start the script running, the application would open up
   in the browser @ localhost:3000
3. In order to run the tests, run "yarn test", this will find the tests.js files and run the tests accordingly

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics

- Code Structuring:

  I have pretty much organized the code in a better way along with best naming conventions.
  If I had used redux extensively, I would have oragnized redux in the separate store folder

- Refactoring:

* Would create and use more reusable components, when more feautres are to be added, enusuring reusability
* I have used material ui design system, but I would use plain css to write more extensive styles
  Other than that, I feel the code is good

- Additional Features:

  - Would implement a profile for the users
  - Would implement a store/bookmarks, where the users can select and mark the topics to their favorite ones
  - Would link up the popular repositiries, which are related to the topics that appear
