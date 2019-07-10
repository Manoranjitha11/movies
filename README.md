# Project Title and Description

MOVIES - Present the user with a grid arrangement of movie posters and click on it to show the details.

## Technologies
- React
- Redux
- HTML, Bootstrap
- API Services

## Features

```
1. Displayed the Movies in Grid view
2. Detail View of the respective movie clicked
3. Add to Fav / Remove from Fav features is implemented
4. My Favourites dropdown feature is available
5. Increase the Vote count for a movie (ie likes feature)
6. Play icon in the Trailers embeds a youtube video
7. Redux store is used to store the movies list
8. Responsiveness is handled
9. Test cases are written
```


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## API

```
themoviedb.org API
```

## To run the test cases

1. Clone the repository using git clone command
2. Add dev dependecies (jest, babel-jest, react-test-renderer) for testing purpose.
3. Change the directory cd movies and then Run npm install
4. Change the API_KEY in config.js with your own key obtained from themoviedb account.
5. Run npm test

## To run the Application

1. Clone the repository using git clone command
     - If previously cloned than remove the node_modules, package_lock.json and the devDependencies alone from package.json
2. Change the directory cd movies and then Run npm install
3. Change the API_KEY in config.js with your own key obtained from themoviedb account.
4. Run npm start

## Note : devDependencies used in package.json for testing purposes
```
"devDependencies": {
  "babel-jest": "^24.8.0",
  "jest": "^24.8.0",
  "react-test-renderer": "^16.8.6"
}
```

## A static screenshot of the main screen of app with movie name and posters
![screenshot of the main screen](/screenshots/moviename.png)
![screenshot of the main screen](/screenshots/moviedetail.png)


## A static screenshot of the main screen of app with movie posters only
![screenshot of the main screen](/screenshots/movie.png)
![screenshot of the main screen](/screenshots/moviedetail.png)

