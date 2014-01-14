# Javascript Cheatsheet

# Variables and Operators

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

# Loops

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

# Functions

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

**Note:** the return value of a function is `null` if it ends without explicitly
returning a value, or if `return;` is issued without specifying a value.

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

#### Functions are parsed first (hoisted)

The Javascript interpreter scans the current lexical scope for functions first,
and *hoists* any function declarations to the top of the scope.
The result is that a function does not need to be declared before it is called,
if both are in the same scope.

    myFunction();
    
    function myFunction() {
      // ...
    }

Even so, in general it is good practice to declare functions prior to using them
because this aids in readability and reduces confusion.

#### Recursive functions

A function may call itself from within. This type of function is known as a
*recursive function*.

    // Recursive function example
    function countdown(x){
      console.log('value is ' + x--);
      if (x > 0) countdown(x);
    }

    // Kick off the function
    countdown(10);

# Arrays

#### Declare a variable as an array

Arrays can be assigned to a variable using shorthand literal notation.

    var foo = [];
    var bar = [ 1, 2, 3 ];
    var baz = [ 'foo', 'bar', 'baz', 'bat', 5, 10, 3 ];

**Note:** each item value in an array can hold any type of value.

#### Assign values by index

In addition to shorthand literal assignment, individual values can be assigned
using the angle bracket notation below.

    var foo = [];
    foo[0] = 'foo';
    foo[1] = 'bar';
    foo[2] = 'baz';

**Remember:** Arrays in Javascript are *zero-based* which means the first array value
is always at index 0.

#### Referencing array values

Array indexes can be used to reference individual values:

    myFunction(foo[0],foo[1]);
    console.log(foo[2]);

#### Getting array length

The `Array.length` property can be used to get the number of elements in an array.

    var foo = [ 1, 2, 'foo', 'bar', 'baz', 'bat', 3, 5 ];
    console.log(foo.length); // == 8

#### Setting array length

If you assign a numeric value to the `Array.length` property, it will lengthen
or truncate the array to contain only that many values.

    var foo = [ 1, 2, 3 ];
    foo.length = 5;
    
    console.log(foo);
    // [ 1, 2, 3, undefined, undefined ]

**Note:** `undefined` values are inserted if the array is lengthened, see above.

Similarly, if you assign a value to an array index larger than the highest
index in the array, the array will be lengthened and `undefined` values will
be inserted for the missing values in between.

    var foo = [ 1, 2, 3 ];
    foo[4] = 'bar';
    
    console.log(foo);
    // [ 1, 2, 3, undefined, "bar" ]

