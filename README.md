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

> __Note__: You must go through the Web setup first before going through mobile as the mobile apps are wrappers for the React web app using Capacitor.

1. You must do a `yarn build` in the root directory for the production-ready version of the web app. This will be needed by the mobile setup.
2. The `capacitor.config.json` file is looking specifically at the `build/` folder for the web app. With this done and the `yarn` or `yarn install` commands done from the web setup, you now have access to the Capacitor CLI tools. Simply do a `yarn cap sync` or `yarn cap copy` in the root directory of the codebase.
3. The previous commands should have updated both the `ios/` and `android/` folders. From here, you can choose to either open the ios or android app through either `yarn cap open ios` (MacOS + XCode are required as this command will the app project codebase in XCode) or `yarn cap open android` (any OS should work and only Android Studio is required as this opens the app project codebase in Android Studio), respectively.
4. If the iOS app is created, choose the respective iOS device simulator (iPhone SE 2nd Generation should be the least GPU intensive) in XCode and click the run button. You must have a proper certificate for it to run. If you want to run it on an actual physical iOS device, you must have a proper certificate.
5. If the Android app is created, you must create an Android simulator configuration within Android Studio, then choose that (Nexus 6 API 28 should be the least GPU intensive). Click the build button and once that is successful, click the run button.

## Feature 6

### Branch
* __`buenviaje-react-performance`__ (already pulled into master but branch still exists - not deleted after merge)

### Feature: React Performance
* React Lazy + Suspense for page and shop-item preview lazy-loading and Error Boundary for page routes 404s

### How To Install & Run
Within the feature branch root directory, simply follow the [Web Set Up](#web-set-up) above. Doing it from master would be fine as this will be the latest merge, but you can also download the code from the branch and then proceed with Steps 2-4.
* Main things to take away from Steps 2-4 is that be sure to be in the root directory, and then do `yarn` or `yarn install` (for install) before doing a `yarn start` (for run) to view the development environment through the browser at [http://localhost:3000](http://localhost:3000).
> Note: You can largely ignore the mobile folders and assets as those would not impede a regular web development environment.

### Expected Functionality
1. React Lazy + Suspense  
   * When visiting routes (especially image intensive ones such as `Shop` or the individual category pages `Premium Items` and `Regular Items`), you should be able to see a `Spinner` component on the page as it loads the images of the comic books in the background before seeing the entire page fully-loaded. If not, simply refresh the [http://localhost:3000](http://localhost:3000) page from the browser.  
    *  This is also done for each individual preview of a shop item on the web app. Spamming the refresh button on the browser while on either the preview page (`Shop` on header) or the individual category pages (`Premium Items` and `Regular Items`), you should be able to see 4 `Spinner` components after the first `Spinner` component. The reason the spamming may be required is that the web app and the images retrived from Firebase are not as intensive yet so the shop items load quickly so that we do not even see the 4 `Spinner` components acting as fallbacks.
2. Error Boundary  
   * Since the pages are now being lazy-loaded (essentially an `async-await` function), there will always be a possibility of an error before the page and/or the images are loaded. Therefore, this Error Boundary feature is essentially the `try-catch` block for that displaying a better UI component if this is the case.
   * Since again, the web app is fairly small and not as prone to errors during this particular data retrieval from Firebase, I've included comments in some files that if uncommented would essentially create that error for us to show this functionality. Simply go to any of the following files: `homepage.page.jsx (src/pages/homepage/homepage.page.jsx)`, `collection.page.jsx (src/pages/collection/collection.page.jsx)`, or `collections-overview.component.jsx (src/components/collections-overview/collections-overview.component.jsx)` and uncomment the following within the top of the Component instantiation: `throw Error;`. Refresh the page and go to the route that would render the Component you just gave an error to through uncommenting the `throw Error`, and it should display an image and text telling the user that something went wrong during page or shop items retrieval.

### Files Associated
* Updated to integrate lazy-loading, suspense and error boundary
  * `src/App.js`
  * `src/pages/homepage/homepage.page.jsx`
  * `src/pages/shop/shop.page.jsx`
  * `src/pages/collection/collection.page.jsx`
  * `src/components/collection-preview/collection-preview.component.jsx`
  * `src/components/collections-overview/collections-overview.component.jsx`
* Convert spinner to non-HOC version for loading fallback component
  * `src/components/with-spinner/with-spinner.component.jsx`
  * `src/components/spinner/spinner.component.jsx`
* Create error-boundary component for error fallback component
  * `src/components/error-boundary/error-boundary.styles.jsx`
  * `src/components/error-boundary/error-boundary.component.jsx`
