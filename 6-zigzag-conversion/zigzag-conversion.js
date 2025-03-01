/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // Quick return if numRows is 1
    if (numRows <= 1) return s;

    // Initialize rows array to store characters for each row
    let rows = Array.from({ length: Math.min(numRows, s.length) }, () => "");
    let i = 0; // Index to iterate through the string
    let j, k; // Variables for the for loops
    let goingDown = false; // Flag to determine direction

    while (i < s.length) {
        // Traverse downwards through the rows
        for (j = 0; j < numRows && i < s.length; j++) {
            rows[j] += s[i]; // Add character to the current row
            i++;
        }

        // If the end of the string is reached, break
        if (i >= s.length) break;

        // Traverse upwards through the rows, starting from one row above the last
        for (k = numRows - 2; k > 0 && i < s.length; k--) {
            rows[k] += s[i]; // Add character to the current row
            i++;
        }
    }

    // Concatenate all rows to get the final zigzag string
    return rows.join("");
};

s = "PAYPALISHIRING";
numRows = 4;

console.log(convert(s, numRows)); // Output: "PINALSIGYAHRPI"
