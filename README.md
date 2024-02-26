[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

Best Case:Best Case: If the input array is already sorted, the algorithm will terminate immediately after the first call to isSorted(). Hence, the best-case time complexity is O(n), where n is the number of elements in the array.

The worst-case scenario occurs when the input array is in reverse sorted order. In this case, the algorithm will generate all permutations of the array, and it needs to check each permutation for sorting. Generating all permutations and checking each one for sorting would lead to a time complexity of O(n! (n))

Impact of Random Generation without Memory:
If permutations were generated randomly without memory, the time complexity would still be O(n! (n)) in the worst case because the algorithm would still need to consider all possible permutations.

Even with random generation without memory, the worst-case time complexity remains O(n! (n)) but best case would be O(n). 
