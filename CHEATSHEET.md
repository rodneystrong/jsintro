# Javascript Cheatsheet

  * [Variables and Operators](#variables-and-operators)
  * [Loops](#loops)
  * [Functions](#functions)
  * [Arrays](#arrays)
  * [Objects](#objects)
  * [Object Constructors](#object-constructors)
  * [DOM Operations](#dom-operations)

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

**Note:** `undefined` values are inserted if the array is lengthened, as in the example.

Similarly, if you assign a value to an array index larger than the highest
index in the array, the array will be lengthened and `undefined` values will
be inserted for the missing values in between.

    var foo = [ 1, 2, 3 ];
    foo[4] = 'bar';
    
    console.log(foo);
    // [ 1, 2, 3, undefined, "bar" ]

#### Array methods: adding elements

Appending an element to the array is accomplished with the `push()` method:

    var foo = [ 'bar', 'baz' ];
    foo.push('bat');
    console.log(foo); // [ 'bar', 'baz', 'bat' ]

Prepend an element with `unshift()` method:

    var foo = [ 'bar', 'baz' ];
    foo.push('bat');
    console.log(foo); // [ 'bat', 'bar', 'baz' ]

**Note:** push and unshift methods return the new array length as a numeric value.

#### Array methods: retrieving/removing elements

Remove the first element, and return it, using `shift()` method:

    var foo = [ 'bar', 'baz', 'bat' ];
    console.log(foo.shift()); // returns 'bar'
    console.log(foo); // [ 'baz', 'bat' ]

Remove the last element, and return it, using the `pop()` method:

    var foo = [ 'bar', 'baz', 'bat' ];
    console.log(foo.pop()); // returns 'bat'
    console.log(foo); // [ 'bar', 'baz' ]

#### Array assignment is by reference

    var foo = [ 'bar', 'baz' ];
    var bat = foo;
    
    bat.push('bat');
    console.log(foo); // [ 'bar', 'baz', 'bat' ]

If you create an array, and assign that value to more than one variable,
any changes to the array will affect all references to that array.
This is because arrays are objects, see below.

#### "Copy" an array using slice() method:

    var foo = [ 'bar', 'baz' ];
    var bat = foo.slice();
    
    bat.push('bat');
    
    console.log(foo); // [ 'bar', 'baz' ]
    console.log(bat); // [ 'bar', 'baz', 'bat' ]

--------

# Objects

#### Comparison to arrays

Objects are complex data types like arrays, however they have different
uses and behaviors.

  * Arrays have numbered elements, objects have *named keys* (properties)
  * Array literals use square brackets, object literals use *curly braces*
  * Array elements maintain their order, object properties do not have order
  * Both array elements and object properties can be accessed using square brackets
  * Object properties can also be accessed using a dot notation (see below)

#### Object literals

A simple object literal definition:

    var myObject = { };

The named keys of an object are called properties.
The literal notation can also be used to define an object with initial properties:

    var fruit = {
      type: 'apple',
      color: 'red',
      quantity: 10
    };

#### Setting object properties

Most commonly, dot notation is used to refer to an object property:

    fruit.quantity = 10;

Square brackets can also be used:

    fruit['quantity'] = 20;

Unlike variables and function names, object property names *can be* any valid string.
If the string contains characters that are not valid in variable or function names,
the square bracket notation must be used. For example:

    fruit['on-hand'] = 5;

Also note that when using the square bracket notation, the value must
evaluate to a string value. This also allows us to use a variable to refer to 
the property:

    var key = 'on-hand';
    fruit[key] = 10;

#### Referencing object properties

Referencing object properties is done in like manner:

    console.log(fruit.color);
    console.log(fruit['quantity']);

#### Object methods

If a `function` is assigned to an object property, it is called a *method*.
Methods can access the current object instance using the keyword `this`.

    var fruit = {
      color: null,
      setColor: function(color){
        this.color = color;
      }
    };

Using the keyword `this` to refer to the current object *instance* is
what makes objects powerful. More than just a complex data structure,
objects can encapsulate functionality that works on the current object.

--------

# Object Constructors

#### Object Constructors are just like functions

    var Point = function(x,y){
    };

**Note:** Constructor names are conventionally capitalized

#### Constructing an object instance using a constructor

Constructors are called using the keyword `new` and the name of the constructor function:

    var p = new Point(10,10);

This creates an *object instance*.

#### Constructors can access the object via `this`

Most often, constructors set any arguments they receive on the object itself
for use at a later time. Constructors commonly follow this pattern:

    var Point = function(x,y){
      this.x = x;
      this.y = y;
    };

It may seem repetitive, but it serves an important purpose. It stores the values
on the object itself. Subsequent code can access these values by referencing
the object's properties. Any methods of the object can also access these properties.

#### Prototype methods

Methods can be associated with object instances created from a constructor by
adding functions to the constructor's prototype as here:

    Point.prototype.movePoint = function(ox,oy){
      this.x += ox;
      this.y += oy;
    };

#### Putting it all together

    var Point = function(x,y){
      this.x = x;
      this.y = y;
    };
    
    Point.prototype.movePoint = function(ox,oy){
      this.x += ox;
      this.y += oy;
    };
    
    var p = new Point(10,10);
    p.movePoint(10,-10);
    console.log(p.x); // == 20
    console.log(p.y); // == 0

This example defines a constructor named `Point`, constructs an object instance
of `Point` into the variable `p`, and calls its `movePoint()` method.

#### `.toString()` method

If an object instance has a `toString()` method, this method will be used to
convert the object into a string representation, in the case of *casting* the
object into a string.

    var Point = function(x,y){
      this.x = x;
      this.y = y;
    };

    Point.prototype.toString = function(){
      return '[Point: ' + this.x + ', ' + this.y + ']';
    };
    
    var p = new Point(15,5);
    alert(p); // "[Point: 15,5]"
    console.log('Case object as string: ' + p);

**Note:** the toString() method is expected to *return* a value using `return`

---------

# DOM operations

#### Reference (or "grab") an existing DOM element

    var el = document.getElementById('my-element-id');

**Note:** The element must already exist in the document's HTML code,
and it must have an `id=""` attribute that matches the parameter passed
to `document.getElementById()`.

#### Get or set an element's CSS class(es)

All `HTMLElement` objects have a property called `className`. This property
contains the current CSS class(es), and can be assigned to change the class(es).

    var el = document.getElementById("my-element-id");
    console.log(el.className); // == "class1 class2"
    el.className = "class3";

#### Get an element's inner HTML

All `HTMLElement` objects have a property called `innerHTML`. This property
contains the raw HTML code that exists within the element.

    var el = document.getElementById("my-element-id");
    console.log(el.innerHTML);

#### Set an element's inner HTML

Assign new HTML code to an element's `innerHTML` property, to set its content.

    var el = document.getElementById("my-element-id");
    el.innerHTML = '<div>Hello World!</div>';

**Note:** values set with innerHTML should be *valid HTML content* for the
element. Valid HTML content might be text, other elements, and so on.

#### Create a new element

An HTML element can be created ("in memory").

    var my_div = document.createElement("div");

This element can be manipulated as any other element
(e.g. set className, or innerHTML), even though it doesn't exist
*in* our document yet.

#### Append an element to another element

An element can be appended to any other element using the `appendChild(element)`
method. Again, the resulting HTML should be valid (for example, do not append a
`<li>` onto an element that is not a list).

    var container = document.getElementById("my-element-id");
    var my_div = document.createElement("div");
    
    container.appendChild(my_div);

**Note:** An individual element object can only exist in one place in the DOM.
If you append an element in the DOM to another location, *it will be moved* there.

