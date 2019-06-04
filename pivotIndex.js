nums = [1, 7, 3, 6, 5, 6];

var pivotIndex = function(nums) {
  if (nums === null || nums.length === 0) return -1;
  let sum = nums.reduce((accu, num) => accu + num, 0);
  //console.log(sum)

  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightSum = sum - nums[i] - leftSum;
    console.log(rightSum);
    if (rightSum === leftSum) return i;
    leftSum += nums[i];
    //  console.log(leftSum)
  }
  return -1;
};

pivotIndex(nums);
