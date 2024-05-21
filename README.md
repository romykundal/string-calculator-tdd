```markdown
# String Calculator

This is a simple String Calculator implemented in Node.js, designed to handle a variety of input formats and delimiters while ensuring robustness through extensive test cases. The calculator supports summing up numbers provided in a string format, handling different delimiters, and providing meaningful error messages for invalid inputs and negative numbers.

## Features

### 1. Return 0 for an Empty String
The calculator returns 0 when given an empty string as input.
```javascript
expect(StringCalculator.add("")).to.equal(0);
```

### 2. Return the Number Itself for a Single Number
The calculator returns the number itself when the input string contains only one number.
```javascript
expect(StringCalculator.add("1")).to.equal(1);
```

### 3. Return the Sum of Two Numbers
The calculator correctly sums two numbers separated by a comma.
```javascript
expect(StringCalculator.add("1,2")).to.equal(3);
```

### 4. Return the Sum of Multiple Numbers
The calculator can handle and sum multiple numbers separated by commas.
```javascript
expect(StringCalculator.add("1,2,3,4")).to.equal(10);
```

### 5. Handle New Lines Between Numbers
The calculator supports new lines between numbers in addition to commas.
```javascript
expect(StringCalculator.add("1\n2,3")).to.equal(6);
```

### 6. Throw an Error for Invalid Input such as "1,\n"
The calculator identifies and throws an error for invalid input sequences like "1,\n".
```javascript
expect(() => StringCalculator.add("1,\n")).to.throw("invalid input: 1,\n");
```

### 7. Handle Different Delimiters
The calculator supports custom delimiters defined at the start of the string. For example, "//;\n1;2" uses ";" as the delimiter.
```javascript
expect(StringCalculator.add("//;\n1;2")).to.equal(3);
```

### 8. Throw an Error for Negative Numbers
The calculator throws an error when negative numbers are included in the input.
```javascript
expect(() => StringCalculator.add("1,-2,3")).to.throw("negative numbers not allowed: -2");
```

### 9. Show All Negative Numbers in the Exception Message
If multiple negative numbers are present, the calculator includes all of them in the exception message.
```javascript
expect(() => StringCalculator.add("1,-2,3,-4")).to.throw("negative numbers not allowed: -2, -4");
```

### 10. Show More Negative Numbers in the Exception Message
This additional test ensures that even more negative numbers are correctly listed in the error message.
```javascript
expect(() => StringCalculator.add("1,-2,-3,-4,-5")).to.throw("negative numbers not allowed: -2, -3, -4, -5");
```

## Installation

To use the String Calculator, clone this repository and install the dependencies:

```bash
git clone https://github.com/yourusername/string-calculator.git
cd string-calculator
npm install
```

## Running Tests

To run the tests using Mocha and Chai, use the following command:

```bash
npm test
```

## License

This project is licensed under the MIT License.
```