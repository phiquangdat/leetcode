/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let dummyHead = new ListNode(0);
    let p = l1 , q = l2, curr = dummyHead; //curr is a pointer
    while(p !== null || q != null){
        let val1 = (p == null) ? 0 : p.val;
        let val2 = (q == null) ? 0 : q.val;
        let temp = sum + val1 + val2; 
        sum = Math.floor(temp / 10);//sum might contains redundant value of previous calculation
        curr.next = new ListNode(temp % 10);
        curr = curr.next;
        if(p != null) p = p.next;
        if(q != null) q = q.next;
    }
    if(sum > 0) {
        curr.next = new ListNode(sum);
    }
    return dummyHead.next;
};