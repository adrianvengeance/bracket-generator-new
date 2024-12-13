let title = document.getElementById("title");
let athletes = document.getElementById("athletes");
let shuffle = document.getElementById("shuffle");
let btn = document.getElementById("create");
let btnCount = 0;

// window.onbeforeunload = function() {
//   return "Data will be lost if you leave or refresh the page, are you sure?";
// };

$(function () {
  $(".allBagan").sortable({
    cancel: "text, .partai, h6",
  });
});

btn.addEventListener("click", function () {
  if (!title.value || !athletes.value) {
    return;
  }

  let newArr;

  if (!shuffle.checked) {
    newArr = athletes.value.replace(/\r\n/g, "\n").split("\n");
  } else {
    newArr = randomize(athletes.value.replace(/\r\n/g, "\n").split("\n"));
  }

  drawing(btnCount, title.value, newArr);

  title.value = "";
  athletes.value = "";
  shuffle.checked = false;
  btnCount++;
});

function drawing(btn, title, arr) {
  switch (arr.length) {
    case 1:
      drawTitle(btn, title, arr); //write "space" in title and number in participants to multiply to 20 for div height
      break;
    case 2:
      drawTwo(btn, title, arr);
      break;
    case 3:
      drawThree(btn, title, arr);
      break;
    case 4:
      drawFour(btn, title, arr);
      break;
    case 5:
      drawFive(btn, title, arr);
      break;
    case 6:
      drawSix(btn, title, arr);
      break;
    case 7:
      drawSeven(btn, title, arr);
      break;
    case 8:
      drawEight(btn, title, arr);
      break;
    case 9:
      drawNine(btn, title, arr);
      break;
    case 10:
      drawTen(btn, title, arr);
      break;
    case 11:
      drawEleven(btn, title, arr);
      break;
    case 12:
      drawTwelve(btn, title, arr);
      break;
    case 13:
      drawThirteen(btn, title, arr);
      break;
    default:
      alert("Batas maksimal 13");
      break;
  }
}

function randomize(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createBaganRow(btn, title, height) {
  let allBagan = document.querySelector(".allBagan");
  let row = document.createElement("div");
  row.classList.add("row", "mt-2", "bagan", `baganRow${btn}`);
  row.setAttribute("contentEditable", "true");
  row.spellcheck = false;
  row.style.height = height;

  let col11 = document.createElement("div");
  col11.classList.add("col-11", `bagan-${btn}`);
  col11.style.height = height;

  let col1 = document.createElement("div");
  col1.classList.add("col-1");
  col1.style.height = height;

  let input = document.createElement("input");
  input.classList.add("btn", "d-inline", "me-auto");
  input.type = "button";
  input.style.width = "10px";
  input.style.height = "18px";
  input.setAttribute("onclick", `deleteBagan('baganRow${btn}')`);

  let titleText = document.createElement("h6");
  titleText.innerHTML = title;
  titleText.classList.add("h6", "fw-semibold", "mb-0");

  allBagan.append(row);
  row.append(col11, col1);
  col11.append(titleText);
  col1.append(input);
}

function deleteBagan(idRow) {
  let row = document.querySelector(`.${idRow}`);
  row.remove();
}

function drawTitle(btn, title, arr) {
  let height, num;
  if (title == "space") {
    num = arr * 20;
  } else {
    num = 20;
  }
  height = num + "px";
  createBaganRow(btn, title, height);
}

function drawTwo(btn, title, arr) {
  let height = "112px";
  createBaganRow(btn, title, height);

  let draw = SVG()
    .addTo(`.bagan-${btn}`)
    .attr({
      id: `bagan-${btn}`,
      width: 370,
      height: 92,
    });
  draw.rect(250, 20).radius(3).attr({
    //first box
    x: 20,
    y: 10,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    //second box
    x: 20,
    y: 60,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.text(arr[0]).font({
    //first box name
    x: 24,
    y: 25,
    fill: "black",
    size: 12,
  });
  draw.text(arr[1]).font({
    //second box name
    x: 24,
    y: 75,
    fill: "black",
    size: 12,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 20).stroke({
    //first box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 45).stroke({
    //second box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 30,0").fill("none").move(310, 45).stroke({
    //champion bracket
    color: "gold",
    width: 2,
  });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 35).stroke({
    //round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      //round text
      x: 297,
      y: 47,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
}

function drawThree(btn, title, arr) {
  let height = "162px";
  createBaganRow(btn, title, height);

  let draw = SVG()
    .addTo(`.bagan-${btn}`)
    .attr({
      id: `bagan-${btn}`,
      width: 400,
      height: 142,
    });
  draw.rect(250, 20).radius(3).attr({
    //first box
    x: 20,
    y: 10,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    //second box
    x: 20,
    y: 60,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    //third box
    x: 20,
    y: 110,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.text(arr[0]).font({
    //first box name
    x: 24,
    y: 25,
    fill: "black",
    size: 12,
  });
  draw.text(arr[1]).font({
    //second box name
    x: 24,
    y: 75,
    fill: "black",
    size: 12,
  });
  draw.text(arr[2]).font({
    //third box name
    x: 24,
    y: 125,
    fill: "black",
    size: 12,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 20).stroke({
    //first box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 45).stroke({
    //second box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,40").fill("none").move(310, 45).stroke({
    //first-second bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,35 80,35 80,0").fill("none").move(270, 85).stroke({
    //third box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 30,0").fill("none").move(350, 85).stroke({
    //champion bracket
    color: "gold",
    width: 2,
  });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 35).stroke({
    //first round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      //round text
      x: 297,
      y: 47,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 75).stroke({
    //champion round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      //champion round text
      x: 337,
      y: 87,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
}

function drawFour(btn, title, arr) {
  let height = "212px";
  createBaganRow(btn, title, height);

  let draw = SVG()
    .addTo(`.bagan-${btn}`)
    .attr({
      id: `bagan-${btn}`,
      width: 400,
      height: 192,
    });
  draw.rect(250, 20).radius(3).attr({
    // first box
    x: 20,
    y: 10,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // second box
    x: 20,
    y: 60,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // third box
    x: 20,
    y: 110,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fourth box
    x: 20,
    y: 160,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.text(arr[0]).font({
    // first box name
    x: 24,
    y: 25,
    fill: "black",
    size: 12,
  });
  draw.text(arr[1]).font({
    // second box name
    x: 24,
    y: 75,
    fill: "black",
    size: 12,
  });
  draw.text(arr[2]).font({
    // third box name
    x: 24,
    y: 125,
    fill: "black",
    size: 12,
  });
  draw.text(arr[3]).font({
    // fourth box name
    x: 24,
    y: 175,
    fill: "black",
    size: 12,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 20).stroke({
    // first box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 45).stroke({
    // second box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 120).stroke({
    // third box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 145).stroke({
    // fourth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,50").fill("none").move(310, 45).stroke({
    // first-second bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,145 40,145 40,95").fill("none").move(310, 95).stroke({
    // third-fourth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 30,0").fill("none").move(350, 95).stroke({
    // champion bracket
    color: "gold",
    width: 2,
  });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 35).stroke({
    // first round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // first round text
      x: 297,
      y: 47,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 135).stroke({
    // second round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // second round text
      x: 297,
      y: 147,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 85).stroke({
    // final round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // final round text
      x: 337,
      y: 97,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
}

function drawFive(btn, title, arr) {
  let height = "262px";
  createBaganRow(btn, title, height);

  let draw = SVG()
    .addTo(`.bagan-${btn}`)
    .attr({
      id: `bagan-${btn}`,
      width: 440,
      height: 242,
    });
  draw.rect(250, 20).radius(3).attr({
    // first box
    x: 20,
    y: 10,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // second box
    x: 20,
    y: 60,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // third box
    x: 20,
    y: 110,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fourth box
    x: 20,
    y: 160,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fifth box
    x: 20,
    y: 210,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.text(arr[0]).font({
    // first box name
    x: 24,
    y: 25,
    fill: "black",
    size: 12,
  });
  draw.text(arr[1]).font({
    // second box name
    x: 24,
    y: 75,
    fill: "black",
    size: 12,
  });
  draw.text(arr[2]).font({
    // third box name
    x: 24,
    y: 125,
    fill: "black",
    size: 12,
  });
  draw.text(arr[3]).font({
    // fourth box name
    x: 24,
    y: 175,
    fill: "black",
    size: 12,
  });
  draw.text(arr[4]).font({
    // fifth box name
    x: 24,
    y: 225,
    fill: "black",
    size: 12,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 20).stroke({
    // first box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 45).stroke({
    // second box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 170).stroke({
    // fourth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,240 290,240 290,215").fill("none").move(270, 195).stroke({
    // fifth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,40").fill("none").move(310, 45).stroke({
    // first-second bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,35 80,35 80,0").fill("none").move(270, 85).stroke({
    // third box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,60").fill("none").move(350, 85).stroke({
    // first-third bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,195 80,195 80,145").fill("none").move(310, 145).stroke({
    // fourth-fifth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 30,0").fill("none").move(390, 145).stroke({
    // champion bracket
    color: "gold",
    width: 2,
  });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 35).stroke({
    // first round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // first round text
      x: 297,
      y: 47,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 185).stroke({
    // second round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // second round text
      x: 297,
      y: 197,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 75).stroke({
    // third round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // third round text
      x: 337,
      y: 87,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(364, 135).stroke({
    // final round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // final round text
      x: 377,
      y: 147,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
}

function drawSix(btn, title, arr) {
  let height = "302px";
  createBaganRow(btn, title, height);

  let draw = SVG()
    .addTo(`.bagan-${btn}`)
    .attr({
      id: `bagan-${btn}`,
      width: 440,
      height: 292,
    });
  draw.rect(250, 20).radius(3).attr({
    // first box
    x: 20,
    y: 10,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // second box
    x: 20,
    y: 60,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // third box
    x: 20,
    y: 110,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fourth box
    x: 20,
    y: 160,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fifth box
    x: 20,
    y: 210,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // sixth box
    x: 20,
    y: 260,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.text(arr[0]).font({
    // first box name
    x: 24,
    y: 25,
    fill: "black",
    size: 12,
  });
  draw.text(arr[1]).font({
    // second box name
    x: 24,
    y: 75,
    fill: "black",
    size: 12,
  });
  draw.text(arr[2]).font({
    // third box name
    x: 24,
    y: 125,
    fill: "black",
    size: 12,
  });
  draw.text(arr[3]).font({
    // fourth box name
    x: 24,
    y: 175,
    fill: "black",
    size: 12,
  });
  draw.text(arr[4]).font({
    // fifth box name
    x: 24,
    y: 225,
    fill: "black",
    size: 12,
  });
  draw.text(arr[5]).font({
    // sixth box name
    x: 24,
    y: 275,
    fill: "black",
    size: 12,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 20).stroke({
    // first box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 45).stroke({
    // second box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 220).stroke({
    // fifth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,240 290,240 290,215").fill("none").move(270, 245).stroke({
    // sixth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,40").fill("none").move(310, 45).stroke({
    // first-second bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,35 80,35 80,0").fill("none").move(270, 85).stroke({
    // third box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,60").fill("none").move(350, 85).stroke({
    // first-third bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,0 80 ,0 80 ,35").fill("none").move(270, 170).stroke({
    // fourth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,195 40,195 40,155").fill("none").move(310, 205).stroke({
    // fifth-sixth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,60 40,60 40,0").fill("none").move(350, 145).stroke({
    // fourth-sixth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 30,0").fill("none").move(390, 145).stroke({
    // champion bracket
    color: "gold",
    width: 2,
  });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 35).stroke({
    // first round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // first round text
      x: 297,
      y: 47,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 235).stroke({
    // second round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // second round text
      x: 297,
      y: 247,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 75).stroke({
    // third round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // third round text
      x: 337,
      y: 87,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 195).stroke({
    // fourth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // fourth round text
      x: 337,
      y: 207,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(364, 135).stroke({
    // final round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // final round text
      x: 377,
      y: 147,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
}

function drawSeven(btn, title, arr) {
  let height = "362px";
  createBaganRow(btn, title, height);

  let draw = SVG()
    .addTo(`.bagan-${btn}`)
    .attr({
      id: `bagan-${btn}`,
      width: 440,
      height: 342,
    });
  draw.rect(250, 20).radius(3).attr({
    // first box
    x: 20,
    y: 10,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // second box
    x: 20,
    y: 60,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // third box
    x: 20,
    y: 110,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fourth box
    x: 20,
    y: 160,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fifth box
    x: 20,
    y: 210,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // sixth box
    x: 20,
    y: 260,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // seventh box
    x: 20,
    y: 310,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.text(arr[0]).font({
    // first box name
    x: 24,
    y: 25,
    fill: "black",
    size: 12,
  });
  draw.text(arr[1]).font({
    // second box name
    x: 24,
    y: 75,
    fill: "black",
    size: 12,
  });
  draw.text(arr[2]).font({
    // third box name
    x: 24,
    y: 125,
    fill: "black",
    size: 12,
  });
  draw.text(arr[3]).font({
    // fourth box name
    x: 24,
    y: 175,
    fill: "black",
    size: 12,
  });
  draw.text(arr[4]).font({
    // fifth box name
    x: 24,
    y: 225,
    fill: "black",
    size: 12,
  });
  draw.text(arr[5]).font({
    // sixth box name
    x: 24,
    y: 275,
    fill: "black",
    size: 12,
  });
  draw.text(arr[6]).font({
    // seventh box name
    x: 24,
    y: 325,
    fill: "black",
    size: 12,
  });
  draw.polyline("0,0 80,0 80,35").fill("none").move(270, 20).stroke({
    // first box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 70).stroke({
    // second box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,240 290,240 290,215").fill("none").move(270, 95).stroke({
    // third box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,195 40,195 40,155").fill("none").move(310, 55).stroke({
    // second-third bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 170).stroke({
    // fourth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 195).stroke({
    // fifth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 270).stroke({
    // sixth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 295).stroke({
    // seventh box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,50").fill("none").move(310, 195).stroke({
    // fourth-fifth bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,145 40,145 40,95").fill("none").move(310, 245).stroke({
    // sixth-seventh bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,90").fill("none").move(350, 55).stroke({
    // upper final bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,275 40,275 40,175").fill("none").move(350, 145).stroke({
    // lower final bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 30,0").fill("none").move(390, 145).stroke({
    // champion bracket
    color: "gold",
    width: 2,
  });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 85).stroke({
    // first round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // first round text
      x: 297,
      y: 97,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 45).stroke({
    // fourth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // fourth round text
      x: 337,
      y: 57,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 185).stroke({
    // second round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // second round text
      x: 297,
      y: 197,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 285).stroke({
    // third round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // third round text
      x: 297,
      y: 297,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 235).stroke({
    // fifth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // fifth round text
      x: 337,
      y: 247,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(364, 135).stroke({
    // final round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // final round text
      x: 377,
      y: 147,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
}

function drawEight(btn, title, arr) {
  let height = "412px";
  createBaganRow(btn, title, height);

  let draw = SVG()
    .addTo(`.bagan-${btn}`)
    .attr({
      id: `bagan-${btn}`,
      width: 440,
      height: 392,
    });
  draw.rect(250, 20).radius(3).attr({
    // first box
    x: 20,
    y: 10,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // second box
    x: 20,
    y: 60,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // third box
    x: 20,
    y: 110,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fourth box
    x: 20,
    y: 160,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fifth box
    x: 20,
    y: 210,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // sixth box
    x: 20,
    y: 260,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // seventh box
    x: 20,
    y: 310,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // eighth box
    x: 20,
    y: 360,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.text(arr[0]).font({
    // first box name
    x: 24,
    y: 25,
    fill: "black",
    size: 12,
  });
  draw.text(arr[1]).font({
    // second box name
    x: 24,
    y: 75,
    fill: "black",
    size: 12,
  });
  draw.text(arr[2]).font({
    // third box name
    x: 24,
    y: 125,
    fill: "black",
    size: 12,
  });
  draw.text(arr[3]).font({
    // fourth box name
    x: 24,
    y: 175,
    fill: "black",
    size: 12,
  });
  draw.text(arr[4]).font({
    // fifth box name
    x: 24,
    y: 225,
    fill: "black",
    size: 12,
  });
  draw.text(arr[5]).font({
    // sixth box name
    x: 24,
    y: 275,
    fill: "black",
    size: 12,
  });
  draw.text(arr[6]).font({
    // seventh box name
    x: 24,
    y: 325,
    fill: "black",
    size: 12,
  });
  draw.text(arr[7]).font({
    // eighth box name
    x: 24,
    y: 375,
    fill: "black",
    size: 12,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 20).stroke({
    // first box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 45).stroke({
    // second box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 120).stroke({
    // third box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 145).stroke({
    // fourth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 220).stroke({
    // fifth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 245).stroke({
    // sixth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 320).stroke({
    // seventh box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 345).stroke({
    // eighth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,50").fill("none").move(310, 45).stroke({
    // first-second bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,145 40,145 40,95").fill("none").move(310, 95).stroke({
    // third-fourth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,50").fill("none").move(310, 245).stroke({
    // fifth-sixth bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,145 40,145 40,95").fill("none").move(310, 295).stroke({
    // seventh-eighth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,100").fill("none").move(350, 95).stroke({
    // firsth-fourth bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,295 40,295 40,195").fill("none").move(350, 195).stroke({
    // fifth-eighth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 30,0").fill("none").move(390, 195).stroke({
    // champion bracket
    color: "gold",
    width: 2,
  });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 35).stroke({
    // first round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // first round text
      x: 297,
      y: 47,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 135).stroke({
    // second round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // second round text
      x: 297,
      y: 147,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 235).stroke({
    // third round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // third round text
      x: 297,
      y: 247,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 335).stroke({
    // fourth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // fourth round text
      x: 297,
      y: 347,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 85).stroke({
    // fifth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // fifth round text
      x: 337,
      y: 97,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 285).stroke({
    // sixth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // sixth round text
      x: 337,
      y: 297,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(364, 185).stroke({
    // final round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // final round text
      x: 377,
      y: 197,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
}

function drawNine(btn, title, arr) {
  let height = "462px";
  createBaganRow(btn, title, height);

  let draw = SVG()
    .addTo(`.bagan-${btn}`)
    .attr({
      id: `bagan-${btn}`,
      width: 480,
      height: 442,
    });
  draw.rect(250, 20).radius(3).attr({
    // first box
    x: 20,
    y: 10,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // second box
    x: 20,
    y: 60,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // third box
    x: 20,
    y: 110,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fourth box
    x: 20,
    y: 160,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fifth box
    x: 20,
    y: 210,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // sixth box
    x: 20,
    y: 260,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // seventh box
    x: 20,
    y: 310,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // eighth box
    x: 20,
    y: 360,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // nineth box
    x: 20,
    y: 410,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.text(arr[0]).font({
    // first box name
    x: 24,
    y: 25,
    fill: "black",
    size: 12,
  });
  draw.text(arr[1]).font({
    // second box name
    x: 24,
    y: 75,
    fill: "black",
    size: 12,
  });
  draw.text(arr[2]).font({
    // third box name
    x: 24,
    y: 125,
    fill: "black",
    size: 12,
  });
  draw.text(arr[3]).font({
    // fourth box name
    x: 24,
    y: 175,
    fill: "black",
    size: 12,
  });
  draw.text(arr[4]).font({
    // fifth box name
    x: 24,
    y: 225,
    fill: "black",
    size: 12,
  });
  draw.text(arr[5]).font({
    // sixth box name
    x: 24,
    y: 275,
    fill: "black",
    size: 12,
  });
  draw.text(arr[6]).font({
    // seventh box name
    x: 24,
    y: 325,
    fill: "black",
    size: 12,
  });
  draw.text(arr[7]).font({
    // eighth box name
    x: 24,
    y: 375,
    fill: "black",
    size: 12,
  });
  draw.text(arr[8]).font({
    // nineth box name
    x: 24,
    y: 425,
    fill: "black",
    size: 12,
  });
  draw.polyline("0,0 80,0 80,35").fill("none").move(270, 20).stroke({
    // first box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 70).stroke({
    // second box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,240 290,240 290,215").fill("none").move(270, 95).stroke({
    // third box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,195 40,195 40,155").fill("none").move(310, 55).stroke({
    // second-third bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,70").fill("none").move(350, 55).stroke({
    // first-third bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 170).stroke({
    // fourth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,240 290,240 290,215").fill("none").move(270, 195).stroke({
    // fifth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,195 80,195 80,125").fill("none").move(310, 125).stroke({
    // fourth-fifth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 270).stroke({
    // sixth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 295).stroke({
    // seventh box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 370).stroke({
    // eighth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 395).stroke({
    // nineth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,50").fill("none").move(310, 295).stroke({
    // sixth-seventh bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,145 40,145 40,95").fill("none").move(310, 345).stroke({
    // eighth-nineth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,120").fill("none").move(390, 125).stroke({
    // firsth-fifth bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,100 80,100 80,0").fill("none").move(350, 245).stroke({
    // sixth-nineth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 30,0").fill("none").move(430, 245).stroke({
    // champion bracket
    color: "gold",
    width: 2,
  });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(404, 235).stroke({
    // champion round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // champion round text
      x: 417,
      y: 247,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 85).stroke({
    // first round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // first round text
      x: 297,
      y: 97,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 185).stroke({
    // second round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // second round text
      x: 297,
      y: 197,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 285).stroke({
    // third round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // third round text
      x: 297,
      y: 297,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 385).stroke({
    // fourth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // fourth round text
      x: 297,
      y: 397,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 45).stroke({
    // fifth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // fifth round text
      x: 337,
      y: 57,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 335).stroke({
    // sixth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // sixth round text
      x: 337,
      y: 347,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(364, 115).stroke({
    // seventh round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // seventh round text
      x: 377,
      y: 127,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
}

function drawTen(btn, title, arr) {
  let height = "512px";
  createBaganRow(btn, title, height);

  let draw = SVG()
    .addTo(`.bagan-${btn}`)
    .attr({
      id: `bagan-${btn}`,
      width: 480,
      height: 492,
    });
  draw.rect(250, 20).radius(3).attr({
    // first box
    x: 20,
    y: 10,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // second box
    x: 20,
    y: 60,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // third box
    x: 20,
    y: 110,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fourth box
    x: 20,
    y: 160,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fifth box
    x: 20,
    y: 210,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // sixth box
    x: 20,
    y: 260,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // seventh box
    x: 20,
    y: 310,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // eighth box
    x: 20,
    y: 360,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // nineth box
    x: 20,
    y: 410,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // tenth box
    x: 20,
    y: 460,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.text(arr[0]).font({
    // first box name
    x: 24,
    y: 25,
    fill: "black",
    size: 12,
  });
  draw.text(arr[1]).font({
    // second box name
    x: 24,
    y: 75,
    fill: "black",
    size: 12,
  });
  draw.text(arr[2]).font({
    // third box name
    x: 24,
    y: 125,
    fill: "black",
    size: 12,
  });
  draw.text(arr[3]).font({
    // fourth box name
    x: 24,
    y: 175,
    fill: "black",
    size: 12,
  });
  draw.text(arr[4]).font({
    // fifth box name
    x: 24,
    y: 225,
    fill: "black",
    size: 12,
  });
  draw.text(arr[5]).font({
    // sixth box name
    x: 24,
    y: 275,
    fill: "black",
    size: 12,
  });
  draw.text(arr[6]).font({
    // seventh box name
    x: 24,
    y: 325,
    fill: "black",
    size: 12,
  });
  draw.text(arr[7]).font({
    // eighth box name
    x: 24,
    y: 375,
    fill: "black",
    size: 12,
  });
  draw.text(arr[8]).font({
    // nineth box name
    x: 24,
    y: 425,
    fill: "black",
    size: 12,
  });
  draw.text(arr[9]).font({
    // nineth box name
    x: 24,
    y: 475,
    fill: "black",
    size: 12,
  });
  draw.polyline("0,0 80,0 80,35").fill("none").move(270, 20).stroke({
    // first box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 70).stroke({
    // second box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,240 290,240 290,215").fill("none").move(270, 95).stroke({
    // third box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,195 40,195 40,155").fill("none").move(310, 55).stroke({
    // second-third bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,70").fill("none").move(350, 55).stroke({
    // first-third bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 170).stroke({
    // fourth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,240 290,240 290,215").fill("none").move(270, 195).stroke({
    // fifth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,195 80,195 80,125").fill("none").move(310, 125).stroke({
    // fourth-fifth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 270).stroke({
    // sixth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 295).stroke({
    // seventh box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 370).stroke({
    // eighth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 395).stroke({
    // nineth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,40 80,40 80,0").fill("none").move(270, 430).stroke({
    // tenth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 80,0 80,70").fill("none").move(310, 295).stroke({
    // sixth-seventh bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,40").fill("none").move(310, 395).stroke({
    // eighth-nineth bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,70 40,70 40,0").fill("none").move(350, 365).stroke({
    // eighth-tenth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,120").fill("none").move(390, 125).stroke({
    // firsth-fifth bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,120 40,120 40,0").fill("none").move(390, 245).stroke({
    // sixth-tenth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 30,0").fill("none").move(430, 245).stroke({
    // champion bracket
    color: "gold",
    width: 2,
  });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 85).stroke({
    // first round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // first round text
      x: 297,
      y: 97,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 185).stroke({
    // second round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // second round text
      x: 297,
      y: 197,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 285).stroke({
    // third round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // third round text
      x: 297,
      y: 297,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 385).stroke({
    // fourth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // fourth round text
      x: 297,
      y: 397,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 45).stroke({
    // fifth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // fifth round text
      x: 337,
      y: 57,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 425).stroke({
    // sixth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // sixth round text
      x: 337,
      y: 437,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(364, 115).stroke({
    // seventh round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // seventh round text
      x: 377,
      y: 127,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(364, 355).stroke({
    // eighth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // eighth round text
      x: 377,
      y: 367,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(404, 235).stroke({
    // champion round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // champion round text
      x: 417,
      y: 247,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
}

function drawEleven(btn, title, arr) {
  let height = "562px";
  createBaganRow(btn, title, height);

  let draw = SVG()
    .addTo(`.bagan-${btn}`)
    .attr({
      id: `bagan-${btn}`,
      width: 480,
      height: 542, //492
    });
  draw.rect(250, 20).radius(3).attr({
    // first box
    x: 20,
    y: 10,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // second box
    x: 20,
    y: 60,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // third box
    x: 20,
    y: 110,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fourth box
    x: 20,
    y: 160,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fifth box
    x: 20,
    y: 210,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // sixth box
    x: 20,
    y: 260,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });

  //
  //
  // draw 5
  draw.rect(250, 20).radius(3).attr({
    // seventh box
    x: 20,
    y: 310,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // eighth box
    x: 20,
    y: 360,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // nineth box
    x: 20,
    y: 410,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // tenth box
    x: 20,
    y: 460,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // eleventh box
    x: 20,
    y: 510,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  //  end draw 5
  //
  //

  draw.text(arr[0]).font({
    // first box name
    x: 24,
    y: 25,
    fill: "black",
    size: 12,
  });
  draw.text(arr[1]).font({
    // second box name
    x: 24,
    y: 75,
    fill: "black",
    size: 12,
  });
  draw.text(arr[2]).font({
    // third box name
    x: 24,
    y: 125,
    fill: "black",
    size: 12,
  });
  draw.text(arr[3]).font({
    // fourth box name
    x: 24,
    y: 175,
    fill: "black",
    size: 12,
  });
  draw.text(arr[4]).font({
    // fifth box name
    x: 24,
    y: 225,
    fill: "black",
    size: 12,
  });
  draw.text(arr[5]).font({
    // sixth box name
    x: 24,
    y: 275,
    fill: "black",
    size: 12,
  });

  //
  // draw 5
  draw.text(arr[6]).font({
    // seventh box name
    x: 24,
    y: 325,
    fill: "black",
    size: 12,
  });
  draw.text(arr[7]).font({
    // eighth box name
    x: 24,
    y: 375,
    fill: "black",
    size: 12,
  });
  draw.text(arr[8]).font({
    // nineth box name
    x: 24,
    y: 425,
    fill: "black",
    size: 12,
  });
  draw.text(arr[9]).font({
    // tenth box name
    x: 24,
    y: 475,
    fill: "black",
    size: 12,
  });
  draw.text(arr[10]).font({
    // eleventh box name
    x: 24,
    y: 525,
    fill: "black",
    size: 12,
  });
  // end draw 5
  //

  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 20).stroke({
    // first box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 45).stroke({
    // second box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 220).stroke({
    // fifth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,240 290,240 290,215").fill("none").move(270, 245).stroke({
    // sixth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,40").fill("none").move(310, 45).stroke({
    // first-second bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,35 80,35 80,0").fill("none").move(270, 85).stroke({
    // third box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,60").fill("none").move(350, 85).stroke({
    // first-third bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,0 80 ,0 80 ,35").fill("none").move(270, 170).stroke({
    // fourth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,195 40,195 40,155").fill("none").move(310, 205).stroke({
    // fifth-sixth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,60 40,60 40,0").fill("none").move(350, 145).stroke({
    // fourth-sixth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 30,0 30,150").fill("none").move(390, 145).stroke({
    // champion bracket
    color: "#00099b",
    width: 2,
  });

  //
  // draw 5
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 320).stroke({
    // seventh box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 345).stroke({
    // eight box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 470).stroke({
    // ten box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,240 290,240 290,215").fill("none").move(270, 495).stroke({
    // eleven box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,40").fill("none").move(310, 345).stroke({
    // seventh-eighth bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,35 80,35 80,0").fill("none").move(270, 385).stroke({
    // nineth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,60").fill("none").move(350, 385).stroke({
    // seventh-ninenth bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,195 80,195 80,145").fill("none").move(310, 445).stroke({
    // ten-eleven bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,150 30,150 30,0").fill("none").move(390, 295).stroke({
    // ten-eleven semifinal bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 335).stroke({
    // fourth round box
    color: "#000",
    width: 1,
  });
  // end draw 5
  //

  draw.polyline("0,0 40,0").fill("none").move(420, 295).stroke({
    //champion
    color: "gold",
    width: 2,
  });

  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 35).stroke({
    // first round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // first round text
      x: 297,
      y: 47,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 235).stroke({
    // second round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // second round text
      x: 297,
      y: 247,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });

  //
  // draw 5
  draw
    .plain("...")
    .font({
      // fourth round text
      x: 297,
      y: 347,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 485).stroke({
    // second round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // second round text
      x: 297,
      y: 497,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  // end draw 5
  //

  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 75).stroke({
    // third round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // third round text
      x: 337,
      y: 87,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 195).stroke({
    // fourth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // fourth round text
      x: 337,
      y: 207,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(364, 135).stroke({
    // final round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // final round text
      x: 377,
      y: 147,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });

  //
  //
  // draw 5

  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 375).stroke({
    // third round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // third round text
      x: 337,
      y: 387,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(364, 435).stroke({
    // final round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // final round text
      x: 377,
      y: 447,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });

  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(394, 285).stroke({
    // champion round box
    color: "gold",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // champion round text
      x: 407,
      y: 297,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
}

function drawTwelve(btn, title, arr) {
  let height = "612px";
  createBaganRow(btn, title, height);

  let draw = SVG()
    .addTo(`.bagan-${btn}`)
    .attr({
      id: `bagan-${btn}`,
      width: 480,
      height: 592,
    });
  draw.rect(250, 20).radius(3).attr({
    // first box
    x: 20,
    y: 10,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // second box
    x: 20,
    y: 60,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // third box
    x: 20,
    y: 110,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fourth box
    x: 20,
    y: 160,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // fifth box
    x: 20,
    y: 210,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // sixth box
    x: 20,
    y: 260,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // seventh box
    x: 20,
    y: 310,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // eighth box
    x: 20,
    y: 360,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // nineth box
    x: 20,
    y: 410,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // tenth box
    x: 20,
    y: 460,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // eleveth box
    x: 20,
    y: 510,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // twelve box
    x: 20,
    y: 560,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  draw.text(arr[0]).font({
    // first box name
    x: 24,
    y: 25,
    fill: "black",
    size: 12,
  });
  draw.text(arr[1]).font({
    // second box name
    x: 24,
    y: 75,
    fill: "black",
    size: 12,
  });
  draw.text(arr[2]).font({
    // third box name
    x: 24,
    y: 125,
    fill: "black",
    size: 12,
  });
  draw.text(arr[3]).font({
    // fourth box name
    x: 24,
    y: 175,
    fill: "black",
    size: 12,
  });
  draw.text(arr[4]).font({
    // fifth box name
    x: 24,
    y: 225,
    fill: "black",
    size: 12,
  });
  draw.text(arr[5]).font({
    // sixth box name
    x: 24,
    y: 275,
    fill: "black",
    size: 12,
  });
  draw.text(arr[6]).font({
    // seventh box name
    x: 24,
    y: 325,
    fill: "black",
    size: 12,
  });
  draw.text(arr[7]).font({
    // eighth box name
    x: 24,
    y: 375,
    fill: "black",
    size: 12,
  });
  draw.text(arr[8]).font({
    // nineth box name
    x: 24,
    y: 425,
    fill: "black",
    size: 12,
  });
  draw.text(arr[9]).font({
    // tenth box name
    x: 24,
    y: 475,
    fill: "black",
    size: 12,
  });
  draw.text(arr[10]).font({
    // eleventh box name
    x: 24,
    y: 525,
    fill: "black",
    size: 12,
  });
  draw.text(arr[11]).font({
    // twelveth box name
    x: 24,
    y: 575,
    fill: "black",
    size: 12,
  });
  draw.polyline("0,0 40,0 40,25").fill("none").move(270, 20).stroke({
    // first box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,40").fill("none").move(310, 45).stroke({
    // first-second box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,25 40,25 40,0").fill("none").move(270, 45).stroke({
    // second box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,35 330,35 330,0").fill("none").move(270, 85).stroke({
    // third box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,0 330,0 330,40").fill("none").move(270, 170).stroke({
    // fourth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,60").fill("none").move(350, 85).stroke({
    // first-third bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,65 40,65 40,0").fill("none").move(350, 145).stroke({
    // fourth-sixth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 220).stroke({
    // fifth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,240 290,240 290,215").fill("none").move(270, 245).stroke({
    // sixth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,35 40,35 40,0").fill("none").move(310, 210).stroke({
    // fifth-sixth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 320).stroke({
    // seventh box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 345).stroke({
    // eighth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,40 330,40 330,0").fill("none").move(270, 380).stroke({
    // nineth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("250,0 330,0 330,35").fill("none").move(270, 470).stroke({
    // tenth box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 520).stroke({
    // eleventh box bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,90 40,90 40,65").fill("none").move(270, 545).stroke({
    // twelveth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,40 40,40 40,0").fill("none").move(310, 505).stroke({
    // eleventh-twelveth box bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,35").fill("none").move(310, 345).stroke({
    // seventh-eighth bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,65").fill("none").move(350, 380).stroke({
    // seventh-nineth bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,60 40,60 40,0").fill("none").move(350, 445).stroke({
    // tenth-twelveth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 40,0 40,150").fill("none").move(390, 145).stroke({
    // firsth-sixth bracket
    color: "#00099b",
    width: 2,
  });
  draw.polyline("0,150 40,150 40,0").fill("none").move(390, 295).stroke({
    // seventh-twelveth bracket
    color: "#9b0000",
    width: 2,
  });
  draw.polyline("0,0 30,0").fill("none").move(430, 295).stroke({
    // champion bracket
    color: "gold",
    width: 2,
  });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 35).stroke({
    // first round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // first round text
      x: 297,
      y: 47,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 235).stroke({
    // second round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // second round text
      x: 297,
      y: 247,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 335).stroke({
    // third round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // third round text
      x: 297,
      y: 347,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 535).stroke({
    // fourth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // fourth round text
      x: 297,
      y: 547,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 75).stroke({
    // fifth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // fifth round text
      x: 337,
      y: 87,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 200).stroke({
    // sixth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // sixth round text
      x: 337,
      y: 212,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 370).stroke({
    // seventh round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // seventh round text
      x: 337,
      y: 382,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 495).stroke({
    // eighth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // eighth round text
      x: 337,
      y: 507,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(364, 135).stroke({
    // nineth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // nineth round text
      x: 377,
      y: 147,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(364, 435).stroke({
    // tenth round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // tenth round text
      x: 377,
      y: 447,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(404, 285).stroke({
    // champion round box
    color: "#000",
    width: 1,
  });
  draw
    .plain("...")
    .font({
      // champion round text
      x: 417,
      y: 297,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
}

function drawThirteen(btn, title, arr) {
  let height = "662px";
  createBaganRow(btn, title, height);

  let draw = SVG()
    .addTo(`.bagan-${btn}`)
    .attr({
      id: `bagan-${btn}`,
      width: 480,
      height: 642,
    });

  // first box
  draw.rect(250, 20).radius(3).attr({
    x: 20,
    y: 10,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  // second box
  draw.rect(250, 20).radius(3).attr({
    x: 20,
    y: 60,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  // third box
  draw.rect(250, 20).radius(3).attr({
    x: 20,
    y: 110,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  // fourth box
  draw.rect(250, 20).radius(3).attr({
    x: 20,
    y: 160,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });

  // first box name
  draw.text(arr[0]).font({
    x: 24,
    y: 25,
    fill: "black",
    size: 12,
  });
  // second box name
  draw.text(arr[1]).font({
    x: 24,
    y: 75,
    fill: "black",
    size: 12,
  });
  // third box name
  draw.text(arr[2]).font({
    x: 24,
    y: 125,
    fill: "black",
    size: 12,
  });
  // fourth box name
  draw.text(arr[3]).font({
    x: 24,
    y: 175,
    fill: "black",
    size: 12,
  });
  // first box bracket
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 20).stroke({
    color: "#00099b",
    width: 2,
  });
  // second box bracket
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 45).stroke({
    color: "#9b0000",
    width: 2,
  });
  // third box bracket
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 120).stroke({
    color: "#00099b",
    width: 2,
  });
  // fourth box bracket
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 145).stroke({
    color: "#9b0000",
    width: 2,
  });
  // first-second bracket
  draw.polyline("0,0 40,0 40,50").fill("none").move(310, 45).stroke({
    color: "#00099b",
    width: 2,
  });
  // third-fourth bracket
  draw.polyline("0,145 40,145 40,95").fill("none").move(310, 95).stroke({
    color: "#9b0000",
    width: 2,
  });
  // 4 final bracket
  draw.polyline("0,0 40,0 40,95").fill("none").move(350, 95).stroke({
    color: "#00099b",
    width: 2,
  });

  // 4-3 final bracket
  draw.polyline("0,0 40,0 40,155").fill("none").move(390, 190).stroke({
    color: "#00099b",
    width: 2,
  });

  // 6 final bracket
  draw.polyline("0,150 40,150 40,0").fill("none").move(390, 345).stroke({
    color: "#9b0000",
    width: 2,
  });

  // final bracket
  draw.polyline("0,0 30,0").fill("none").move(430, 345).stroke({
    color: "gold",
    width: 2,
  });
  // first round box
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 35).stroke({
    color: "#000",
    width: 1,
  });
  // first round text
  draw
    .plain("...")
    .font({
      x: 297,
      y: 47,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  // second round box
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 135).stroke({
    color: "#000",
    width: 1,
  });
  // second round text
  draw
    .plain("...")
    .font({
      x: 297,
      y: 147,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  // final round box
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 85).stroke({
    color: "#000",
    width: 1,
  });
  // final round text
  draw
    .plain("...")
    .font({
      x: 337,
      y: 97,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  // semi final 4-3 round box
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(364, 180).stroke({
    color: "#000",
    width: 1,
  });
  // semi final 4-3 round text
  draw
    .plain("...")
    .font({
      // x: 337,
      // y: 97,
      x: 377,
      y: 193,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  // final 4,3 - 7 round box
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(404, 334).stroke({
    color: "#000",
    width: 1,
  });
  // final 4,3 - 7 round text
  draw
    .plain("...")
    .font({
      x: 417,
      y: 347,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });

  // three

  // 5 box
  draw.rect(250, 20).radius(3).attr({
    x: 20,
    y: 210,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  //6 box
  draw.rect(250, 20).radius(3).attr({
    x: 20,
    y: 260,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  //7 box
  draw.rect(250, 20).radius(3).attr({
    x: 20,
    y: 310,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  //5 box name
  draw.text(arr[4]).font({
    x: 24,
    y: 225,
    fill: "black",
    size: 12,
  });
  //6 box name
  draw.text(arr[5]).font({
    x: 24,
    y: 275,
    fill: "black",
    size: 12,
  });
  //7 box name
  draw.text(arr[6]).font({
    x: 24,
    y: 325,
    fill: "black",
    size: 12,
  });
  //5 box bracket
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 220).stroke({
    color: "#00099b",
    width: 2,
  });
  //6 box bracket
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 245).stroke({
    color: "#9b0000",
    width: 2,
  });
  //5-6 bracket
  draw.polyline("0,0 40,0 40,40").fill("none").move(310, 245).stroke({
    color: "#00099b",
    width: 2,
  });
  //7 box bracket
  draw.polyline("0,35 80,35 80,0").fill("none").move(270, 285).stroke({
    color: "#9b0000",
    width: 2,
  });
  // champion 3 bracket
  // draw.polyline("0,0 30,0").fill("none").move(350, 285).stroke({
  draw.polyline("0,95 40,95 40,0 ").fill("none").move(350, 190).stroke({
    color: "#9b0000",
    width: 2,
  });
  //first round box
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 235).stroke({
    color: "#000",
    width: 1,
  });
  //round text
  draw
    .plain("...")
    .font({
      x: 297,
      y: 247,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  //champion round box
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 275).stroke({
    color: "#000",
    width: 1,
  });
  //champion round text
  draw
    .plain("...")
    .font({
      x: 337,
      y: 287,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });

  // six

  // 8 box
  draw.rect(250, 20).radius(3).attr({
    x: 20,
    y: 360,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  draw.rect(250, 20).radius(3).attr({
    // 9 box
    x: 20,
    y: 410,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  // 10 box
  draw.rect(250, 20).radius(3).attr({
    x: 20,
    y: 460,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  // 11 box
  draw.rect(250, 20).radius(3).attr({
    x: 20,
    y: 510,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  // 12 box
  draw.rect(250, 20).radius(3).attr({
    x: 20,
    y: 560,
    fill: "white",
    stroke: "#0004ff",
    "stroke-width": 2,
  });
  // 13 box
  draw.rect(250, 20).radius(3).attr({
    x: 20,
    y: 610,
    fill: "white",
    stroke: "#ea0000",
    "stroke-width": 2,
  });
  // 8 box name
  draw.text(arr[7]).font({
    x: 24,
    y: 375,
    fill: "black",
    size: 12,
  });
  // 9 box name
  draw.text(arr[8]).font({
    x: 24,
    y: 425,
    fill: "black",
    size: 12,
  });
  // 10 box name
  draw.text(arr[9]).font({
    x: 24,
    y: 475,
    fill: "black",
    size: 12,
  });
  // 11 box name
  draw.text(arr[10]).font({
    x: 24,
    y: 525,
    fill: "black",
    size: 12,
  });
  // 12 box name
  draw.text(arr[11]).font({
    x: 24,
    y: 575,
    fill: "black",
    size: 12,
  });
  // 13 box name
  draw.text(arr[12]).font({
    x: 24,
    y: 625,
    fill: "black",
    size: 12,
  });
  // 8 box bracket
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 370).stroke({
    color: "#00099b",
    width: 2,
  });
  // 9 box bracket
  draw.polyline("250,90 290,90 290,65").fill("none").move(270, 395).stroke({
    color: "#9b0000",
    width: 2,
  });
  // 10 box bracket
  draw.polyline("250,50 290,50 290,75").fill("none").move(270, 570).stroke({
    color: "#00099b",
    width: 2,
  });
  // 11 box bracket
  draw.polyline("250,240 290,240 290,215").fill("none").move(270, 595).stroke({
    color: "#9b0000",
    width: 2,
  });
  // first-second bracket
  draw.polyline("0,0 40,0 40,40").fill("none").move(310, 395).stroke({
    color: "#00099b",
    width: 2,
  });
  // third box bracket
  draw.polyline("0,35 80,35 80,0").fill("none").move(270, 435).stroke({
    color: "#9b0000",
    width: 2,
  });
  // first-third bracket
  draw.polyline("0,0 40,0 40,60").fill("none").move(350, 435).stroke({
    color: "#00099b",
    width: 2,
  });
  // fourth box bracket
  draw.polyline("0,0 80 ,0 80 ,35").fill("none").move(270, 520).stroke({
    color: "#00099b",
    width: 2,
  });
  // fifth-sixth bracket
  draw.polyline("0,195 40,195 40,155").fill("none").move(310, 555).stroke({
    color: "#9b0000",
    width: 2,
  });
  // fourth-sixth bracket
  draw.polyline("0,60 40,60 40,0").fill("none").move(350, 495).stroke({
    color: "#9b0000",
    width: 2,
  });
  // champion bracket
  // draw.polyline("0,0 30,0").fill("none").move(390, 495).stroke({
  //   color: "gold",
  //   width: 2,
  // });
  // first round box
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 385).stroke({
    color: "#000",
    width: 1,
  });
  // first round text
  draw
    .plain("...")
    .font({
      x: 297,
      y: 397,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  // second round box
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(284, 585).stroke({
    color: "#000",
    width: 1,
  });
  // second round text
  draw
    .plain("...")
    .font({
      x: 297,
      y: 597,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  // third round box
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 425).stroke({
    color: "#000",
    width: 1,
  });
  // third round text
  draw
    .plain("...")
    .font({
      x: 337,
      y: 437,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  // fourth round box
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(324, 545).stroke({
    color: "#000",
    width: 1,
  });
  // fourth round text
  draw
    .plain("...")
    .font({
      x: 337,
      y: 557,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
  // final round box
  draw.polyline("25,0 0,0 0,20 25,20").fill("none").move(364, 485).stroke({
    color: "#000",
    width: 1,
  });
  // final round text
  draw
    .plain("...")
    .font({
      x: 377,
      y: 497,
      fill: "black",
      size: 14,
      id: "partai",
    })
    .attr({
      "text-anchor": "middle",
      "dominant-baseline": "middle",
    });
}
