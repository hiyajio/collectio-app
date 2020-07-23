# Collectio Comics e-Commerce Web & Mobile Apps

e-Commerce web + mobile app project for makeshift client Collectio Comics for ND CSE SU '20 Modern Web and App Development I.

## Tech Stack

* __Frontend__ - React through [Create React App](https://github.com/facebook/create-react-app) with [Hooks](https://reactjs.org/docs/hooks-intro.html) and [React-Router](https://reactrouter.com/web/guides/quick-start) for routing.  
* __State Management__ - [Redux](https://redux.js.org/introduction/getting-started) with [Redux-Saga](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html) (previously [Redux-Thunk](https://github.com/reduxjs/redux-thunk))  
* __Database__ - NoSQL using [Firebase](https://firebase.google.com/)  
* __Styling__ - Hybrid between [Sass/SCSS](https://sass-lang.com/documentation) and CSS in JS using [styled-components](https://styled-components.com/docs)  
* __API/s__ - Payment through [Stripe](https://stripe.com/docs/api)  
* __Deployment__ - CI/CD and hosting through [Netlify](https://www.netlify.com/)  
* __Mobile__ - Hybrid (iOS + Android) mobile app wrapper through [Capacitor](https://capacitorjs.com/docs/getting-started)  

## Web Set Up

1. Either download the codebase or clone the repo for your own personal copy.
2. Within your own personal copy, at the root directory, do the `yarn` or `yarn install` commands to download the necessary dependencies.
3. Then, do `yarn start` to start the development environment. This will be viewable through the browser in [http://localhost:3000](http://localhost:3000).
4. You can do a `yarn build` to create a production-ready version of the app ready for deployment. This will create the `build/` folder.

## Mobile Set Up

> __Note__: You must go through the Web setup first before going through mobile as the mobile apps are wrappers for the React web app using Capacitor

1. You must do a `yarn build` in the root directory for the production-ready version of the web app. This will be needed by the mobile setup.
2. The `capacitor.config.json` file is looking specifically at the `build/` folder for the web app. With this done and the `yarn` or `yarn install` commands done from the web setup, you now have access to the Capacitor CLI tools. Simply do a `yarn cap sync` or `yarn cap copy` in the root directory of the codebase.
3. The previous commands should have updated both the `ios/` and `android/` folders. From here, you can choose to either open the ios or android app through either `yarn cap open ios` (MacOS + XCode are required as this command will the app project codebase in XCode) or `yarn cap open android` (any OS should work and only Android Studio is required as this opens the app project codebase in Android Studio), respectively.
4. If the iOS app is created, choose the respective iOS device simulator (iPhone SE 2nd Generation should be the least GPU intensive) in XCode and click the run button. You must have a proper certificate for it to run. If you want to run it on an actual physical iOS device, you must have a proper certificate.
5. If the Android app is created, you must create an Android simulator configuration within Android Studio, then choose that (Nexus 6 API 28 should be the least GPU intensive). Click the build button and once that is successful, click the run button.
