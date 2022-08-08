/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= O(n) -- 2 simple operations (get length, do comparison); n times (once for each element in words)
    i++                             // 2 * n = O(2n) ~= O(n) -- Why is this 2 simple operations instead of 3 (retrieve, add, reassign)? resolves to the same anyway; Happens n times, once each iteration
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= O(n) -- Lookup value in words, assign value; Happens once every iteration of the loop
    if (!seen[word]) {              // 2 * n = O(2n) ~= O(n) -- Lookup key in object, truth test; Happens every iteration
      seen[word] = true;            // 1 * 1 = O(1) -- Assignment is a simple operation
      unique[unique.length] = word; // 3 * n = O(3n) ~= O(n) -- 3 simple operations (get length, lookup value, assignment); in the worst-case scenario, it happens every iteration
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= O(n)
    i++                             // 2 * n = O(2n) ~= O(n)
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= O(n)
    let isUnique = true;            // 1 * n = O(n)
    for (
      let c = 0;                    // 1 * 1 = O(1)
      c < i;                        // 1 * n^2 = O(n^2) -- one simple operation; happens every iteration of the outside loop and every iteration of the inside loop
      c++                           // 2 * n = O(2n) ~= O(n)
    ) {
      const comparing = words[c];   // 2 * n^2 = O(2n^2) ~= O(n^2)
      if (comparing === word) {     // 1 * n^2 = O(n^2)
        isUnique = false;           // 1 * n^2 = O(n^2) -- one simple operation; in worst case scenario, happens every iteration of the parent loop and every iteration of grandparent loop
      }
    }
    if (isUnique) {                 // 1 * n = O(n) -- one simple operation; happens once very iteration of the top-most loop
      unique[unique.length] = word; // 3 * n = O(3n) ~= O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
