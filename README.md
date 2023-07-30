# Foodfly

## Project Overview

Foodfly is a web application built with React that allows users to discover and create new recipes. The application has two views: Guest view and User view. In the Guest view, users can discover new recipes, while in the User view, users can discover, create, and comment on recipes.




## Project Architecture

The project follows a client-side architecture using React and React DOM. The code structure includes the following:

- Components: Contains the React components used in the application.
- Services: Contains services for various functionalities, such as user authentication (userService), recipe operations (recipeService), comment operations (commentService), and a reusable requester builder for CRUD operations.
- Hooks: Contains custom hooks used in the application, such as useForm, useLocalStorage, and useServer.
- Context: Contains the React context used for managing authentication (authContext) and recipe data (recipeContext).
- Reducer: Contains the recipeReducer, which is used for managing state related to recipes.
- Main App.js: The main entry point of the application.

## Dependencies

The application uses the following dependencies:

- React: A JavaScript library for building user interfaces.
- React DOM: A package for working with the DOM in React applications.
- react-navigation: A library for handling navigation in React applications.
- Other dependencies as required by the project.

## Usage

To run the Foodfly project locally, follow these steps:

1. Open a terminal and navigate to the `server` folder within the project: `cd server`.
2. Start the server by running the `server.js` file using Node.js: `node server.js`.
3. Open another terminal and navigate to the `foodfly` folder within the project: `cd foodfly`.
4. Install the project dependencies using npm or yarn: `npm install` or `yarn install`.
5. Start the development server: `npm start` or `yarn start`.
6. Access the application in your web browser at `http://localhost:3000` and server at `http://localhost:3030`.
## Contribution Guidelines

If you would like to contribute to the Foodfly project, please follow these guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Make your changes and thoroughly test them.
- Submit a pull request with a clear description of your changes and any relevant information.

## License

The Foodfly project is open-source and available under the [MIT License](LICENSE).

