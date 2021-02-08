# Google Books Search

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Images](#Images)

## Description
This is a MERN application that allows a user to search books by making an axios call to the Google Books API, and save them to a Saved Books page via a Mongo Database. Books can be viewed on the Google Books page and they can be deleted from the Saved Page.

## Installation
There are many packages to install which can be viewed in the package.json.  please view it and remove any you do not need, then run the following command in your terminal.
```bash
npm i
```

## Usage 
On the home (Search) page, the user is presented with a search bar and three buttons, one of which is disabled. The user can visit the other page by clicking its respectively labeled white button. The disabled button will be green and it will represent the page that the user is currently on. From here, the user can click the "Saved" button to visit the Saved Books page to view what they have saved, or just enter a book to search in the search bar. When the user searches, a Get request is made and the page will populate with books returned from the Google API. Each BookCard rendered will allow the user to click two buttons: View and Save. The view button will bring the user to the book's page on the Google Books website. The save button will make a Post request to the Mongo database and store the information there. When visiting the Saved page, a Get request is made to the database to retrieve the saved books so that they are rendered to the screen. The BookCards on the Saved page also provide two buttons, "View" and "Delete". View performs the same operation here, while "Delete" will remove the book from the database and re-perform a Get request to the database to re-render the updated books to the screen.

## License

This project's code is allowed to be "set free" using [The Unlicense](https://unlicense.org/).  This link provides all the details for the license.

## Link to Deployed Application
https://pacific-basin-63569.herokuapp.com/

## Images

