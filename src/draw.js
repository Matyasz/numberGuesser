import * as d3 from 'd3';


const PIXEL_SIZE = 12;
const PIXEL_COUNT = 28;

function drawCanvas () {
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
                                  .style("height", (PIXEL_SIZE * PIXEL_COUNT).toString() + "px")
                                  .style("width", (PIXEL_SIZE * PIXEL_COUNT).toString() + "px")
                                  .style("margin", PIXEL_SIZE.toString() + "px")
                                  .style("float", "left");
    
    // Fill the svg with all of the pixels for drawing
    for (var i = 0; i < PIXEL_COUNT; i++) {
        for (var j = 0; j < PIXEL_COUNT; j++) {
            var pixel = gridBG.append("rect")
                              .style("fill", "white")
                              .attr("position", "relative")
                              .attr("y", (PIXEL_SIZE * i).toString() + "px")
                              .attr("x", (PIXEL_SIZE * j).toString() + "px")
                              .style("height", PIXEL_SIZE.toString() + "px")
                              .style("width", PIXEL_SIZE.toString() + "px")
                              .attr("value", 0)
                              .attr("id", "pix-" + i.toString() + "-" + j.toString())
                              .on("mmouseup mousedown mouseover mouseout", colorSwitch);
        }
    }
}

function drawGuess () {
    var guessBG = d3.select("main").append("svg")
                                   .attr("id", "guess")
                                   .style("height", (PIXEL_SIZE * PIXEL_COUNT).toString() + "px")
                                   .style("width", (PIXEL_SIZE * PIXEL_COUNT).toString() + "px")
                                   .style("margin-right", "0px")
                                   .style("margin", PIXEL_SIZE.toString() + "px")
                                   .style("float", "right");

    var guess = guessBG.append("rect")
                       .style("fill", "white")
                       .style("height", "100%")
                       .style("width", "100%");
}

function drawStats () {
    var statsBG = d3.select("main").append("svg")
                                   .attr("id", "stats")
	                               .style("display", "block")
                                   .style("height", (PIXEL_SIZE * PIXEL_COUNT).toString() + "px")
                                   .style("width", "100%");

    var stats = statsBG.append("rect")
                       .style("fill", "white")
                       .style("height", "100%")
                       .style("width", "100%");
}

function placeButtons (model) {
    var buttonBG = d3.select("main").append("svg")
                                   .attr("id", "buttons")
                                   .style("height", (PIXEL_SIZE * PIXEL_COUNT).toString() + "px")
                                   .style("width", "180px")
                                   .style("margin-top", PIXEL_SIZE.toString() + "px");

    buttonBG.append("rect")
            .style("fill", "white")
            .style("height", "100%")
            .style("width", "100%");

    var guessButton = buttonBG.append("rect")
                            .style("fill", "lightgrey")
                            .style("stroke", "darkgrey")
                            .attr("y", "112px")
                            .attr("x", "40px")
                            .style("height", "50px")
                            .style("width", "100px")
                            .on("click", getImage)
                            // .on("click", makePrediction(model))
                            .on("mouseover", function () { d3.select(this).style("fill", "grey"); })
                            .on("mousedown", function () { d3.select(this).style("fill", "darkgrey"); })
                            .on("mouseup mouseout", function () { d3.select(this).style("fill", "lightgrey"); });
    
    var resetButton = buttonBG.append("rect")
                            .style("fill", "lightgrey")
                            .style("stroke", "darkgrey")
                            .attr("y", "174px")
                            .attr("x", "40px")
                            .style("height", "50px")
                            .style("width", "100px")
                            .on("click", resetImage)
                            .on("mouseover", function () { d3.select(this).style("fill", "grey"); })
                            .on("mousedown", function () { d3.select(this).style("fill", "darkgrey"); })
                            .on("mouseup mouseout", function () { d3.select(this).style("fill", "lightgrey"); });
}

function getImage () {
    var image = [];

    for (var i = 0; i < PIXEL_COUNT; i++) {
        var row = [];
        
        for (var j = 0; j < PIXEL_COUNT; j++) {
            row.push(
                Number(document.getElementById("pix-" + i.toString() + "-" + j.toString()).getAttribute("value"))
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

function makePrediction (model) {
    console.log('makePrediction()');
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
