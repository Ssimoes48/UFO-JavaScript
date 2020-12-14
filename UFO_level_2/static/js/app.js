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

button.on("click", enterData);
form.on("submit", enterData);

function enterData() {

    d3.event.preventDefault();

    var inputDate = d3.select("#datetime").property("value");

    var inputCity = d3.select("#city").property("value").toLowerCase().trim();

    var inputState = d3.select("#state").property("value").toLowerCase().trim();

    var inputCountry = d3.select("#country").property("value").toLowerCase().trim();

    var inputShape = d3.select("#shape").property("value").toLowerCase().trim();


    if (inputDate) { 
        var filteredData = sightings.filter(sighting => sighting.datetime === inputDate);
    }
    else if (inputCity) { 
        var filteredData = sightings.filter(sighting => sighting.city === inputCity);
    }
    else if (inputState) { 
        var filteredData = sightings.filter(sighting => sighting.state === inputState);
    }
    else if (inputCountry) { 
        var filteredData = sightings.filter(sighting => sighting.country === inputCountry);
    }
    else if (inputShape) { 
        var filteredData = sightings.filter(sighting => sighting.shape === inputShape);
    }
    else { 
        var filteredData = sightings;
    }

    tbody.html("");

    filteredData.forEach(sighting => {

        var row = tbody.append("tr");
    
        row.append("td").text(sighting.datetime);
        row.append("td").text(sighting.city);
        row.append("td").text(sighting.state);
        row.append("td").text(sighting.country);
        row.append("td").text(sighting.shape);
        row.append("td").text(sighting.durationMinutes);
        row.append("td").text(sighting.comments);

    });}

