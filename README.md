# Spacestagram
Spacestagram is a web application that takes data from NASA's Open API and displays it on a webpage.
This was created for Shopify's Summer 2022 Front End Developer Intern Challenge.

The application has been deployed on Github Pages. Check it out here: https://stephen-huang-hash.github.io/Spacestagram/

# Description

The web application displays Mars Rovers Photos (taken 1000 days after the landing date of the rover) from NASA's Open API: https://api.nasa.gov/

This web application has the following features:
- Has a loading screen while the data is being fetched from NASA's Open API
- Allows users to like and unlike projects
- Filter images by rover name, camera name, and dates using the search bar

Technologies/Frameworks used:
React, Bootstrap

The decision to use React to build the app was because it's a technology I've worked with in the past. I experimented with Shopify Polaris as a framework but after struggling to find good documentation and examples, I opted for another tool I had experience with - Bootstrap. 

Challenges I faced during the project:
- Initially, when you would like the nth image on the page and after filtering images through your search, the like would remain on the nth image. This didn't make sense to me because I thought all of the components were being re-rendered. It turns out this is due to React's behavior - it doesn't rerender components all the time, only when it needs to. I resolved this issue by differentiating the key of each ImageCard component based off of its id from NASA's API, not the id in the mapped array, which it was originally. Therefore, the key prop would always be unique for each ImageCard and always rerender every component whenever a search is made.
- Likes didn't save after a search was made due to the components being re-rendered. I created an array to store savedImageIds whenever an image is liked, and removed them from the array whenever it's unliked.

More features I would add in the future:
- Save likes after page refresh
- Make it so the search bar can take multiple key words at once for multiple categories ('Curiosity Front Hazard' would show all images with the Curiosity rover and Front Hazard Avoidance camera)
- Light/Dark theme

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# stephen-huang-hash
