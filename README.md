## Parse Query Builder

**Parse Query Builder** is a Node.js module that simplifies the process of building database queries for the Parse platform. It provides an intuitive and flexible way to construct queries with support for various conditions and operators while also supporting all existing methods of the Parse query.

## Installation

To use this package, you can install it via npm:

```plaintext
npm install parse-query-builder
```

## Usage

To get started with the Parse Query Builder, follow these steps:

Import the package into your project.

Create a query for a specific Parse class.

Use the where method to add conditions to your query. You can specify conditions as arguments or use nested arrays for complex queries.

```plaintext
query.where('fieldName', '=', 'value');
query.where([
['field1', '=', 'value1'],
['field2', '>', 'value2'],
]);
```

## Supported Operators

The Parse Query Builder supports the following operators for building conditions:

```plaintext
= (equalTo)
!= (notEqualTo)
> (greaterThan)
< (lessThan)
>= (greaterThanOrEqual)
<= (lessThanOrEqual)
```

## Example

Here's an example of how to use the Parse Query Builder:

```plaintext
const { DB } = require('parse-query-builder');
const query = DB.table(Parse.Object.extend("YourClassName"));
query.where('fieldName', '=', 'value');
const results = await query.find();
console.log(results);
```

## Other Supported Methods

> ## Query Execution

### First

Executes the query and retrieves the first matching result.

```plaintext
query.first();
```

### Find

Executes the query and retrieves all matching results.

```plaintext
query.find();
```

### Distinct

Queries can find unique values for a specified field.

```plaintext
query.distinct("fieldName")
```


> ## Comparison Operators

### equalTo

Adds a condition to the query where the specified field is equal to the given value.

```plaintext
query.where("playerName", "Dan Stemkoski");
 // query.where("playerName","=", "Dan Stemkoski");
 // query.equalTo("playerName","Dan Stemkoski");
```

### notEqualTo

Adds a condition to the query where the specified field is not equal to the given value.

```plaintext
query.where("playerName","!=" ,"Dan Stemkoski");
 // query.notEqualTo("playerName","Dan Stemkoski");
```

### greaterThan

Adds a condition to the query where the specified field is greater than the given value.

```plaintext
query.where("wins",">",50);
// query.greaterThan("wins",50);
```

### lessThan

Adds a condition to the query where the specified field is less than the given value.

```plaintext
query.where("wins",50);
// query.lessThan("wins","<",50);
```

### greaterThanOrEqualTo

Adds a condition to the query where the specified field is greater than or equal to the given value.

```plaintext
query.where("wins",">=",50);
// query.greaterThanOrEqualTo("wins",50);
```

### lessThanOrEqualTo

Adds a condition to the query where the specified field is less than or equal to the given value.

```plaintext
query.where("wins","<=",50);
//query.lessThanOrEqualTo("wins",50);
```

### limit

Limiting and Skipping Results

```plaintext
query.limit(10); // limit to at most 10 results
```

### skip

Skips the specified number of results.

```plaintext
query.skip(10); // skip the first 10 results
```


> ## Additional Query Options

### withCount

Includes the count of the total number of results in the query result.

```plaintext
query.withCount(); // to include count
```


> ## Sorting Results

### ascending

Sorts the results in ascending order based on the specified field.

```plaintext
query.ascending(); // Sorts the results in ascending order by the score field
```

### descending

Sorts the results in descending order based on the specified field.

```plaintext
query.descending(); // Sorts the results in descending order by the score field
```


> ## Array and Value Checks

### containsAll

Adds a condition to the query where the array in the specified field contains all of the specified elements.

```plaintext
// Find objects where the array in arrayKey contains all of the elements 2, 3, and 4.
query.containsAll("arrayKey", [2, 3, 4]);
```

### containedIn

Adds a condition to the query where the specified field contains any of the specified values.

```plaintext
// Finds scores from any of Jonathan, Dario, or Shawn
query.containedIn("playerName",["Jonathan Walsh", "Dario Wunsch", "Shawn Simon"]);
```

### notContainedIn

Adds a condition to the query where the specified field does not contain any of the specified values.

```plaintext
// Finds scores from any of Jonathan, Dario, or Shawn
// Finds scores from anyone who is neither Jonathan, Dario, nor Shawn
query.notContainedIn("playerName",["Jonathan Walsh", "Dario Wunsch", "Shawn Simon"]);
```

> ## Existence Checks

### exists

Adds a condition to the query to find objects where the specified field is set.

```plaintext
// Finds objects that have the score set
query.exists("score");
```

### doesNotExist

Adds a condition to the query to find objects where the specified field is not set.

```plaintext
// Finds objects that don't have the score set
query.doesNotExist("score");
```

> ## String Matching

### startsWith

Adds a condition to the query to find objects where the specified field starts with the given value.

```plaintext
query.startsWith("name", "Big Daddy's");
```

## License

This package is open-source and available under the MIT License.

## Issues and Contributions

If you encounter any issues or have suggestions for improvements, please feel free to open an issue on the GitHub repository: [Link to GitHub Repository](https://github.com/raksbisht/parse-query-builder)

Contributions and pull requests are welcome!
