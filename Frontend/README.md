This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a Headless CMS blog website I created to put my React knowledge into practice.

The frontend is inspired by the design created by Design Course, Coder Coder, and Kevin Powell from freeCodeCamp. Huge thanks to those two channels for helping me with the frontend design.

The backend is powered by WordPress with the WordPress API that sends the whole article or the list of articles to the frontend.

It has four pages: Home, About,  Article list page that fetches the data from WordPress to display, and an Article page to display the whole content of the article.

The article list page fetches the data from the backend WordPress and displays all the available articles in the order shown in the WordPress backend.

The article page retrieves the article from WordPress and displays it.

Some parts of the articles have been added some special attributes so that they can be rendered properly. For example, there are a few code snippets in the article, which are unreadable if we just render them as normal paragraphs. By adding a few attributes and setting up some rules in React, those parts are highlighted properly and wrapped inside a text area that does not overflow the view.

For the mobile view, there is an animated hamburger bar and an overlay menu that changes color over time. The color-changing animation is set to be happening slowly so that it doesn't hurt people's eyes when they view it.

The profile page is where the user can write about his achievements.

Here is the demo video of the website running

https://drive.google.com/file/d/1k-9lPyM5DYCe49JVcv2RVslLtjtdRFhv/view?usp=sharing

UPDATE: 9/3/2021: Here is the live version of the website

https://iamstupidblog-production.vercel.app/

UPDATE: 12/3/2021: I have created a development version of this website. All the experimental features will be here

https://iamstupidblog-dev.vercel.app/


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
