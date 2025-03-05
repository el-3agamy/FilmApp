# Simple Movie App with React, Vite & CSS

## 🚀 Project Overview

This is a simple movie app that allows users to search for movies and store their favorite ones. The app features two main sections:

1. **Movies Section**: Displays a list of movies retrieved from an external API. Users can search for movies dynamically by typing in the search input (using the `onKeyUp` event).
2. **Favorite Movies Section**: Displays a list of movies that users have marked as favorites. These favorites are stored in **localStorage** to persist even after the page is refreshed.

The project is built using **React**, **Vite**, and **CSS** for styling.

## 🎨 Tech Stack

- **React.js**: JavaScript library for building the user interface
- **Vite**: Fast and modern build tool for a better development experience
- **CSS**: Custom styling for a responsive and clean design
- **API**: Fetching movie data from a public API (e.g., [OMDb API](http://www.omdbapi.com/))
- **localStorage**: To store the user's favorite movies locally

## 🛠 Key Features

- **Movie Search**: Users can search for movies by typing into an input field, and the app will fetch and display matching movies from the API in real-time (with `onKeyUp` event).
- **Favorite Movies**: Users can add movies to their favorites, and the app stores them in **localStorage** so they persist after page reloads.
- **Responsive Design**: The app is fully responsive and works on both mobile and desktop devices.
- **Minimal UI**: Clean and straightforward user interface for a smooth experience.

## ⚙️ How it Works

1. **Movies Section**:
   - Users type the name of a movie into the search bar.
   - The app fetches and displays a list of 10 movies matching the search term from the API.
   - Each movie has an option to add it to the favorites list.

2. **Favorite Movies Section**:
   - The favorite movies are stored in **localStorage** and are displayed in this section.
   - Movies can be removed from favorites by clicking a "remove" button.

## DEmo : https://film-app-eta.vercel.app/
