# Burger

## Directons
![License Badge](https://img.shields.io/static/v1?label=License&message=MIT_License&color=blue)

Create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM following the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

## Criteria

* Eat-Da-Burger! is an application that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.
 
 ## Install the dependencies
 
 First, the developer should create a repo on GitHub and clone it to a local computer. After that, make a package.json file by running `npm init` from the command line and then install the following dependencies:
  * Express npm package: `npm install express`.
  * Handlebars npm package: `npm install express-handlebars`.
  * MySQL npm package: `npm install mysql`.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

  ## Demo

 [Heroku link]()

 <img width="700" alt="note-taker1" src=" ">

<img width="700" alt="note-taker2" src=" ">


  ## Licence

MIT License

Copyright (c) 2020 Diogo Candido da Silva

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## GitHub
- Developer: Diogo Candido da Silva
- [GitHub Profile](https://github.com/diogocandidos)
