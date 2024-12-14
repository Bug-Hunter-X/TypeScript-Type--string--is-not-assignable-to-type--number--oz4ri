# TypeScript Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error:  Type 'string' is not assignable to type 'number'.  The error occurs when a function expecting a numeric argument receives a string.  The solution showcases different approaches to handle this type mismatch and prevent the error.

## Bug Description

The `add` function is defined to accept two numbers and return their sum.  However, when called with a string argument ('10'), the compiler throws an error because TypeScript's type system detects the type mismatch.

## Bug Solution

The solution involves either explicitly converting the string to a number using `parseInt()` or `parseFloat()` or enhancing the function's type definition to allow for string input and perform a conditional type check before the addition operation.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository's root.
3. Compile the `bug.ts` file using the TypeScript compiler (tsc bug.ts).