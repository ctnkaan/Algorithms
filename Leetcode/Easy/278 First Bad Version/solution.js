/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

 var solution = function(isBadVersion) {
    return function(n) {
        let leftPointer = 1, rightPointer = n;
        
        while (leftPointer < rightPointer) {
            const middlePointer = Math.floor((leftPointer+rightPointer) / 2);
            
            if (isBadVersion(middlePointer))
                rightPointer = middlePointer;
            else
                leftPointer = middlePointer+1;
        }
        
        return leftPointer;
    };
};