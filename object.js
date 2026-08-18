let c = [1, 2, 3, 4, 5];

// Remove last element
c.pop();
console.log("After pop:", c);

// Add element at the end
c.push(4);
console.log("After push:", c);

// Remove first element
let a = c.shift();
console.log("Removed element:", a);
console.log("After shift:", c);

// Add element at the beginning
c.unshift(0);
console.log("After unshift:", c);

// Slice array
let sliced = c.slice(2, 4);
console.log("Slice:", sliced);

// Splice array
c.splice(2, 1, 10);
console.log("After splice:", c);

// Find length
console.log("Length:", c.length);

// Find index
console.log("Index of 10:", c.indexOf(10));

// Check if element exists
console.log("Includes 10:", c.includes(10));

// Reverse array
console.log("Reverse:", c.reverse());

// Sort array
console.log("Sorted:", c.sort((a, b) => a - b));