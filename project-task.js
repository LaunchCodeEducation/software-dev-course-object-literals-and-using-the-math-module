/*
===========================================
🧮 Custom Calculator Using Math Module
===========================================

🎯 Objective:
Students will create a custom calculator using JavaScript's built-in Math module
to perform a series of mathematical operations.

This activity helps reinforce:
- Combining multiple Math methods
- Writing modular, testable functions

---
📘 Scenario:
You're building a calculator for an online math game. The calculator must be able to:

✅ Calculate absolute value  
✅ Compute powers  
✅ Find square roots  
✅ Identify max and min in a set  
✅ Generate random integers within a range  
✅ Round numbers to a specific number of decimal places

---
🧭 Instructions:

1️⃣ Write a function for each operation using Math methods  
2️⃣ Test each function with sample inputs  
3️⃣ Combine all functions into a single "calculator" program
*/

// ============================================
// 🔧 Individual Operations Using Math
// ============================================

// Absolute Value Calculation
function getAbsoluteValue(num) {
  return Math.abs(num);
}

// Power Calculation
function calculatePower(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root Finder
function findSquareRoot(num) {
  return Math.sqrt(num);
}

// Maximum Finder
function findMax(...nums) {
  return Math.max(...nums);
}

// Minimum Finder
function findMin(...nums) {
  return Math.min(...nums);
}

// Random Integer Generator (inclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Custom Rounding
function roundToDecimal(num, decimals) {
  let factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
}

// ============================================
// 🧪 Sample Test Cases (Scenarios for Students)
// ============================================

console.log("Absolute value of -45.67:", getAbsoluteValue(-45.67));
console.log("5 raised to the power of 3:", calculatePower(5, 3));
console.log("Square root of 144:", findSquareRoot(144));
console.log("Max from [3, 78, -12, 0.5, 27]:", findMax(3, 78, -12, 0.5, 27));
console.log("Min from [3, 78, -12, 0.5, 27]:", findMin(3, 78, -12, 0.5, 27));
console.log("Random integer between 1 and 50:", getRandomInteger(1, 50));
console.log("Round 23.67891 to 2 decimal places:", roundToDecimal(23.67891, 2));

// ============================================
// 💡 Extension:
// Combine into a menu-based calculator interface using prompt() if desired
// ============================================
