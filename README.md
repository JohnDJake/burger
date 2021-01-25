# Eat Some Burgers!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Eat Some Burgers! is a full-stack web app. It was an exercise in writing a custom ORM and in deploying a full-stack application to Heroku with access to a hosted database.

The application has a list of burgers that either have or haven't been devoured. Users can add more burgers to the list, eat the burgers that have been made, and re-make burgers that have been eaten.

Eat Some Burgers! is [deployed here](https://johndjake-burgers.herokuapp.com/).



## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)


## Installation

After you have cloned the repository, open `config/connection.js` and configure your MySQL database connection.

Open `db/schema.sql`. Update the database name to `CREATE` and `USE`, remove the `CREATE DATABASE` line and set it to `USE` an existing database you have, or leave it as is, then run the schema file on your MySQL server. If you'd like to seed your burgers database, update the database name to `USE` to match and run `db/seeds.sql`.

You will also need to install the required Node packages. Run `npm install` in the root application directory.



## Usage

Either use my deployed link or follow the installation instructions above. Use the form at the bottom of the page to add a new burger to the database. Click "Eat the burger!" to eat a burger that is ready to eat, and click "Make it again!" to re-make a burger that has been eaten.



## Contributing

This application was made as an exercise and I am not planning on any further development. That being said, I am always open to finding new and better ways to do things, so if you have any suggestions feel free to fork/pull.



## Tests

Eat Some Burgers! has no test code, you can test it by using it.



## License

[MIT License](https://opensource.org/licenses/MIT)

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.


## Questions

If you have questions take a look at my GitHub

[JohnDJake](https://github.com/JohnDJake)

Or send me an email

[john.d.jake@gmail.com](mailto:john.d.jake@gmail.com)

