import * as d3 from 'd3';

function makeCirclePattern () {
    const MAX_CIRCLES = 15;
    const MIN_CIRCLES = 5;
    var numOfCircles = Math.floor(
        (Math.random() * (MAX_CIRCLES - MIN_CIRCLES)) + MIN_CIRCLES);

    // Make the svg object
    var svg = d3.select("html").append("svg")
                                .attr("position", "relative")
                                .attr("z-index", -1)
                                .attr("height", "100%")
                                .attr("width", "100%")
                                .attr("max-width", "800px");

    // Now randomly generate the circles and add them to the svg
    for (var i = 0; i < numOfCircles; i++) {
        var circle = svg.append("circle")
                        .attr("cx", Math.floor((Math.random() * 100) + 1).toString() + "%")
                        .attr("cy", Math.floor((Math.random() * 100) + 1).toString() + "%")
                        .attr("r", Math.floor((Math.random() * 100) + 50).toString())
                        .style("fill", "steelblue")
                        .style("opacity", 0.8);
    }
}

function addHeaderText (txt) {
    var head_content = d3.select("header")
                     .append("svg")
                     .attr('id', 'banner');

    head_content.append("text")
                .attr('x', '10%')
                .attr('y', '90%')
                .attr('font-family', 'Verdana')
                .attr('font-size', '25')
                .style('fill', 'white')
                .style('stroke', 'black')
                .attr('stroke-width', '0.5')
                .text(txt);
}

export {makeCirclePattern, addHeaderText};