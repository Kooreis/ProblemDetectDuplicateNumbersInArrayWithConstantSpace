Here is a JavaScript solution for the problem:

```javascript
function findDuplicates(nums) {
    let duplicates = [];
    for(let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if(nums[index] < 0) {
            duplicates.push(Math.abs(nums[i]));
        } else {
            nums[index] *= -1;
        }
    }
    return duplicates;
}

console.log(findDuplicates([1,2,3,1,3,6,6]));
```

This solution works by iterating over the array and for each number, it negates the value at the index that matches the number. If the value at that index is already negative, it means the number has been seen before and is therefore a duplicate.