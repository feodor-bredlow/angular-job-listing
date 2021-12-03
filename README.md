# Angular Job Listing

This is a simple frontend app written in Angular (and Node for the backend for frontend) which can be used to search jobs in Switzerland. The app uses the public api provided by jobs.ch.

## Features

- Search jobs through input fields job and place
- Get overview list of max 20 results based on the search parameters
- Get detailed information per listed job when clicking on it

## How to run locally in develop mode

clone repo
cd into repo
run "npm install"
simultaneously run "ng serve" and "npm run start:server"
call "localhost:4200"

## Technical setup

The repo contains

- the angular project
  -> three components "header", "job-list" and "job-detail"
  -> jobs service file for the calls to the backend for frontend
- server.js and backend folder on root level for the backend to frontend node server\
  -> two endpoints "/api/getJobs" and "/api/getJobDetails"

## Potential new features

- Optimize the display for different screen sizes (current version is optimized for min. 900px screen width)
- Allow for display of more than 20 jobs per request
- Provide autocomplete features in the input fields
- Validate the input and sanitize/escape non-standard input characters (e.g. ü, ö, ä, St. Gallen, etc.)
- Improve the navigation with the keyboard keys
- Add functionality/view if no results can be found
- Add potential additional search parameters
- Add functionality based on improved error handling (see next paragraph)

## Potential technical improvements

- Add relevant unit and integration tests
- Improve error handling in frontend and backend for frontend of the different requests
- Add typescript to the backend for frontend

# JobsFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
