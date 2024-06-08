'use strict';

//Array

const array = [1, 2, 3, 4, 5, 7, 9];

array.pop(); // Method deletes last element in the end of the array.
console.log(array);

array.push(10); // Method that pushes new element in the end of the array
console.log(array);

//This methods can be used, but are being used not quite often, because of the index changing in whole array.
array.shift(0);
console.log(array); // Method that deletes element in the array, that has index 0, and changes all remaining ones -1.

array.unshift(6);
console.log(array); // // Method adds element to the 0 index, and changes indexes of remaining elements to +1.

for (let i = 0; i < array.length; i++) {
    // length option brings back the last index + 1.
    console.log(array[i]);
}

// With For ... Of can be used break and continue, if needed.
for (let value of array) {
    console.log(array[value]);
}

// array[99] = 0;
console.log(array.length);
console.log(array);

//Method that doesn't affect the items, it just itterates through them.
array.forEach(function (item, index, array) {
    console.log(`${index}: ${item}, inside of ${array}`);
});

const string = prompt('', '');
const products = string.split(', '); // Method that returns an array from the long string.
console.log(products);

products.sort(); // Method that sorts the elements in alphabetic order, but only if they are strings.

// products.join('; '); // Method that concats an array into a string.
console.log(products.join('; '));

const unsortedArray = [1, 5, 99, 78, 5, 36, 52, 22, 13, 7];

const ascendingSortedArray = unsortedArray.sort((a, b) => a - b); //Method that sorts numbers in ascending order.
console.log(ascendingSortedArray);

const descendingSortedArray = unsortedArray.sort((a, b) => b - a); //Method that sorts numbers in descending order.
console.log(descendingSortedArray);

//Pseudo Arrays don't have any methods, unlike arrays.
