# metal-perf

This repo is used to help measure performance of Metal.js, as well as compare it with other libraries like YUI and React.

## Set Up
1. Install NodeJS >= [v0.12.0](http://nodejs.org/dist/v0.12.0/), if you don't have it yet.
2. Install global dependencies:
  ```
  [sudo] npm install -g gulp
  ```
3. Install local dependencies:
  ```
  npm install && bower install
  ```
4. Build the code:
  ```
  gulp build
  ```

## Usage

To run the existing experiments or add more you just need to:

1. Run the setup explained on the [Set Up](#set-up) section.
2. Open one of the html files inside the [tests](https://github.com/metal/metal-perf/tree/master/tests) folder.
