# portfolio-website
Simple and modern portfolio website made by Jim Kelly with React Native utilising Firebase Hosting & Functions.

## Table of Contents
* 	[General Info](#general-info)
*  [Technology Used](#technology-used)
* 	[Setup](#setup)

## General Info
This project contains the current form of my portfolio website, containing a home, about, and contact page as hosted on Firebase [here](https://portfolio-website-76885.web.app). The project makes use of Firebase Functions to deploy a basic API that sends data filled out on the 'Contact Me' page to my personal email address. This data is also stored in Firebase's 'firestore' for posterity in the event that maybe an email does not go through, or if on the user end the email is accidentally deleted.

The API keys can sensitive data have been hidden using dotenv alongside Firebase's config capacities. In its current state, while there is still room for further development on the website, i.e. a custom domain, further design improvements and the addition of animations to actions; the website is representative of my current portfolio.

## Technology Used
This project has been created with:

* bootstrap: ^4.6.0
* cors: ^2.8.5
* React: ^16.14.0
* Node: 14.15.5
* npm: 6.14.11
* firebase: ^8.2.8
* axios: ^0.21.1
* firebase-admin: ^9.5.0
* firebase-functions: ^3.11.0,
* nodemailer: ^6.4.18

## Setup
To run this project on a local machine to edit code, after cloning the repository, install the project using npm:

```
$ cd ../portfolio-website
$ npm install
$ cd ../portfolio-website/functions
$ npm install
$ cd ..
$ npm start
```

You should then be able to see the project running in your local environment. Feel free to contact me if you would any assistance in developing upon your own portfolio websites or there are any issues. This can be done by sending me an email via my contact page [here](https://portfolio-website-76885.web.app/contact)!

