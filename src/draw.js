import * as d3 from 'd3';


function drawCanvas (gridSize, pixelSize) {
    // Make document listen for whether or not the mouse is down
    window.mouseDown = 0;
    document.body.onmousedown = function() { 
        window.mouseDown++;
    }
    document.body.onmouseup = function() {
        window.mouseDown--;
    }

    // Make the background
    var gridBG = d3.select("main").append("svg")
                                  .attr("id", "grid")
                                  .style("height", (pixelSize * gridSize).toString() + "px")
                                  .style("width", (pixelSize * gridSize).toString() + "px")
                                  .style("margin", pixelSize.toString() + "px")
                                  .style("float", "left");
    
    // Fill the svg with all of the pixels for drawing
    for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j < gridSize; j++) {
            var pixel = gridBG.append("rect")
                              .style("fill", "white")
                              .attr("position", "relative")
                              .attr("y", (pixelSize * i).toString() + "px")
                              .attr("x", (pixelSize * j).toString() + "px")
                              .style("height", pixelSize.toString() + "px")
                              .style("width", pixelSize.toString() + "px")
                              .attr("value", 0)
                              .attr("id", "pix-" + i.toString() + "-" + j.toString())
                              .on("mmouseup mousedown mouseover mouseout", colorSwitch);
        }
    }
}

function drawGuess (gridSize, pixelSize) {
    var guessBG = d3.select("main").append("svg")
                                   .attr("id", "guess")
                                   .style("height", (pixelSize * gridSize).toString() + "px")
                                   .style("width", (pixelSize * gridSize).toString() + "px")
                                   .style("margin-right", "0px")
                                   .style("margin", pixelSize.toString() + "px")
                                   .style("float", "right");

    var guess = guessBG.append("rect")
                       .style("fill", "white")
                       .style("height", "100%")
                       .style("width", "100%");
}

function drawStats (gridSize, pixelSize) {
    var statsBG = d3.select("main").append("svg")
                                   .attr("id", "stats")
	                               .style("display", "block")
                                   .style("height", (pixelSize * gridSize).toString() + "px")
                                   .style("width", "100%");

    var stats = statsBG.append("rect")
                       .style("fill", "white")
                       .style("height", "100%")
                       .style("width", "100%");
}

function placeButtons (gridSize, pixelSize) {
    var buttonBG = d3.select("main").append("svg")
                                   .attr("id", "buttons")
                                   .style("height", (pixelSize * gridSize).toString() + "px")
                                   .style("width", "180px")
                                   .style("margin-top", pixelSize.toString() + "px");

    buttonBG.append("rect")
            .style("fill", "white")
            .style("height", "100%")
            .style("width", "100%");

    var guessButton = buttonBG.append("rect")
                            .style("fill", "steelblue")
                            .style("stroke", "black")
                            .attr("y", "112px")
                            .attr("x", "12px")
                            .style("height", "50px")
                            .style("width", "156px")
                            .on("click", function () { console.log(0); })
                            .on("mousedown", function () { d3.select(this).style("fill", "lightblue"); })
                            .on("mouseup", function () { d3.select(this).style("fill", "steelblue"); });
    
    var resetButton = buttonBG.append("rect")
                            .style("fill", "steelblue")
                            .style("stroke", "black")
                            .attr("y", "174px")
                            .attr("x", "12px")
                            .style("height", "50px")
                            .style("width", "156px")
                            .on("click", resetImage)
                            .on("mousedown", function () { d3.select(this).style("fill", "darkblue"); })
                            .on("mouseup", function () { d3.select(this).style("fill", "steelblue"); });
}

function getImage (gridSize) {
    var image = [];

    for (var i = 0; i < gridSize; i++) {
        var row = [];
        
        for (var j = 0; j < gridSize; j++) {
            row.push(
                Number(document.getElementById(i.toString() + "-" + j.toString()).getAttribute("value"))
            );
        }
        image.push(row);
    }

    return image;
}

function resetImage () {
    for (var i = 0; i < 28; i++) {
        for (var j = 0; j < 28; j++) {
            d3.select("#pix-" + i.toString() + "-" + j.toString())
              .attr("value", 0)
              .style("fill", "white");
        }
    }
}

var colorSwitch = (function (){
    var pixelColor = "white";
    var value = 0;

    return function (){
        if (window.mouseDown){
            pixelColor = pixelColor == "white" ? "black" : "white";
            value = value == 0 ? 1 : 0;

            d3.select(this).style("fill", pixelColor);
            d3.select(this).attr("value", value);
        }
    }
})();

export {drawCanvas, drawGuess, drawStats, placeButtons, getImage};
