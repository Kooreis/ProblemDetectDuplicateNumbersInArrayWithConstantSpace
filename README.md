# Question: How do you detect duplicate numbers in an array if only constant extra space is allowed? JavaScript Summary

The JavaScript function `findDuplicates` is designed to detect duplicate numbers in an array while only using constant extra space. It begins by initializing an empty array `duplicates` to store any duplicate numbers found. The function then iterates over the input array `nums`. For each number in `nums`, it calculates an index by subtracting one from the absolute value of the number. If the value at this index in `nums` is already negative, it means that the number has been encountered before, so it is a duplicate. In this case, the function adds the absolute value of the number to the `duplicates` array. If the value at the index is not negative, the function negates it, marking that this number has been seen. After iterating over all numbers in `nums`, the function returns the `duplicates` array, which contains all the duplicate numbers in `nums`. This solution effectively detects duplicate numbers in an array with a time complexity of O(n) and a space complexity of O(1), excluding the space needed for the input and output.

---

# TypeScript Differences

The TypeScript version of the solution solves the problem in the same way as the JavaScript version. Both versions use the same logic to detect duplicate numbers in an array by iterating over the array and negating the value at the index that matches the number. If the value at that index is already negative, it means the number has been seen before and is therefore a duplicate.

The main difference between the two versions is that the TypeScript version is written in an object-oriented style, with the solution encapsulated in a class called `DuplicateNumberDetector`. This class has a method `detect` that takes an array of numbers as an argument and returns an array of duplicate numbers.

Another difference is that the TypeScript version uses static typing. The array `arr` and the return value of the `detect` method are explicitly typed as arrays of numbers (`number[]`). This can help prevent bugs by ensuring that the correct types of values are used.

In the JavaScript version, the function `findDuplicates` is a standalone function, and there is no explicit typing. The function takes an array of numbers as an argument and returns an array of duplicate numbers.

In terms of language features, the TypeScript version uses classes and static typing, which are not available in JavaScript. However, the core logic of the solution is the same in both versions.

---

# C++ Differences

The C++ version of the solution uses the same logic as the JavaScript version to solve the problem. It iterates over the array and for each number, it negates the value at the index that matches the number. If the value at that index is already negative, it means the number has been seen before and is therefore a duplicate.

However, there are some differences in the language features and methods used in the two versions:

1. Array Representation: In JavaScript, arrays are used directly, while in C++, the `std::vector` container is used to represent the array.

2. Size of Array: In JavaScript, the `length` property is used to get the size of the array, while in C++, the `size()` method is used.

3. Absolute Value: In JavaScript, the `Math.abs()` function is used to get the absolute value of a number, while in C++, the `abs()` function is used.

4. Output: In JavaScript, the duplicates are stored in an array and returned. In C++, the duplicates are printed directly to the console using `std::cout`.

5. Main Function: In C++, the code is wrapped in a `main()` function, which is the entry point of the program. In JavaScript, the code is wrapped in a `findDuplicates()` function, which needs to be called to execute the code.

6. Syntax: The syntax of the two languages is different, for example, the use of semicolons, the way loops are written, etc.

---
