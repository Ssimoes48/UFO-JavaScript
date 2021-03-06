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

var form = d3.select(".gretel-is-awesome");
console.log(form);

button.on("click", enterData);
form.on("submit", enterData);

function enterData() {
console.log("hello_world");

    d3.event.preventDefault();

    var inputDate = d3.select("#datetime").property("value");

    var inputCity = d3.select("#city").property("value").toLowerCase().trim();

    var inputState = d3.select("#state").property("value").toLowerCase().trim();

    var inputCountry = d3.select("#country").property("value").toLowerCase().trim();

    var inputShape = d3.select("#shape").property("value").toLowerCase().trim();

    var filteredData = sightings;


    if (inputDate) { 
        var filteredData = filteredData.filter(sighting => sighting.datetime === inputDate);
    }
    if (inputCity) { 
        var filteredData = filteredData.filter(sighting => sighting.city === inputCity);
    }
    if (inputState) { 
        var filteredData = filteredData.filter(sighting => sighting.state === inputState);
    }
    if (inputCountry) { 
        var filteredData = filteredData.filter(sighting => sighting.country === inputCountry);
    }
    if (inputShape) { 
        var filteredData = filteredData.filter(sighting => sighting.shape === inputShape);
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

