function hasTargetSum(array, target) {
  // Write your algorithm here
  const visitedNumbers = new Set();

  for (const num of array) {
    const difference = target - num;
    
    if (visitedNumbers.has(difference)) {
      return true; // Pair found
    }

    visitedNumbers.add(num);
  }

  return false; // No pair found
}



/* 
  Write the Big O time complexity of your function here

  O(n)
*/

/* 
  Add your pseudocode here

Create an empty set to keep track of visited numbers.
Iterate through each number in the array.
Calculate the difference between the target and the current number (target - current).
If the difference is in the set, return true (a pair is found).
Otherwise, add the current number to the set.
If the loop completes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here

  Set Initialization:

const visitedNumbers = new Set();: This line initializes an empty set called visitedNumbers to keep track of the numbers visited during the iteration.
Iteration through the Array:

for (const num of nums) {: This loop iterates through each element num in the input array nums.
Calculating the Difference:

const difference = target - num;: For each element, it calculates the difference between the target sum and the current element.
Checking for Pair:

if (visitedNumbers.has(difference)) { return true; }: It checks if the calculated difference (complementary number) is present in the set of visited numbers. If it is, the function immediately returns true, indicating that a pair has been found.
Updating the Set:

visitedNumbers.add(num);: If no pair is found for the current element, it adds the current element to the set of visited numbers.
Returning False if No Pair Found:

return false;: If the loop completes without finding any pair, the function returns false, indicating that no pair of numbers in the array adds up to the target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
