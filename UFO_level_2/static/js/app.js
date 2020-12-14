var sightings = data;

var tbody = d3.select("tbody");

sightings.forEach(sighting => {
 
    var row = tbody.append("tr");

    row.append("td").text(sighting.datetime);
    row.append("td").text(sighting.city);
    row.append("td").text(sighting.state);
    row.append("td").text(sighting.country);
    row.append("td").text(sighting.shape);
    row.append("td").text(sighting.durationMinutes);
    row.append("td").text(sighting.comments);

});

var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", enterDate);
form.on("submit", enterDate);

function enterDate() {

    d3.event.preventDefault();

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

        var row = tbody.append("tr");
    
        row.append("td").text(sighting.datetime);
        row.append("td").text(sighting.city);
        row.append("td").text(sighting.state);
        row.append("td").text(sighting.country);
        row.append("td").text(sighting.shape);
        row.append("td").text(sighting.durationMinutes);
        row.append("td").text(sighting.comments);

    });}

