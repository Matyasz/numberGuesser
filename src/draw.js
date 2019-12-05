import * as d3 from 'd3';

/* IDEA: 1) make 28*28 small white squares into a square                      - DONE
         2) give each an "id#" of sorts, from 0 to 28*28 - 1                  -
         3) make an array of length 28*28, all 0s
         4) whenever a mouse click happpens over one of the squares, 
            change it to black and change the array index
            corresponding to that square's "id#" to a 1
         5) unless the square is already black, then change back to white/0
*/

function drawCanvas (gridSize, pixelSize) {
    // Make the background
    var gridBG = d3.select("main").append("svg")
                                .attr("id", "grid")
                                .attr("height", (pixelSize * gridSize).toString() + "px")
                                .attr("width", (pixelSize * gridSize).toString() + "px")
                                .style("padding", pixelSize.toString())
                                .style("float", "left");
    
    // Fill the svg with all of the pixels for drawing
    for (var i = 0; i < gridSize; i++){
        for (var j = 0; j < gridSize; j++){
            var pixel = gridBG.append("rect")
                            .style("fill", "white")
                            .attr("position", "relative")
                            .attr("y", (pixelSize * i).toString() + "px")
                            .attr("x", (pixelSize * j).toString() + "px")
                            .attr("height", pixelSize.toString() + "px")
                            .attr("width", pixelSize.toString() + "px")
                            .attr("value", 0)
                            .attr("id", i.toString() + "-" + j.toString())
                            .on("mouseup mouseout mousedown mouseover", colorSwitch);
        }
    }
}

function drawGuess (gridSize, pixelSize) {
    var guessBG = d3.select("main").append("svg")
                                .attr("id", "guess")
                                .attr("height", (pixelSize * gridSize).toString() + "px")
                                .attr("width", (pixelSize * gridSize).toString() + "px")
                                .style("margin-right", "0px")
                                .style("padding", pixelSize.toString())
                                .style("float", "right");

    var guess = guessBG.append("rect")
                    .style("fill", "white")
                    .style("height", "100%")
                    .style("width", "100%");
}

function drawStats (gridSize, pixelSize) {
    var statsBG = d3.select("main").append("svg")
                                .attr("id", "stats")
                                .attr("height", (pixelSize * gridSize).toString() + "px")
                                .attr("width", "100%")
                                .style("padding", "0px " + pixelSize.toString() + "px " + pixelSize.toString() + "px " + pixelSize.toString() + "px");
                                // .style("float", "center");

    var stats = statsBG.append("rect")
                    .style("fill", "white")
                    .style("height", "100%")
                    .style("width", "100%");
}

var colorSwitch = (function (){
    var pixelColor = "white";
    var value = 0;

    return function (){
        pixelColor = pixelColor == "white" ? "black" : "white";
        value = value == 0 ? 1 : 0;

        d3.select(this).style("fill", pixelColor);
        d3.select(this).attr("value", value);
    }
})();

export {drawCanvas, drawGuess, drawStats};