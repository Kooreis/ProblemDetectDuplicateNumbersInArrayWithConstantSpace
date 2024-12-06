Here is a TypeScript solution for the problem:

```typescript
class DuplicateNumberDetector {
    detect(arr: number[]): number[] {
        let duplicates: number[] = [];
        for (let i = 0; i < arr.length; i++) {
            let index = Math.abs(arr[i]) - 1;
            if (arr[index] < 0) {
                duplicates.push(Math.abs(arr[i]));
            } else {
                arr[index] = -arr[index];
            }
        }
        return duplicates;
    }
}

let detector = new DuplicateNumberDetector();
let arr = [1, 2, 3, 1, 3, 6, 6];
console.log(detector.detect(arr));
```

This solution uses the fact that the numbers in the array are in the range from 1 to n, where n is the size of the array. It traverses the array and for each element arr[i], it goes to the position arr[i] - 1 and negates the value there. If the value at that position is already negative, it means that the number arr[i] is a duplicate.