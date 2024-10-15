//========>chapter 38 to 42<=========//
//Q # 01
function power(a, b) {
    return Math.pow(a, b);  // This calculates a raised to the power of b
  }
  
  console.log(power(2, 3));  // Output: 8 (because 2^3 = 8)

  //Q # 02
  function isLeapYear(year) {
    if (year % 4 === 0) {  // Check if divisible by 4
      if (year % 100 === 0) {  // Check if divisible by 100
        if (year % 400 === 0) {  // Check if divisible by 400
          return true;  // Leap year
        } else {
          return false;  // Not a leap year
        }
      } else {
        return true;  // Leap year
      }
    } else {
      return false;  // Not a leap year
    }
  }

  console.log(isLeapYear(2020));  // true (Leap year)
  console.log(isLeapYear(2021));  // false (Not a leap year)

 //Q # 03

// Function to calculate the semi-perimeter (S)
function calculateSemiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}

// Function to calculate the area of the triangle using Heron's formula
function calculateArea(a, b, c) {
  var S = calculateSemiPerimeter(a, b, c); // Call the first function to get S
  var area = Math.sqrt(S * (S - a) * (S - b) * (S - c)); // Apply Heron's formula
  return area; // Return the calculated area
}

// Example usage
var a = 3;
var b = 4;
var c = 5;

var area = calculateArea(a, b, c);
console.log("The area of the triangle is: " + area);

//Q #04
// Function to calculate average
function calculateAverage(marks1, marks2, marks3) {
  return (marks1 + marks2 + marks3) / 3;
}

// Function to calculate percentage
function calculatePercentage(totalMarks, maxMarks) {
  return (totalMarks / maxMarks) * 100;
}

// Main function to calculate and display results
function mainFunction(marks1, marks2, marks3, maxMarksPerSubject) {
  var average = calculateAverage(marks1, marks2, marks3);
  var totalMarks = marks1 + marks2 + marks3;
  var percentage = calculatePercentage(totalMarks, maxMarksPerSubject * 3);
  
  console.log("Average Marks: " + average);
  console.log("Percentage: " + percentage + "%");
}

// Example usage
mainFunction(85, 90, 78, 100);

//Q #05
function findCharacterIndex(string, char) {
  // Loop through each character in the string
  for (var i = 0; i < string.length; i++) {
      // If the character is found, return its index
      if (string[i] === char) {
          return i;
      }
  }
  // If the character is not found, return -1
  return -1;
}

// Example: Performing the function
var result = findCharacterIndex("Hello World", "o");
console.log("Character 'o' is at index:", result);  // Output: 4

//Q #06
function removeVowels(sentence) {
  var vowels = "aeiouAEIOU";  // Define vowels (both lowercase and uppercase)
  var result = "";  // Initialize an empty string to store the new sentence
  
  // Loop through each character in the sentence
  for (var i = 0; i < sentence.length; i++) {
      // If the character is not a vowel, add it to the result
      if (!vowels.includes(sentence[i])) {
          result += sentence[i];
      }
  }
  
  return result;  // Return the sentence without vowels
}

// Example usage:
var sentence = "I am a frontend develepor!";
var result = removeVowels(sentence);
console.log(result);  // Output: "Hll Wrld!"

//Q #07
function countSuccessiveVowelPairs(sentence) {
  var count = 0;  // Initialize a counter for vowel pairs
  var vowels = "aeiouAEIOU";  // String containing all vowels (lowercase and uppercase)

  // Loop through the sentence from the first character to the second to last character
  for (var i = 0; i < sentence.length - 1; i++) {
      var currentChar = sentence[i];  // Current character
      var nextChar = sentence[i + 1];  // Next character

      // Use a switch statement to check for pairs of vowels
      switch (true) {
          case vowels.includes(currentChar) && vowels.includes(nextChar):
              count++;  // If both are vowels, increase the count
              break;  // Exit the switch
          default:
              // Do nothing if they are not a pair of vowels
              break; 
      }
  }

  return count;  // Return the total count of vowel pairs
}

// Example usage:
var sentence = "please read this application and give me gratuity";
var result = countSuccessiveVowelPairs(sentence);
console.log("Number of successive vowel pairs:", result);  // Output: 5

//Q# 08
// Function to convert kilometers to meters
function convertToMeters(km) {
  return km * 1000; // 1 km = 1000 meters
}

// Function to convert kilometers to feet
function convertToFeet(km) {
  return km * 3280.84; // 1 km = 3280.84 feet
}

// Function to convert kilometers to inches
function convertToInches(km) {
  return km * 39370.1; // 1 km = 39370.1 inches
}

// Function to convert kilometers to centimeters
function convertToCentimeters(km) {
  return km * 100000; // 1 km = 100000 centimeters
}

// Get input from the user (distance in kilometers)
var distanceInKm = parseFloat(prompt("Enter the distance between two cities in kilometers: "));

// Convert and print the results
console.log("Distance in Meters: " + convertToMeters(distanceInKm));
console.log("Distance in Feet: " + convertToFeet(distanceInKm));
console.log("Distance in Inches: " + convertToInches(distanceInKm));
console.log("Distance in Centimeters: " + convertToCentimeters(distanceInKm));

//Q# 09
// Function to calculate overtime pay
function calculateOvertimePay(hoursWorked) {
  var overtimeRate = 12.00;  // Set the overtime rate
  var regularHours = 40;     // Define regular working hours

  // Check if hours worked exceed regular hours
  if (hoursWorked > regularHours) {
      var overtimeHours = hoursWorked - regularHours;  // Calculate extra hours
      var overtimePay = overtimeHours * overtimeRate;  // Calculate pay for extra hours
      return overtimePay;  // Return the total overtime pay
  } else {
      return 0;  // Return 0 if no overtime hours
  }
}

// Get user input for hours worked
var hoursWorked = parseInt(prompt("Enter the number of hours worked by the employee: "));

// Calculate overtime pay
var overtimePay = calculateOvertimePay(hoursWorked);

// Display the result
console.log("Overtime Pay: Rs." + overtimePay);

//Q# 10
function calculateNotes(amount) {
  // Step 1: Calculate number of 100 notes
  var hundredNotes = Math.floor(amount / 100);
  
  // Step 2: Calculate remaining amount after 100 notes
  var remainder = amount % 100;
  
  // Step 3: Calculate number of 50 notes
  var fiftyNotes = Math.floor(remainder / 50);
  
  // Step 4: Calculate remaining amount after 50 notes
  remainder = remainder % 50;
  
  // Step 5: Calculate number of 10 notes
  var tenNotes = Math.floor(remainder / 10);
  
  // Step 6: Display the result
  console.log(`100 Notes: ${hundredNotes}`);
  console.log(`50 Notes: ${fiftyNotes}`);
  console.log(`10 Notes: ${tenNotes}`);
}

// Example call to the function
calculateNotes(370);  // This will output the number of 100, 50, and 10 notes









  