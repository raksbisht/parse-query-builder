const Parse = require('parse/node');

const operators = {
  "=": "equalTo",
  "!=": "notEqualTo",
  ">": "greaterThan",
  "<": "lessThan",
  ">=": "greaterThanOrEqual",
  "<=": "lessThanOrEqual",
  "in": "containedIn",
  "notIn": "notContainedIn",
};

class DB extends Parse.Query {
  constructor(className) {
    super(className);
  }

  static table(className) {
    return new DB(className);
  }

  where(...args) {
    if (args.length === 1 && Array.isArray(args[0])) {
      this.whereNested(args[0]);
      return this;
    }

    if (args.length === 2) {
      this.equalTo(args[0], args[1]);
      return this;
    }

    if (args.length === 3) {
      const functionToCall = operators[args[1]];
      if (functionToCall) {
        this[functionToCall](args[0], args[2]);
        return this;
      } else {
        throw new Error('Invalid operator in "where"');
      }
    }

    throw new Error('Invalid number of arguments for "where"');
  }

  whereNested(conditions) {
    if (Array.isArray(conditions) && !Array.isArray(conditions[0])) {
      this.where(...conditions);
    } else {
      conditions.forEach((condition) => {
        this.whereNested(condition);
      });
    }
  }
}

module.exports = { DB };
