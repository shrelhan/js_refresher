# js_refresher
A JS resfresher to all concepts.

---

# What is JavaScript ?
*JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.*

---

## Everything Variables
### There are 3 ways to declare variables
1. using *var* keyword  - prefer not using var keyword due to block scope & functional scope issues, can be reassigned
    Syntax: var user_name = "SR";
2. using *let* keyword - can be reassigned, block scoped, mostly used
    Syntax: let user_name = "SR";
3. using *const* keyword - cannot be reassigned, block scoped, mostly used
    Syntax: const user_name = "SR";

---

## Everything Data types
### There are two types of data types in JS:
1. Primitive, call by value: String, Number, Boolean, null, undefined, Symbol, BigInt.
- String, to store and manipulate string types, Syntax: let *userName* = *"SR"*;
- Number, to store and manipulate integer types, Syntax: let *userAge* = *18*;
- Boolean, to store truthy and falsy values, Syntax: let *isUserRegistered* = *true or false*;
- null, to define variable as empty, Syntax: let *userEligibility* = *null*;
- undefined, to set variable type to undefined, Syntax: let *userMobNo* = *undefined*;
- BigInt, to store large number values, Syntax: let *userUniqueId* = *12615362662277*n;
- Symbol, to store unique values, Syntax: const *userId* = *Symbol('123')*;
2. Non-Primitive, call by reference: Function, Array, Object.
- Function, to define block of instructions inside a function to make it reusable,
Syntax: *function functionName() {};*
- Array, to store list or multiple values of similar types, Syntax: let *arrayOne* = *[]*;
- Objects, to store data in key:value pairs, Syntax: let *userOne* = *{name: 'SR'}*;
