# LDS Callings app
A web application to manage ward callings

view demo at ldscallings.org

Uses Node, Express, Mongo, Mongoose, React, React Router, Nodemailer, and bcrypt. Enjoy!


**NOTE!** Use the latest version of Node, 4.x.x.

## Install
`git clone https://github.com/pgwest/LDSCallings.git`

or download zip from github.com/pgwest/LDSCallings

## Overview

### React by default
The project runs with React by default and hot replacement of changes to the modules. Currently it is on 0.14.3.

### CSS Modules
CSS files loaded into components are locally scoped and you can point to class names with javascript. You can also compose classes together, also from other files. These are also hot loaded. Read more about them [here](http://glenmaddern.com/articles/css-modules).

To turn off CSS Modules remove it from the `webpack.config.js` file.

### Babel and Linting
Both Node server and frontend code runs with Babel. And all of it is linted. With atom you install the `linter` package, then `linter-eslint` and `linter-jscs`. You are covered. Also run `npm run eslint` or `npm run jscs` to verify all files. I would recommend installing `language-babel` package too for syntax highlighting

### Beautify
With a beautify package installed in your editor it will also do that
