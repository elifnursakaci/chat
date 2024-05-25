# urunler


# Chat Application

- This application is a chat application that utilizes Firebase Firestore as its backend database. It is developed with React Native and allows users to engage in real-time messaging.

## Features:

- User Login and Authentication: Users can authenticate and log in to the application using Firebase Authentication. This ensures secure access to the chat features.

- Real-Time Messaging: Users can engage in real-time messaging in specific rooms or with individual users. Each message is stored in the Firebase Firestore database and updated in real-time.

- Sending and Receiving Messages: Users can compose, send, and receive text messages. Each message includes the sender's name, profile picture, and message text.

## Technologies Used:

- React Native: Utilized for building the user interface and developing the application.
- Firebase Firestore: Used for storing real-time messaging data and facilitating synchronization.
- Firebase Authentication: Implemented for user authentication and login functionality.
- This chat application provides an easy and effective way for users to communicate in real-time. It facilitates communication between both individuals and groups, offering a fast and reliable experience through Firebase's real-time database solution.


<img src="chat.gif" />


## Get Started

install dev dependencies

### `npm install`

## Init Firebase Configuration

- Create a new project on firebase console
- Create a firebase web app and copy the configs to firebaseConfig.js file in root directory

## Then

Run The app

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `npm run ios`

Like `npm start` / `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start` / `yarn start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).
