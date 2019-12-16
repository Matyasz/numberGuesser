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
    for (var i = 0; i < gridSize; i++){
        for (var j = 0; j < gridSize; j++){
            var pixel = gridBG.append("rect")
                              .style("fill", "white")
                              .attr("position", "relative")
                              .attr("y", (pixelSize * i).toString() + "px")
                              .attr("x", (pixelSize * j).toString() + "px")
                              .style("height", pixelSize.toString() + "px")
                              .style("width", pixelSize.toString() + "px")
                              .attr("value", 0)
                              .attr("id", i.toString() + "-" + j.toString())
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

export {drawCanvas, drawGuess, drawStats};
