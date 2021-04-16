// Create an empty array named numbers:
let numbers = [];

// Put 20 random numbers in it, between 1 and 20 (exclusive of 20, and duplicates are fine...it's random)
let i = 0;

while (i < 20) {
    numbers.push(Math.floor(Math.random() * 20));
    i++;
}
console.log(numbers);

// Create a table element using createElement() method and give it an ID so we can identify it.
let table = document.createElement('table');
table.id = 'random-numbers';

// Create an element tableHTML to provide basic HTML markup for the table structure:
let tableHTML = `
<thead>
    <tr>
        <td>Item # (index value)</td>
        <td>Value (random numbers)</td>
    </tr>
</thead>
<tbody>
</tbody>
`;

// Set the table's inner html
table.innerHTML = tableHTML;

// Create an element tbody by getting tag name tbody. Now it's an HTMLElement object, we can get its body!
let tbody = table.getElementsByTagName('tbody')[0];

// Create an element tbodyHTML and assign an empty string to it. 
// Iterate the number's array and append a row to the table body's html for each number. // This is using template literals again 
let tbodyHTML = "";

for (i = 0; i < numbers.length; i++) {
    tbodyHTML = tbodyHTML + 
                    `
                    <tr>
                        <td>${i}</td>
                        <td>${numbers[i]}</td>
                    </tr>
                    `
}

// With iteration complete, we now have a long string of HTML w/ all the rows for the table body. 
// Set the table body's inner html
tbody.innerHTML = tbodyHTML;

// Append the whole table to the document's body...voila! 20 rows!
document.body.appendChild(table);