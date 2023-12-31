# SpaceXApp

A React application that allows users to explore SpaceX capsule information.

# Getting Started with Create React App

npx create-react-app spacex-app

## Prerequisites

- Node.js
- npm 
- php server
- VS-code


### Installing Dependencies

npm install

### Running the Application

npm start
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

- `/src`: Contains the source code of the React application.
- `/public`: Static assets and HTML template.
- `/redux`: Redux store and actions.
- `/middleware`: PHP Authorization.
- `/component`: Search Functionality of capsules.
- `/styles`: CSS and styling files.
- `/jest`: Jest Tests for SearchForm.


## Clone the repository:

1.git init
2.git add .
3.git commit -m "first commit"
4.git branch -M main
git remote add origin https://github.com/Mrunalisalunke/Mrunali-Manoj-Salunke-Frontend-Developer.git
5.git push -u origin main

## Usage

1. Visit [http://localhost:3000](http://localhost:3000) in your web browser.
2. Explore different sections such as Home, About, Contact.
3. **Log in:** Click on the "Login" link and provide your credentials.
4. Upon successful login, you will be redirected to the search form.
5. **Search Form:** Use the search form to filter capsule information.
6. Click on capsules to view details in a modal.

### UI Design

1.Design visually appealing components for each page.
2.Use of CSS frameworks like Bootstrap and Tailwind CSS for styling.
3.Responsive UI.

### Implement Search Functionality
1.search Form Component: Create a separate SearchForm component.
2.Design an input field for each search parameter (e.g., status, launch date, type).
3.Implement a submit button to trigger the search.
4.Search Logic:Use local state (React useState hook) to manage search parameters.Implement logic to filter capsules based on user input.
5.Integrate with Redux:Use Redux to manage the state of the search parameters across components.

### Utilize Hooks for Data Fetching
1.Capsules Component:Create a Capsules component responsible for fetching and displaying capsule data.Use the useEffect hook to initiate data fetching.
2.Redux Actions:Define Redux actions for fetching capsules and updating the Redux store.
3.Redux Thunk:Use Redux Thunk middleware to handle asynchronous actions (API calls).

### PHP Authorization

1.Create a PHP Backend:Set up a PHP server to handle authentication and authorization logic.
2.Create Login Component in React:Design a login form in your React application.
3.Handle Form Submission:On form submission, make an API request to your PHP authentication endpoint.Send user credentials (username and password) securely.
4.Handle Authentication Response:Once authenticated, store the authentication token (if using tokens) in a secure way (e.g., in local storage).
5.Redirect to Search Form:Use React Router to programmatically navigate to the search form upon successful login.

### Jest Test Cases for Search Form

1.Install Jest and Testing Libraries
2.Write test file searchform.test.js for search form component.
3.Write Test Cases
4.Run Tests-npm test


### ESLint for Linting

1.Install ESLint
2.Create an ESLint configuration file eslintrc.js.
3.Define ESLint rules in configuration file based on preferences.
4.Run ESLint






