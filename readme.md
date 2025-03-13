# Cooking Timer Web App

## Overview

The Cooking Timer Web App is designed to help users cook dishes perfectly by keeping track of cooking times. Users can choose from a list of pre-existing dishes, search for a specific dish, and start a timer to ensure they cook their meals just right. The app provides the ability to stop and reset the timer as needed. It’s a simple, yet essential tool for any cooking enthusiast.

---

## Features

- **Dish Selection**: Browse through a list of available dishes or use the search bar to find a specific recipe.
- **Timer Control**: Start, stop, and reset timers for each dish to keep your cooking process on track.
- **Firebase Integration**: Data about the dishes is stored in a Firebase database for easy management and scalability.
  
---

## Tech Stack

- **Frontend**:
  - HTML
  - CSS
  - JavaScript
- **Backend**:
  - Firebase (for storing dish data and recipes)

---

## Possible Improvements

- **Recipes for Featured Dishes**: Provide detailed recipes for featured dishes with step-by-step instructions.
- **User Accounts**: Allow users to create accounts, save their favorite dishes, and manage their timers.
- **Saving Favorite Dishes**: Users can save their favorite dishes to easily access them later.
- **Voice Assistance Integration**: Enable voice commands for starting, stopping, or resetting timers, making it easier to use while cooking.
  
---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KorneliaBlaszczuk/Cooking-Timer
   ```
2. **Set up Firebase**:
   - Create your own Firebase project by visiting [Firebase Console](https://console.firebase.google.com/).
   - After creating a project, navigate to the **Firestore Database** section and set it up to store dish data.
   - Generate your Firebase configuration credentials by going to your project settings.
   - Copy your Firebase config credentials and add them to your project. You can do this by adding your Firebase configuration in `src/firebaseConfig.js`.

   Example of how to set up Firebase configuration in `src/firebaseConfig.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     databaseURL: "YOUR_DATABASE_URL",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   ```
3. Install Dependencies
    - Make sure you have Node.js and npm installed on your machine.
    - Navigate to the project folder and install required dependencies by running:
    ```bash
    npm install
    ```
4. Run the Backend
    - In the /src folder, start the server by running the following command:
    ```bash
    node server.js
    ```
5. Open the App
    After the server is running, open the index.html file in your browser to start using the app.   

---

## Contributing
Contributors are welcome to improve this project! If you'd like to add features, fix bugs, or enhance the codebase, please follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature
    ```
3. Commit your changes:
    ```bash
    git commit -am 'Add a new feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature
    ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License.