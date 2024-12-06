```cpp
#include <iostream>
#include <vector>
#include <cmath>

int main() {
    std::vector<int> nums = {1, 2, 3, 1, 3, 6, 6};
    for (int i = 0; i < nums.size(); i++) {
        if (nums[abs(nums[i])] >= 0)
            nums[abs(nums[i])] = -nums[abs(nums[i])];
        else
            std::cout << abs(nums[i]) << " ";
    }
    return 0;
}
```