/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
listA = []
listB = []
list1A = [3,5,8]
list1B = [1,2,4,6,7]

function merge(left, right) {
    let sorted = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) sorted.push(left.shift());
        else sorted.push(right.shift());
    }

    return [...sorted, ...left, ...right]
}

function mergeSplit(lists) {
    const half = lists.length/2;
    
    if(lists.length <= 1) {
        return lists;
    }

    const left = lists.splice(0, half);
    const right = lists;

    return merge(mergeSplit(left), mergeSplit(right))
}

function mergeTwoLists(list1, list2) {

    const lists = list1.concat(list2);
    
    return mergeSplit(lists);
};

console.log(`mergeTwoLists returned: ${mergeTwoLists(list1A, list1B)}`)