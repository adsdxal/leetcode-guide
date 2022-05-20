let nums1 = [0], m = 0, nums2 = [1], n = 1
// 输出：[1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
    let l1 = m - 1, l2 =n - 1, l3 = n + m - 1
    while (l1 >=0 && l2 >=0) {
        if (nums1[l1] <= nums2[l2]) {
            nums1[l3] = nums2[l2]
            l2--
        } else {
            nums1[l3] = nums1[l1]
            l1--
        }
        l3--
    }
    while (l1 >= 0) {
        nums1[l3] = nums1[l1]
        l1--
        l3--
    }
    while (l2 >= 0) {
        nums1[l3] = nums2[l2]
        l2--
        l3--
    }
    return nums1
};
console.log(merge(nums1, m, nums2, n));