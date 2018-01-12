var width = 500;
var height = 550;
var svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
var board = svg.append("g");
var gridLengths = d3.range(9).map(function (v, i) {
  return i * 50 + 50;
});
board.selectAll("line.column")
  .data(gridLengths)
  .enter()
  .append("line")
  .classed("column", true)
  .attr("x1", function (d) {
    return d;
  })
  .attr("y1", "50")
  .attr("x2", function (d) {
    return d;
  })
  .attr("y2", "500")
  .attr("stroke-width", function (d, i) {
    if (i == 0 || i == 8) {
      return 4;
    }
    return 2;
  })
  .attr("stroke", "#000000")
  .attr("stroke-dasharray", function (d, i) {
    if (i == 0 || i == 8) {
      return "500 0";
    }
    return "200 50 200";
  });
gridLengths.push(500);
board.selectAll("line.row")
  .data(gridLengths)
  .enter()
  .append("line")
  .classed("row", true)
  .attr("y1", function (d) {
    return d;
  })
  .attr("x1", "50")
  .attr("y2", function (d) {
    return d;
  })
  .attr("x2", "450")
  .attr("stroke-width", function (d, i) {
    if (i == 0 || i == 9) {
      return 4;
    }
    return 2;
  })
  .attr("stroke", "#000000");
board.selectAll("line.diagonal")
  .data([{
    x1: 200,
    y1: 50,
    x2: 300,
    y2: 150
  }, {
    x1: 300,
    y1: 50,
    x2: 200,
    y2: 150
  }, {
    x1: 200,
    y1: 400,
    x2: 300,
    y2: 500
  }, {
    x1: 200,
    y1: 500,
    x2: 300,
    y2: 400
  }])
  .enter()
  .append("line")
  .classed("row", true)
  .attr("x1", function (d) {
    return d.x1;
  })
  .attr("y1", function (d) {
    return d.y1;
  })
  .attr("x2", function (d) {
    return d.x2;
  })
  .attr("y2", function (d) {
    return d.y2;
  })
  .attr("stroke-width", "2")
  .attr("stroke", "#000000");