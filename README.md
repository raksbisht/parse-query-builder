
# Parse Query Builder

**Parse Query Builder** is a Node.js module that simplifies the process of building database queries for the Parse platform. It provides an intuitive and flexible way to construct queries with support for various conditions and operators while also supporting all existing methods of the Parse query.

## Installation

To use this package, you can install it via npm:

    npm install parse-query-builder

## Usage

To get started with the Parse Query Builder, follow these steps:

 1. Import the package into your project.

        const { DB } = require('parse-query-builder');

 2. Create a query for a specific Parse class.

        const query = DB.table('YourClassName');
 
Use the where method to add conditions to your query. You can specify conditions as arguments or use nested arrays for complex queries.


    query.where('fieldName', '=', 'value');
    query.where([
      ['field1', '=', 'value1'],
      ['field2', '>', 'value2'],
    ]);


## Supported Operators

The Parse Query Builder supports the following operators for building conditions:

	= (equalTo)
	!= (notEqualTo)
	> (greaterThan)
	< (lessThan)
	>= (greaterThanOrEqual)
	<= (lessThanOrEqual)


## Example

Here's an example of how to use the Parse Query Builder:

	const { DB } = require('parse-query-builder');
	const query = DB.table('YourClassName');
	query.where('fieldName', '=', 'value');
	const results = await query.find();
	console.log(results);


## License

This package is open-source and available under the MIT License.


## Issues and Contributions

If you encounter any issues or have suggestions for improvements, please feel free to open an issue on the GitHub repository: [Link to GitHub Repository](https://github.com/raksbisht/parse-query-builder)

Contributions and pull requests are welcome!
