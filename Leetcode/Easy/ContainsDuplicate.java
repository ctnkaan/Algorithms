class Solution {
    public boolean containsDuplicate(int[] nums) {
        
        HashMap <Integer , Integer> hmap = new HashMap<>();
        
        //init hashmap
        for (int i = 0; i < nums.length; i++) {
            if (hmap.containsKey(nums[i]))
                return true;
            hmap.put(nums[i], 1);
        }
        
        return false;
        
        
    }
}