---
title: no-inline-comments - Rules
layout: doc
---
<!-- Note: No pull requests accepted for this file. See README.md in the root directory for details. -->

# disallow inline comments after code (no-inline-comments)

Some style guides disallow comments on the same line as code. Code can become difficult to read if comments immediately follow the code on the same line.
On the other hand, it is sometimes faster and more obvious to put comments immediately following code.

## Rule Details

This rule disallows comments on the same line as code.

Examples of **incorrect** code for this rule:

```js
/*eslint no-inline-comments: "error"*/

var a = 1; // declaring a to 1

function getRandomNumber(){
    return 4; // chosen by fair dice roll.
              // guaranteed to be random.
}

/* A block comment before code */ var b = 2;

var c = 3; /* A block comment after code */
```

Examples of **correct** code for this rule:

```js
/*eslint no-inline-comments: "error"*/

// This is a comment above a line of code
var foo = 5;

var bar = 5;
//This is a comment below a line of code
```

## Version

This rule was introduced in ESLint 0.10.0.

## Resources

* [Rule source](https://github.com/eslint/eslint/tree/master/lib/rules/no-inline-comments.js)
* [Documentation source](https://github.com/eslint/eslint/tree/master/docs/rules/no-inline-comments.md)
