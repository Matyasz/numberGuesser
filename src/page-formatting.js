import * as d3 from 'd3';

function formatPage (headerText, footerText) {
    // Set some basic styling
    var html = document.getElementsByTagName("html")[0]
    html.style.fontSize = "10px";
    html.style.fontFamily = "'Open Sans', sans-serif";
    html.style.height = "100%"

    document.body.style.backgroundColor = "lightsteelblue";
    document.body.style.marginLeft = "auto";
    document.body.style.marginRight = "auto";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.position = "absolute";
    document.body.style.height = "100%";
    document.body.style.width = "900px";

    // Create the header
    var header = document.createElement('header');
    document.body.appendChild(header);
    addHeaderText(headerText);

    // Create the main body element and its content
    var main = document.createElement('main');

    main.style.backgroundColor = "black";
    main.style.opacity = "0.4";
    main.style.margin = "10px auto";
    main.style.color = "white";
    main.style.height = "540px";
    main.style.width = "100%";

    document.body.appendChild(main);

    // Create the footer
    var foot = document.createElement('footer');
    document.body.appendChild(foot);
    addFooterText(footerText);

    // Background pattern
    makeCirclePattern();
}

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
                     .style('width', "100%")
                     .style("height", "150px")
                     .style("background-color", "black")
                     .style("opacity", "0.7")
                     .style("margin", "0 auto")
                     .style("height", "150px")
                     .style("width", "100%");

    head_content.append("text")
                .attr('x', '10%')
                .attr('y', '90%')
                .attr('font-family', 'Verdana')
                .attr('font-size', '25')
                .style('fill', 'white')
                .style('stroke', 'black')
                .attr('stroke-width', '0.1')
                .text(txt);
}

function addFooterText (txt) {
    var foot_content = d3.select("footer")
                     .append("svg")
                     .style("width", "100%")
                     .style("height", "30px")
                     .style("opacity", "0.7")
                     .style("color", "white")
                     .style("margin", "0 auto")
                     .style("background-color", "black")
                     .style("text-align", "center");

    foot_content.append("text")
                .attr('x', '50%')
                .attr('y', '50%')
                .attr('font-family', 'Verdana')
                .attr('font-size', '12')
                .style('fill', 'white')
                .style('text-anchor', 'middle')
                .style('alignment-baseline', 'middle')
                .text(txt);
}

export {formatPage};