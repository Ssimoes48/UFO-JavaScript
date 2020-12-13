// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("#ufo-table");

// Iterate through each student/grade pair
tableData.forEach(([datetime, city, state, country, shape, durationMinutes, comments]) => {

    // Append one table row per student/grade
    var row = tbody.append("tr");
  
    // append one cell for the student and one cell for the grade
    row.append("td").text(datetime);
    row.append("td").text(city);
    row.append("td").text(state);
    row.append("td").text(country);
    row.append("td").text(shape);
    row.append("td").text(durationMinutes);
    row.append("td").text(comments);

  });
  

// Prevent the page from refreshing
//   d3.event.preventDefault();