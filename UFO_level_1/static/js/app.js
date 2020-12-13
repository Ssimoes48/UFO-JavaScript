// from data.js
var sightings = data;

// YOUR CODE HERE!

// Use D3 to select the table
var table = d3.select("#ufo-table");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Iterate through each student/grade pair
sightings.forEach(sighting => {

    // Append one table row per student/grade
    var row = tbody.append("tr");

    // append one cell for the student and one cell for the grade
    row.append("td").text(sighting.datetime);
    row.append("td").text(sighting.city);
    row.append("td").text(sighting.state);
    row.append("td").text(sighting.country);
    row.append("td").text(sighting.shape);
    row.append("td").text(sighting.durationMinutes);
    row.append("td").text(sighting.comments);

});


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", enterDate);
form.on("submit", enterDate);

// Complete the event handler function for the form
function enterDate() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime").property("value");

    console.log(inputDate);

    if (inputDate){ 
        var filteredDate = sightings.filter(sighting => sighting.datetime === inputDate);
    }
    else { 
        var filteredDate = sightings;
    }

    console.log(filteredDate);

    tbody.html("");

    filteredDate.forEach(sighting => {

        // Append one table row per student/grade
        var row = tbody.append("tr");
    
        // append one cell for the student and one cell for the grade
        row.append("td").text(sighting.datetime);
        row.append("td").text(sighting.city);
        row.append("td").text(sighting.state);
        row.append("td").text(sighting.country);
        row.append("td").text(sighting.shape);
        row.append("td").text(sighting.durationMinutes);
        row.append("td").text(sighting.comments);

    });}

    