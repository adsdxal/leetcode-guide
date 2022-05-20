let nums1 = [1, 2, 2, 1], nums2 = [2, 2]
var intersection = function(nums1, nums2) {
    return [...new Set(nums1)].filter(item => {
        return nums2.includes(item)
    })
};

// console.log(intersection(nums1, nums2));

// 使用reduce
var arr = [3,9,4];
let res = arr.reduce((pre, cur, index, arr) => {
    console.log(pre);
    console.log(cur);
    console.log(index);
    console.log(arr);
    return pre + cur
}, 0) //这个0是pre的第一个值，pre是大括号里面return 的值，如果不写这个值，第一个pre是数组的第一个值
console.log(res);
