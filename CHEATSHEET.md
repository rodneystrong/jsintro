# Javascript Cheatsheet

## Variables and Operators

### Setting Variables

A variable is declared in the current scope using the keyword `var`.
**Always use the `var` keyword when declaring a variable for the first time.**

    var x;
    var y = 5;

If the variable is not assigned a value when it is created, it's value
will be `undefined`.

### Arithmetic Operators

These operators allow basic arithmetic operations on any numeric value.

    var x = 5;
    var y = x + 10; // addition
    console.log(y - 7); // subtraction
    console.log(x * y); // multiplication
    console.log(x / y); // division

### Comparison Operators

Operators to compare two values. These operators evaluate to true/false.

    console.log(y > x); // greater than
    console.log(y >= x); // greater than or equal to
    console.log(y < x); // less than
    console.log(y <= x); // less than or equal to
    console.log(y == x); // equality
    console.log(y === y); // strict equality
    console.log(y != y); // not equal
    console.log(y !== y); // not strictly equal

### Logical Operators

Logical operators can be used to create AND/OR expressions.

    if (z || y) { /*...*/ } // Logical "OR" (any can be true)
    if (y && x) { /*...*/ } // Logical "AND" (all must be true)
    var y = x || 5; // set a default value

  * Return value of `||` (OR) expression will be the first matching value
  * `&&` (AND) expression will return final matched value if true
  * `&&` will return first value if false (e.g. `0 && false == 0`)

## Loops

### `for` loops

`for` loops have the following format:

    for(expr1; expr2; expr3) {
      // ...
    }

  * **expr1** is evaluated first (e.g. `var i=0`)
  * **expr2** is evaluated *before each loop*
    * if `true`, loop block is executed
    * if non-true, loop is finished, flow continues after loop
  * **expr3** is evaluated at the end of each loop
    * usually used to increment a value (e.g. `i++`)

A common type of `for` loop counts from zero to a target number:

    var x = 10;
    
    for(var i=0; i<x; i++) {
      // ...
    }

### While loops

A while loop looks like this:

    while(expr) {
      // ...
    }

  * **expr** is evaluated *before each loop*
    * if `true`, the loop block is executed
    * if non-true, the loop block is skipped and flow resumes below
  * **Be careful not to create infinite loops!**

An example while loop:

    var x = 100;
    
    while(x) {
      if (x == 30) { continue; }
      if (x == 50) { break; }
      x--;
    }

Inside a loop, `continue` will immediately re-start the loop.
`break` will break out of the loop.

## Functions

#### Declaring a named function

A function declaration often includes a function name.

    function myFunction() {
      // ...
    }

The name is optional. If the name is omitted, it is an "anonymous" function (see next example).

#### Assigning a function to a variable

In Javascript, a *function* is a first-class variable.

    var myFunction = function() {
      // ...
    };

**Note:** when assigning an anonymous function to a variable as above, a
semi-colon should be used as shown, similar to typical variable assignment.

#### Calling a function

Functions created using either naming approach above are called the same way:

    myFunction();

This will execute any statements between the curly braces of the function being called.

#### Function arguments

    function myFunction(x,y) {
      // ...
    }

#### Calling a function with arguments

To pass arguments to a function, include them when calling the function:

    myFunction(10,20);

**Note:** any arguments that are not specified when calling

#### Function "signature"

The signature of a function consists of it's callable name, and any arguments it takes.
For the function in the previous example, the signature would be:

    myFunction(x,y)

If we know a function's signature we can call it properly,
without knowing its internal operation.

#### Function return value

A return value from a function is like a "result" of the function when it
is called. The return value is a single value, so a function call can be
used just like any other expression.

    function myFunction(x) {
      return x * 20;
    }
    
    var y = myFunction(10) + 10;

#### Functions have scope

Variables declared inside a function are local to that function and do
not alter a variable with the same name in an outer scope. Study the following example:

    var y = 10;

    function myFunction() {
      var y = 20;
      return y;
    }

    console.log(myFunction());  // 20
    console.log(y);             // 10


