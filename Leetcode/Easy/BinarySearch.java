class Solution {
    public int search(int[] nums, int target) {
        
        //setup
        int left = 0;
        int right = nums.length - 1;
        
        while (left <= right) {
            
            int mid = (left + right) / 2;
            
            if (nums[mid] == target)
                return mid;
            
            else if (nums[mid] < target) {
                left++;
            }
            
            else if (nums[mid] > target) {
                right--;
            }
            
        }
        
      return -1;  
        
    }
}