var removeDuplicates = function(nums) {
    let count = 0, current = 1;
    for (nums[i] !== nums[i-1])
         {
        count = 0;
        nums[current++] = nums[i];

    }
    else { 
        count++;
        if (count <= 1) nums[current++] = nums[i];
    }
    return current;
};
    