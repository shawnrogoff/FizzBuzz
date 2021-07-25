// Get values from webpage
function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // this step ensures the values entered are converted to integers; decimals are truncated
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        // call generateNumbers
        let fizzBuzzArray = fizzBuzz(fizzValue, buzzValue);
        // call displayNumbers
        displayValues(fizzBuzzArray);
    } else {
        alert("You must enter integers!");
    }   
}

// Create FizzBuzz array
function fizzBuzz(fizzValue, buzzValue) {
    // create our empty array to hold our values
    let returnArray = [];
    
    // use a for loop with logic to solve our problem
    for (let i = 1; i <= 100; i++){
                
        if(i % fizzValue == 0 && i % buzzValue == 0){
            returnArray.push("FizzBuzz");
        } else if (i % fizzValue == 0) { // numbers divisible by 3
            returnArray.push("Fizz");
        } else if (i % buzzValue == 0) { // numbers divisible by 5
            returnArray.push("Buzz");
        } else { // numbers not divisible by 3 or 5 are simply passed as the number
            returnArray.push(i);
        }
    }
    // return our array to the getValues function
    return returnArray;
}

// Display FizzBuzz results to page
function displayValues(fizzBuzzArray) {
    
    // get the table body element from the page
    let tableBody = document.getElementById("results");

    // get the template from the app page
    let templateRow = document.getElementById("fizzbuzzTemplate");

    // clear the table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fizzBuzzArray.length; i += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        // grab just the td elements, and put them into an array
        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(fizzBuzzArray[i])
        rowCols[0].textContent = fizzBuzzArray[i];

        rowCols[1].classList.add(fizzBuzzArray[i+1])
        rowCols[1].textContent = fizzBuzzArray[i+1];

        rowCols[2].classList.add(fizzBuzzArray[i+2])
        rowCols[2].textContent = fizzBuzzArray[i+2];

        rowCols[3].classList.add(fizzBuzzArray[i+3])
        rowCols[3].textContent = fizzBuzzArray[i+3];

        rowCols[4].classList.add(fizzBuzzArray[i+4])
        rowCols[4].textContent = fizzBuzzArray[i+4];

        tableBody.appendChild(tableRow);
    }   
}