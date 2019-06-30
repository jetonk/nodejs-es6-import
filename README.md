# NodeJS/ExpressJS ES6 import class

## Do you get <span style="color:red">SyntaxError: Unexpected token import</span> When you try to use `import` keyword? : You are in the right place.

## This is a minimal setup Node with Express importing ES6 class in a ES6 way using `import` keyword

- index.js - Main file where we have imported express and defined the routes
- services/MainService.js - ES6 Class with one method get() which handles the route `/`
- app.js - Here happens the magic in-order to enable importing the ES6 Classes using `import` keyword

## Use cases in this boilerplate/project
Instead of doing

`var express = require("express");`

We have used `import` keyword

`import express from 'express';`

Importing the MainService Class
`import MainService from './services/MainService';` from the `index.js`

