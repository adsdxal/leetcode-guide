// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

let l1 = [1, 2, 4], l2 = [1, 3, 4]

var mergeTwoLists = function (list1, list2) {
    // 指针和链表的关系， 
    // 新建链表 let list3 = new ListNode(0),
    // 新建指针let p1 = list1
    // 指针自身移动 p1 = p1.next
    // 指针指向其他 p1.next = p2
    let list3 = new ListNode(0)
    let p1 = list1, p2 = list2, p3 = list3
    while(p1 && p2) {
        if(p1.val <= p2.val) {
            p3.next = p1
            p1 = p1.next
        } else {
            p3.next = p2
            p2 = p2.next
        }
        p3 = p3.next
    }
    if(p1) {
        p3.next = p1
    }
    if(p2) {
        p3.next = p2
    }
    return list3.next
};

console.log(mergeTwoLists(l1, l2));