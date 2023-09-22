# Web2 2021, Assignment 1

## Overview

In essence, you are tasked with building a web application that utilizes data from a JSON file. The main goal is to create a simple video website that uses a backend to generate content and sends it over to the frontend via HTTP. In other words, **no JavaScript code is executed on the frontend**, only on the backend.

There is no need to implement any specific frontend functionality for the video player; you can simply use `<video>`.

## Data Source

The data should be read from a `videos.json` file provided, and no information should be "hardcoded" in HTML/EJS. You need to write Node.js code to read the data; do not use fetch/Ajax to fetch it on the frontend.

## Video List

When the website is opened, it should list all categories in the order defined in `videos.json`, along with all the videos in those categories:

- Poster image for the video
- Duration displayed on the poster in minutes and seconds, e.g., `30:20` for 30 minutes and 20 seconds (see the example). The background color in the example is `rgba(0, 0, 0, 0.5)`.
- The age of the video according to the following rules, taking into account singular and plural (no need to account for singular in 21, 31, etc.):
  - If the age is more than one year (365 days), display "X years ago."
  - Otherwise, if the age is more than one month (30 days), display "X months ago."
  - Otherwise, if the age is more than one week (7 days), display "X weeks ago."
  - Otherwise, if the age is more than one day (24 hours), display "X days ago."
  - Otherwise, if the age is in hours, display "X hours ago."

## Video Page

When a video is selected, you should navigate to another page with the video identifier in the URL, e.g., `/1`. Then, check if a video with the identifier `1` exists and display it; otherwise, return a `404` error message.

## Implementation

- Reading lectures asynchronously from the disk should be done with callbacks, promises, or `async await`. You should use the `fs` module in Node.js.
- Use the [EJS template](https://github.com/mde/ejs) to create HTML. Create `header.ejs` and `footer.ejs` templates that other templates can use. The `views/` folder should contain template files.
- Set up error handling for general errors and for when a non-existent route is requested (404). Provide clear messages to the user about what happened.
- `app.js` should set up an Express web server, and video functionality should be implemented in `src/videos.js`.
- Use `app.locals` to make functions accessible in the EJS templates for formatting age and duration. These should be located under `./src`.
- `public/` should contain data accessible with the static middleware in Express. CSS should be stored in this directory. `public/videos/` should contain images and videos referred to in `videos.json`.

## Dependencies

All dependencies should be listed in `package.json` as `devDependency` or `dependency`, as appropriate.

- `npm start` should start the web server on `localhost` port `3000`.
- It may be a good idea to set up a `dev` script that runs `nodemon` along with Sass functionality if it is used.

## Design

- Design templates are in `fyrirmynd/`. There is no need to follow the design exactly; it is just a reference, but it should be practical. This is a chance to get started with HTML and CSS, or to improve your skills.
- Sass can be used to set up the design.
- Set up stylelint to "lint" CSS or Sass.

## Tools and Dependencies

Set up the following:

- `stylelint`
- `eslint` for linting JavaScript code

When evaluating the project:

- Run `npm install` first to fetch all dependencies.
- Run `npm start` to start the Express web server on port `3000`.
- Run `npm test`, which should run eslint and stylelint and display no errors.

The project should include `package.json` and `package-lock.json`, which contain all the tools used.

When the project is downloaded, run `npm install` before running any other commands.

Set up Sass and stylelint using `stylelint-config-sass-guidelines` and `stylelint-config-standard` for the project.


---

> Version 0.1
