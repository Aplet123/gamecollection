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
  .attr("stroke", "#000000")
  .attr("fill", "#ffffff")
  .attr("cx", "0")
  .attr("cy", "0");
defs.selectAll("g.blackuse")
  .data(["king", "guard", "elephant", "knight", "castle", "cannon", "pawn"])
  .enter()
  .append("g")
  .attr("id", function (d) {
    return d + "b";
  })
  .classed("blackuse", true)
  .append("circle")
  .attr("r", "18")
  .attr("stroke-width", "2")
  .attr("stroke", "#000000")
  .attr("fill", "#cccccc")
  .attr("cx", "0")
  .attr("cy", "0");
defs.selectAll("g.blackuse");
defs.select("#king")
  .append("path")
  .attr("d", "M-10 7 L 10 7 M-9 10 L 9 10 C 20 -5, 0 -15, 0 7 M-9 10 C -20 -5, 0 -15, 0 7 M-4 -5 Q 0 -10, 4 -5 M0 -8 L 0 -15 M-3 -12 L 3 -12")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.select("#kingb")
  .append("path")
  .attr("d", "M-10 7 L 10 7 M-9 10 L 9 10 C 20 -5, 0 -15, 0 7 M-9 10 C -20 -5, 0 -15, 0 7 M-4 -5 Q 0 -10, 4 -5 M0 -8 L 0 -15 M-3 -12 L 3 -12")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.select("#guard")
  .append("path")
  .attr("d", "M0 15 C 8 10, 12 -8, 10 -10 Q 7 -7, 0 -10 M-10 -10 Q -7 -7, 0 -10 M0 15 C -8 10, -12 -8, -10 -10 M0 10 L 0 -5 M-6 0 L 6 0")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.select("#guardb")
  .append("path")
  .attr("d", "M0 15 C 8 10, 12 -8, 10 -10 Q 7 -7, 0 -10 M-10 -10 Q -7 -7, 0 -10 M0 15 C -8 10, -12 -8, -10 -10 M0 10 L 0 -5 M-6 0 L 6 0")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.select("#elephant")
  .append("path")
  .attr("d", "M3 5 A 10 10 0 1 0 -3 5 M-3 -1 L -2 15 L 2 15 L 3 -1 M-4 -6 A 1 1 0 1 0 -4.001 -6 M4 -6 A 1 1 0 1 0 3.999 -6")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.select("#elephantb")
  .append("path")
  .attr("d", "M3 5 A 10 10 0 1 0 -3 5 M-3 -1 L -2 15 L 2 15 L 3 -1 M-4 -6 A 1 1 0 1 0 -4.001 -6 M4 -6 A 1 1 0 1 0 3.999 -6")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.select("#knight")
  .append("path")
  .attr("d", "M-5 10 L 10 10 C 10 -8, 8 -8, 0 -10 S -10 -5, -10 0 S -3 4, 0 0 Z M-6 -4 A 1 1 0 1 0 -5.999 -4")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.select("#knightb")
  .append("path")
  .attr("d", "M-5 10 L 10 10 C 10 -8, 8 -8, 0 -10 S -10 -5, -10 0 S -3 4, 0 0 Z M-6 -4 A 1 1 0 1 0 -5.999 -4")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.select("#castle")
  .append("path")
  .attr("d", "M-10 10 L 10 10 L 10 7 L 8 7 L 8 -6 L 11 -6 L 11 -10 L 5 -10 L 5 -8 L 2 -8 L 2 -10 L -2 -10 L -2 -8 L -5 -8 L -5 -10 L -11 -10 L -11 -6 L -8 -6 L -8 7 L -10 7 Z M -8 7 L 8 7 M -8 -5 L 8 -5")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.select("#castleb")
  .append("path")
  .attr("d", "M-10 10 L 10 10 L 10 7 L 8 7 L 8 -6 L 11 -6 L 11 -10 L 5 -10 L 5 -8 L 2 -8 L 2 -10 L -2 -10 L -2 -8 L -5 -8 L -5 -10 L -11 -10 L -11 -6 L -8 -6 L -8 7 L -10 7 Z M -8 7 L 8 7 M -8 -5 L 8 -5")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.select("#pawn")
  .append("path")
  .attr("d", "M2 -4 A 6 6 0 1 0 -2 -4 L -4 7 Q -8 7, -8 11 L 8 11 M2 -4 L 4 7 Q 8 7, 8 11")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.select("#pawnb")
  .append("path")
  .attr("d", "M2 -4 A 6 6 0 1 0 -2 -4 L -4 7 Q -8 7, -8 11 L 8 11 M2 -4 L 4 7 Q 8 7, 8 11")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.select("#cannon")
  .append("path")
  .attr("d", "M3 5 A 3 3 0 1 0 3.001 5 M -7 10 L 9 -2 M -10 6 L 6 -6 M -7 10 L -10 6 M 10 -1 L 5 -7")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.select("#cannonb")
  .append("path")
  .attr("d", "M3 5 A 3 3 0 1 0 3.001 5 M -7 10 L 9 -2 M -10 6 L 6 -6 M -7 10 L -10 6 M 10 -1 L 5 -7")
  .attr("fill", "transparent")
  .attr("stroke", "#000000")
  .attr("stroke-width", "2")
  .attr("stroke-linecap", "round");
defs.append("g")
  .attr("id", "activemove")
  .append("circle")
  .attr("cx", "0")
  .attr("cy", "0")
  .attr("r", "10")
  .attr("opacity", "0.5")
  .attr("fill", "#00ff00");
defs.select("#activemove")
  .append("circle")
  .attr("cx", "0")
  .attr("cy", "0")
  .attr("r", "20")
  .attr("opacity", "0")
  .attr("fill", "#00ff00");
defs.append("g")
  .attr("id", "activetake")
  .append("rect")
  .attr("x", "-18")
  .attr("y", "-18")
  .attr("width", "36")
  .attr("height", "36")
  .attr("opacity", "0.5")
  .attr("fill", "#00ff00");
defs.append("g")
  .attr("id", "inactivemove")
  .append("circle")
  .attr("cx", "0")
  .attr("cy", "0")
  .attr("r", "10")
  .attr("opacity", "0.5")
  .attr("fill", "#aaaaaa");
defs.select("#inactivemove")
  .append("circle")
  .attr("cx", "0")
  .attr("cy", "0")
  .attr("r", "20")
  .attr("opacity", "0")
  .attr("fill", "#aaaaaa");
defs.append("g")
  .attr("id", "inactivetake")
  .append("rect")
  .attr("x", "-18")
  .attr("y", "18")
  .attr("width", "36")
  .attr("height", "36")
  .attr("opacity", "0.5")
  .attr("fill", "#aaaaaa");
var bvs = d3.range(10).map(function () {
  return Array(9);
});
bvs[9][0] = "w";
bvs[9][1] = "w";
bvs[9][2] = "w";
bvs[9][3] = "w";
bvs[9][4] = "w";
bvs[9][5] = "w";
bvs[9][6] = "w";
bvs[9][7] = "w";
bvs[9][8] = "w";
bvs[0][0] = "b";
bvs[0][1] = "b";
bvs[0][2] = "b";
bvs[0][3] = "b";
bvs[0][4] = "b";
bvs[0][5] = "b";
bvs[0][6] = "b";
bvs[0][7] = "b";
bvs[0][8] = "b";
bvs[6][0] = "w";
bvs[6][2] = "w";
bvs[6][4] = "w";
bvs[6][6] = "w";
bvs[6][8] = "w";
bvs[7][1] = "w";
bvs[7][7] = "w";
bvs[3][0] = "b";
bvs[3][2] = "b";
bvs[3][4] = "b";
bvs[3][6] = "b";
bvs[3][8] = "b";
bvs[2][1] = "b";
bvs[2][7] = "b";
var pieceArray = [{
  bx: 9,
  by: 0,
  name: "castle",
  team: "white"
}, {
  bx: 9,
  by: 1,
  name: "knight",
  team: "white"
}, {
  bx: 9,
  by: 2,
  name: "elephant",
  team: "white"
}, {
  bx: 9,
  by: 3,
  name: "guard",
  team: "white"
}, {
  bx: 9,
  by: 4,
  name: "king",
  team: "white"
}, {
  bx: 9,
  by: 5,
  name: "guard",
  team: "white"
}, {
  bx: 9,
  by: 6,
  name: "elephant",
  team: "white"
}, {
  bx: 9,
  by: 7,
  name: "knight",
  team: "white"
}, {
  bx: 9,
  by: 8,
  name: "castle",
  team: "white"
}, {
  bx: 0,
  by: 0,
  name: "castle",
  team: "black"
}, {
  bx: 0,
  by: 1,
  name: "knight",
  team: "black"
}, {
  bx: 0,
  by: 2,
  name: "elephant",
  team: "black"
}, {
  bx: 0,
  by: 3,
  name: "guard",
  team: "black"
}, {
  bx: 0,
  by: 4,
  name: "king",
  team: "black"
}, {
  bx: 0,
  by: 5,
  name: "guard",
  team: "black"
}, {
  bx: 0,
  by: 6,
  name: "elephant",
  team: "black"
}, {
  bx: 0,
  by: 7,
  name: "knight",
  team: "black"
}, {
  bx: 0,
  by: 8,
  name: "castle",
  team: "black"
}, {
  bx: 6,
  by: 0,
  name: "pawn",
  team: "white"
}, {
  bx: 6,
  by: 2,
  name: "pawn",
  team: "white"
}, {
  bx: 6,
  by: 4,
  name: "pawn",
  team: "white"
}, {
  bx: 6,
  by: 6,
  name: "pawn",
  team: "white"
}, {
  bx: 6,
  by: 8,
  name: "pawn",
  team: "white"
}, {
  bx: 7,
  by: 1,
  name: "cannon",
  team: "white"
}, {
  bx: 7,
  by: 7,
  name: "cannon",
  team: "white"
}, {
  bx: 3,
  by: 0,
  name: "pawn",
  team: "black"
}, {
  bx: 3,
  by: 2,
  name: "pawn",
  team: "black"
}, {
  bx: 3,
  by: 4,
  name: "pawn",
  team: "black"
}, {
  bx: 3,
  by: 6,
  name: "pawn",
  team: "black"
}, {
  bx: 3,
  by: 8,
  name: "pawn",
  team: "black"
}, {
  bx: 2,
  by: 1,
  name: "cannon",
  team: "black"
}, {
  bx: 2,
  by: 7,
  name: "cannon",
  team: "black"
}];
function boardLoc (sel) {
  sel.y = sel.bx * 50 + 50;
  sel.x = sel.by * 50 + 50;
}
var notgroup = svg.append("g");
var piecegroup = svg.append("g");
for (var i = 0; i < pieceArray.length; i ++) {
  pieceArray[i].game = {};
  boardLoc(pieceArray[i]);
  pieceArray[i].node = piecegroup.append("use")
    .attr("href", "#" + pieceArray[i].name + (pieceArray[i].team == "black" ? "b" : ""))
    .classed("curpiece", true)
    .datum(pieceArray[i])
    .attr("transform", "translate(" + pieceArray[i].x + " " + pieceArray[i].y + ")");
}
var curSelected = null;
var curUp = null;
function updatePieces () {
  for (var i = 0; i < pieceArray.length; i ++) {
    pieceArray[i].node.attr("transform", "translate(" + pieceArray[i].x + " " + pieceArray[i].y + ")");
  }
}
var curTurn = "white";
function setMove (use) {
  var dt = curSelected.datum();
  use.on("mouseup", function () {
    bvs[dt.bx][dt.by] = undefined;
    dt.bx = d3.select(this).datum().bx;
    dt.by = d3.select(this).datum().by;
    bvs[dt.bx][dt.by] = dt.team[0];
    boardLoc(dt);
    if (curTurn == "white") {
      //curTurn = "black";
    } else {
      curTurn = "white";
    }
  })
  .on("mousedown", function () {
    bvs[dt.bx][dt.by] = undefined;
    dt.bx = d3.select(this).datum().bx;
    dt.by = d3.select(this).datum().by;
    bvs[dt.bx][dt.by] = dt.team[0];
    boardLoc(dt);
    if (curTurn == "white") {
      //curTurn = "black";
    } else {
      curTurn = "white";
    }
  });
  return use;
}
function calculateMoves () {
  notgroup.selectAll("*").remove();
  if (curSelected) {
    var dt = curSelected.datum();
    if (curTurn != dt.team) {
      return calculatePremoves();
    }
    if (dt.name == "pawn" && dt.team == "white") {
      var theType = "#activemove";
      if (bvs[dt.bx - 1][dt.by] == "b") {
        theType = "#activetake";
      } else if (bvs[dt.bx - 1][dt.by] == "w") {
        theType = "none";
      }
      if (theType != "none") {
        setMove(notgroup.append("use"))
          .attr("href", theType)
          .attr("transform", "translate(" + (dt.by * 50 + 50) + " " + (dt.bx * 50) + ")")
          .datum({
            bx: dt.bx - 1,
            by: dt.by,
            x: dt.by * 50 + 50,
            y: dt.bx * 50
          });
      }
    }
  }
}

function calculatePremoves () {
  
}
var mouseX = 0;
var mouseY = 0;
svg.on("mousemove", function () {
  var cords = d3.mouse(this);
  mouseX = cords[0];
  mouseY = cords[1];
});
svg.selectAll("use.curpiece").on("mousedown", function () {
  if (d3.event.button == 0) {
    curUp = d3.select(this).raise();
    curSelected = curUp;
    curUp.style("pointer-events", "none");
    calculateMoves();
    d3.event.stopPropagation();
  }
});
svg.on("mouseup", function () {
  if (d3.event.button == 0 && curUp) {
    boardLoc(curUp.datum());
    curUp.style("pointer-events", "all");
    curUp = null;
    d3.event.stopPropagation();
  }
});
svg.on("mousedown", function () {
  curSelected = null;
  calculateMoves();
});
setInterval(function () {
  if (curUp) {
    curUp.datum().x = mouseX;
    curUp.datum().y = mouseY;
  }
  updatePieces();
}, 1);