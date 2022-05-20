let nums = [], target = 6

var twoSum = function (nums, target) {
    if(!nums.length) return []
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(target - nums[i])) {
            map.set(nums[i], i)
        } else {
            return [map.get(target - nums[i]), i]
        }
    }
};



console.log(twoSum(nums, target));