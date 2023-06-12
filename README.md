![Users](https://github.com/marijapopeska/Finding-users-React-app/assets/108872423/35fc0923-db65-4316-b52d-da5047f754c5)

## Quick User Connections

Quick User Connections is a React application that allows you to search and connect with users quickly. With a clean and intuitive interface, you can easily search for users based on their names and establish connections in no time.

## Features

* Search Users: The app provides a search bar where you can enter the name of the user you are looking for. As you type, the app dynamically filters the user list to display matching results.

* User Cards: The search results are presented in a visually appealing card format. Each card includes the user's name, email address, and a unique avatar generated based on their email.

* API Integration: The app fetches user data from the JSONPlaceholder API. It retrieves a list of users and updates the user list in real-time based on the search query.

## About the Components

* The App component serves as the main entry point of the application. It imports and renders the Cards component.

* The Cards component is responsible for fetching user data from the API and rendering the user cards. It manages the state for the list of users and the search term entered by the user. 

* The Users component receives a user object as a prop and renders the user card. It displays the user's name, email, and an avatar generated using the user's email address.
