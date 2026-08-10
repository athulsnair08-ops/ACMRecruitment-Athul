# Number Algorithms

## 1. Palindrome Number

### Problem
Given an integer, determine whether it is a palindrome.

### Approach
I check whether the number is negative first. Negative numbers cannot be palindromes.

Then I store the original number and reverse the number digit by digit using modulo (`%`) and integer division (`//`).

Finally, I compare the original number with the reversed number.

### Algorithm
1. Check if the number is negative.
2. Store the original number.
3. Extract the last digit using `% 10`.
4. Add the digit to the reversed number.
5. Remove the last digit using `// 10`.
6. Repeat until the number becomes 0.
7. Compare the original number with the reversed number.

### Alternative Approach
Another approach is to convert the number into a string and compare it with its reverse. I chose the mathematical approach because it works directly with the digits and uses constant extra space.

### Complexity
- Time Complexity: O(n), where n is the number of digits.
- Space Complexity: O(1).


## 2. Integer to Roman

### Problem
Given an integer, convert it into its Roman numeral representation.

### Approach
I stored the Roman numeral values and their corresponding symbols in two lists, arranged from largest to smallest.

I repeatedly selected the largest possible value, added its Roman symbol to the result, and subtracted the value from the number.

### Algorithm
1. Store the Roman numeral values and symbols.
2. Start with an empty result.
3. Check the values from largest to smallest.
4. If the number is greater than or equal to a value, add its symbol.
5. Subtract that value from the number.
6. Repeat until the number becomes 0.
7. Return the result.

### Alternative Approach
Another approach is to use multiple `if-elif` statements for thousands, hundreds, tens and ones. I chose the list-based approach because it handles special cases such as IV, IX, XL, XC, CD and CM easily.

### Complexity
- Time Complexity: O(1), since the number of Roman numeral values is fixed.
- Space Complexity: O(1).
