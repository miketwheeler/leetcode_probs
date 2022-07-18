/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */


//used depth first search recursion for comparison of each tree at current node.value
function isSameTree(p, q) {
    
    function depthFirstSearch(nodeA, nodeB) {
        if(!nodeA && !nodeB) return true;
        
        if((!nodeA || !nodeB) || nodeA.val !== nodeB.val) return false;
        
        // recurse on each 'next L or R' -> expensive but cool tek
        return (depthFirstSearch(nodeA.left, nodeB.left)) && (depthFirstSearch(nodeA.right, nodeB.right))
    }
    
    return depthFirstSearch(p, q); // returns true or false if they are the same - early termination if not true
    
};
