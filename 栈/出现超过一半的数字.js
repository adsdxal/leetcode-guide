var majorityElement = function (nums) {
    let map = new Map()
    let len = nums.length / 2
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (map.get(nums[i]) > len) {
                return nums[i]
            } else {
                map.set(nums[i], map.get(nums[i]) + 1)
            }
        } else {
            map.set(nums[i], 1)
        }
    }
    
};

majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2])