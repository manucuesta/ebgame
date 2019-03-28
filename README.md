# Guess the number

## Description of the project
A game where you can play against the computer trying to find what number it generated randomly between 1 and 100 or the computer against you trying to find out what number are you thinking about between 1 and 100.

When you play against the CPU it would tell you if your guess is below its number or above. If it is correct will show you the message then redirect you to the home to start a new game after 2 seconds.

If the CPU is playing against you, would generate a random number then you have a set of buttons to tell the computer if it is below your number, above your number or if it is correct. If the number is correct, just click the button and it will redirect you to the home to play a new game.

The application is SPA and following the Smart/Dumb pattern. All the logic is in the parent component so the child components are pure (they give always the same response for the same parameters) and reusable. The child components get all the information and callbacks via props.

There is unit testing for all the main functions of the application.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To install the project:

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

