function sumRange (startRange, endRange){
const sum = 0;
if (endRange === startRange) // Base case: only one number in the range
return startRange;
else
return sum + sumRange (startRange,endRange-1); // Recursive case: sum current number with sum of the rest
  }
