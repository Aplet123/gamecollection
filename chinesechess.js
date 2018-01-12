var width = 500;
var height = 550;
var svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
var defs = svg.append("defs");
var board = svg.append("g");
var gridLengths = d3.range(9).map(function (v, i) {
  return i * 50 + 50;
});
board.selectAll("line.column")
  .data(gridLengths)
  .enter()
  .append("line")
  .classed("column", true)
  .classed("edge", function (d, i) {
    if (i == 0 || i == 8) {
      return true;
    }
    return false;
  })
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
  })
  .attr("stroke-linecap", function (d, i) {
    if (i == 0 || i == 8) {
      return "square";
    }
    return "butt";
  });
gridLengths.push(500);
board.selectAll("line.row")
  .data(gridLengths)
  .enter()
  .append("line")
  .classed("row", true)
  .classed("edge", function (d, i) {
    if (i == 0 || i == 9) {
      return true;
    }
    return false;
  })
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
  .attr("stroke", "#000000")
  .attr("stroke-linecap", function (d, i) {
    if (i == 0 || i == 9) {
      return "square";
    }
    return "butt";
  });
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
  .classed("diagonal", true)
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
defs.append("filter")
  .attr("id", "invert")
  .append("feComponentTransfer")
  .attr("in", "SourceGraphic")
  .selectAll(".invertfunc")
  .data(["R", "G", "B"])
  .enter()
  .append(function (d) {
    return d3.creator("feFunc" + d).call(this);
  })
  .classed("invertfunc", true)
  .attr("type", "linear")
  .attr("slope", "-1")
  .attr("intercept", "1");
defs.selectAll("g.whiteuse")
  .data(["king", "guard", "elephant", "knight", "castle", "cannon", "pawn"])
  .enter()
  .append("g")
  .attr("id", function (d) {
    return d;
  })
  .classed("whiteuse", true)
  .append("circle")
  .attr("r", "18")
  .attr("stroke-width", "2")
  .attr("stroke", "#ff0000")
  .attr("fill", "#ffffff");
defs.selectAll("g.blackuse")
  .data(["king", "guard", "elephant", "knight", "castle", "cannon", "pawn"])
  .enter()
  .append("g")
  .attr("id", function (d) {
    return d + "b";
  })
  .classed("blackuse", true)
  .append("use")
  .attr("href", function (d) {
    return "#" + d;
  })
  .attr("filter", function (d) {
    return "url(#" + d + ")";
  });
defs.select("#king")
  .append("path")
  .attr("d", "");
var bvs = d3.range(10).map(function () {
  return Array(9);
});
bvs[9][0] = "castle";
bvs[9][1] = "knight";
bvs[9][2] = "elephant";
bvs[9][3] = "guard";
bvs[9][4] = "king";
bvs[9][5] = "guard";
bvs[9][6] = "elephant";
bvs[9][7] = "knight";
bvs[9][8] = "castle";
bvs[0][0] = "castleb";
bvs[0][1] = "knightb";
bvs[0][2] = "elephantb";
bvs[0][3] = "guardb";
bvs[0][4] = "kingb";
bvs[0][5] = "guardb";
bvs[0][6] = "elephantb";
bvs[0][7] = "knightb";
bvs[0][8] = "castleb";
svg.append("use")
  .attr("href", "#king")
  .attr("transform", "translate(100 100)");
