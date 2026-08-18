let name = "swarit";

let last = "sahu";

// Convert to uppercase
name = name.toUpperCase();
console.log("Uppercase:", name);

// Convert to lowercase
last = last.toLowerCase();
console.log("Lowercase:", last);

// Character at index 3
console.log("Character at 3:", name.charAt(3));

// Find first occurrence
console.log("Index of A:", name.indexOf("A"));

// Find last occurrence
console.log("Last index of A:", name.lastIndexOf("A"));

let s = "swarit sahu";

// Split string
console.log("Split:", s.split(" "));

// Replace string
console.log("Replace:", s.replace("swarit", "Swarit"));

// Check if string contains
console.log("Includes:", s.includes("swarit"));

// Concatenate strings
console.log("Concat:", s.concat(" - CSE AI/ML"));

// String length
console.log("Length:", s.length);

// Character at a particular position
console.log("Character:", s.charAt(2));

// Extract part of string
console.log("Slice:", s.slice(0, 6));

// Extract substring
console.log("Substring:", s.substring(0, 6));

// Check starting text
console.log("Starts with:", s.startsWith("swarit"));

// Check ending text
console.log("Ends with:", s.endsWith("sahu"));

// Remove extra spaces
let text = "   hello world   ";
console.log("Trim:", text.trim());

