![CF](http://i.imgur.com/7v5ASc8.png) LAB 13 Bearer Authorization
==============================================

## LAB 11
[![Build Status](https://travis-ci.org/vladimirsan/cf-travis-deployment.svg?branch=master)](https://travis-ci.org/vladimirsan/cf-travis-deployment)

### Author: Xochil Squaglia

### Links and Resources
* [repo](https://github.com/xochil73/13lab/blob/master/README.md)
* [travis]()
* [Heroku](https://dashboard.heroku.com/apps/lab11authentication)


### Modules
#### 
##### Exported Values and Methods

###### `greet() -> string`

#### `arithmetic.js`
##### Exported Values and Methods

###### `add(...numbers) -> number`
###### `subtract(...numbers) -> number`
###### `multiply(...numbers) -> number`
###### `divide(...numbers) -> number`


#### Tests
* To run tests, please use the `npm run test` command.

POST to /signup to create a new user
POST to /signin to login as a user (use basic auth)
Need tests for auth middleware and the routes
Does the middleware function (send it a basic header)
Do the routes assert the requirements (signup/signin)
Are the book routes protected properly?
Ensure that you use supergoose instead of mongo/express

#### UML
![UML](uml.png)