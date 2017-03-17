# Hyperledger Fabric Network Launcher

This project uses Angular 2 and was generated with [Angular CLI](https://cli.angular.io/). It also uses a simple Express.js server to collect POST parameters and execute a shell script.

* Visit `http://nodejs.org` and install the latest version of Node.js.
* Run `npm install -g @angular/cli` to install the Angular CLI.
* Run `npm install -g typescript` to install Typescript.

## Development Environment

* Run `npm install` to install dependencies.
* Run `npm start` to start the Angular 2 app and the Express API.
* Navigate to `http://localhost:4200/` to see the form.

## The API

When the form is submitted, a POST request is sent to the Express API, which runs at `http://localhost:4300/` . The API simply passes the POST parameters to the NetworkLauncher.sh script.

Watch the terminal after submitting the form. The shell script will echo the received parameters.
