let tutifruti = [[255,217,193], [245,153,191], [225,88,98]];
let skinColor =  [[250,177,95], [236,213,190], [250,241,195]];
let blueGreen = [[180,236,81], [83,160,254], [48,35,174]];
let orange = [[250,217,97], [249,163,63], [247,107,28]];
let purple = [[48,35,174], [125,73,195], [200,109,215]];
let hologram = [[116,235,213], [83,160,253], [180,236,81]];
let dustPink = [[251,194,235], [205,166,222], [161,140,209]];
let pink = [[254,227,246], [249,113,206], [148,82,160]];
let cherry = [[254,240,240], [238,23,43], [132,53,68]];
let midnight = [[21,8,173], [49,112,198], [172,203,238]];
let green = [[24,104,101], [56,185,90], [215,249,192]];
let white = [[175,177,206], [210,217,220], [245,247,260]];

let colors = [ blueGreen, orange, midnight, skinColor]
let currentColor = 0
let destColor = 1
let bumper
let go = [[180,236,81], [83,160,254], [48,35,174]]

window.update = function update() {
    var col1 = `rgb(${Math.round(go[0][0])}, ${Math.round(go[0][1])}, ${Math.round(go[0][2])})`
    var col2 = `rgb(${Math.round(go[1][0])}, ${Math.round(go[1][1])}, ${Math.round(go[1][2])})`
    var col3 = `rgb(${Math.round(go[2][0])}, ${Math.round(go[2][1])}, ${Math.round(go[2][2])})`

    $('.svg-style').text (`
          #Page-1 { fill: url(#Gradient1); }
          .stop1 { stop-color: ${col1}; }
          .stop2 { stop-color: ${col2}; }
          .stop3 { stop-color: ${col3}; }
     `)
          $('.grad-animate').css(
   "background-image",
   "linear-gradient(-40deg," + col1 + "0%, " + col2 + "48%, " + col3 + "100%)"
    );
}

let stepCounter = 0
let steps = 15
async function bumpGrad(){
  for (let col = 0; col < 3; col++) {
    for (let val = 0; val < 3; val++) {
      if (go[col][val] > colors[destColor][col][val] ){
        let modify = (colors[currentColor][col][val] - colors[destColor][col][val]) / steps
        go[col][val] -= modify
      }
      if(go[col][val] < colors[destColor][col][val] & (colors[destColor][col][val] - go[col][val]) > 1) {
        let modify = (colors[destColor][col][val] - colors[currentColor][col][val]) / steps
        go[col][val]+= modify
      }
    }
  }
  update()
  stepCounter ++
  if(stepCounter == steps){
    update()
    stepCounter = 0;
    if(destColor == colors.length -1) {
      destColor = 0
    }
    else {
      destColor ++
    }
    if(currentColor == colors.length -1) {
      currentColor = 0
    }
    else {
      currentColor ++
    }
    // destColor == 1? destColor = 0 : destColor = 1
    // currentColor == 1? currentColor = 0 : currentColor = 1
    clearInterval(bumper)
    function timeout(ms) {
        return new Promise(resolve => setTimeout(transition, ms));
    }
    await timeout(2700)
  }
}

function transition() {
 bumper = setInterval(bumpGrad ,40);
}
setTimeout(transition, 2000)
