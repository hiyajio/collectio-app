# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [[0.6.0]] - 2020-07-28
### Added
- Testing: Enzyme Snapshot Tests
- Testing: Jest Unit + Integration Component Tests
- Testing: Redux + Redux-Saga Functionality Tests

## [[0.5.0]] - 2020-07-24
### Added
- React Lazy+Suspense for page and shop-item preview lazy-loading
- Error Boundary for page routes 404s
- Add item to cart functionality Memoization
- Optimization: Delete unused assets and minify image assets
- Optimization: PWA initialization (service worker, manifest.json, https through Netlify)

## [[0.4.0]] - 2020-07-23
### Added
- Redesign and finish mobile responsive styling through styled-components
- Redesign of icons, code comments cleanup, React Hooks adoption
- Finish iOS and android build through Capacitor, update readme

## [[0.3.0]] - 2020-07-20
### Added
- Integrate redux-saga to all async and firebase functions
- Compile all firebase functions in frontend to sagas or utils
- Add clear cart at sign out method for security
- Add auto sign in after sign up method for redirection and user ease

## [[0.2.0]] - 2020-07-08
### Added
- Implement Redux and cart functionality
- Cart session persistence (memoization), finish individual collection routing, Stripe integration and refactoring
- styled-components, fix db schema, push and implement shop-data from Firebase, spinner HOC, more routing
- Initialize CHANGELOG, use redux-thunk to group shop fetching functions, refactor for Container pattern
- Add component tree diagram, uml diagram and fix db user collection pointers

## [0.1.0] - 2020-06-26
### Added
- HOC routing, update menu items, shop images, comments
- Create and style shop preview page, ingest shop JSON data
- Finish custom functions, class component use, and template functions
- Firebase authentication and user storage through google oauth, email and password sign up/sign in

[0.2.0]: https://github.com/saejhi/collectio-site/releases/tag/v0.2.0
[0.3.0]: https://github.com/saejhi/collectio-site/compare/v0.2.0...v0.3.0
[0.4.0]: https://github.com/saejhi/collectio-site/compare/v0.3.0...v0.4.0
[0.5.0]: https://github.com/saejhi/collectio-site/compare/v0.4.0...v0.5.0
[0.6.0]: https://github.com/saejhi/collectio-site/compare/v0.5.0...v0.6.0
