# @raincouver/lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @raincouver/lotide`

**Require it:**

`const _ = require('@raincouver/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrX,arrY)`:
    Side effect function, assert equality of two given arrays.

* `assertEqual(actual, expected)`:
    Side effect function, assert equality of two given values.

* `assertObjectsEqual(actual, expected)`:
    Side effect function, assert equality of two given objects.

* `countLetters(array)`:
    count number of each unique conponents in a given array.

* `countOnly(allItems, itemsToCount)`: 
    allItems: an array of strings that we need to look through
    itemsToCount: an object specifying what to count

* `eqArrays(arrX,arrY)`:
    Check equlity of two given arrays. Returns true or false.
    (recursive)

* `eqObjects(object1, object2)`:
    Check equlity of two given objects. Returns true or false.

* `findKey(object, callback)`:
    Find key in given object based on provided callback function.

* `findKeyByValue(obj,val)`:
    Find key in given object based on provided value.

* `head(arrX)`:
    Return 'head' of the given array.

* `letterPositions(array)`:
    Return indices of all conponents of the given array in an object.

* `map(array, callback)`:
    Loop through each item of the given array applied with the given callback function.

* `middle(array)`:
    Return 'middle' of the given array.

* `tail(array)`:
    Return 'tail' of the given array.

* `takeUntil(array, callback)`:
    Return the given array, cut when given callback function condition is met.

* `without(source,itemsToRemove)`:
    Return an given source array without the items listed in the itemToRemove parameter.