/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    // ret when none or one
    if(!head || !head.next) return head;
    
    // set current and prev nodes 
    let curNode = head; 
    let prevNode = head;

    // while is a node (not at end of linked list)
    while(curNode) {
        // when not a duplicate -> iterate prev by 1 ; else -> 'slice one' .next reassignment if equal
        if(prevNode.val !== curNode.val) 
            prevNode = curNode;
        else 
            prevNode.next = curNode.next;

        // always reassign current to the next node - while a next node exists
        curNode = curNode.next;
    }
    
    // return the head node at the end of the (*potentially) sliced list
    return head;
};