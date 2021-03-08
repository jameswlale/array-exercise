# Array grouping exercise

The goal of this exercise is to write some executable code. 

We hope that you will not find this particularly difficult and it should not take more than one hour. However, please treat this task as though you were writing production-ready code that will be maintained by others, who may or may not have been familiar with the original requirement.

We do not require a user-facing interface of any kind. You should implement a function or class that can be called on to provide the following behaviour:

**Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays.**

**Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.**

Example pseudo-code: 

`groupArrayElements([1, 2, 3, 4, 5], 3)`

// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ] 


## Installation and testing
run `npm i`

run `npm run test` to see the tests in action.

The files of interest are: `./src/arrayUtils.ts` and `./src/arrayUtils.spec.ts`

## Lint / formating

Format
- Validation: `npm run format`
- Fixing: `npm run format:fix`

Lint
- Validation: `npm run lint`
- Fixing: `npm run lint:fix`
