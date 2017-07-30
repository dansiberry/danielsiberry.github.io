let colors = [ [[180,236,81], [83,160,254], [48,35,174]], [[250,217,97], [249,163,63], [247,107,28]] ]
let currentColor = 0
let destColor = 1
let bumper
let go = [[180,236,81], [83,160,254], [48,35,174]]

function update() {
    var col1 = `rgb(${Math.round(go[0][0])}, ${Math.round(go[0][1])}, ${Math.round(go[0][2])})`
    var col2 = `rgb(${Math.round(go[1][0])}, ${Math.round(go[1][1])}, ${Math.round(go[1][2])})`
    var col3 = `rgb(${Math.round(go[2][0])}, ${Math.round(go[2][1])}, ${Math.round(go[2][2])})`

    $('.svg-style').text (`
          #Page-1 { fill: url(#Gradient1); }
          .stop1 { stop-color: ${col1}; }
          .stop2 { stop-color: ${col2}; }
          .stop3 { stop-color: ${col3}; }
     `)
          $('.shape').css(
   "background-image",
   "linear-gradient(-90deg," + col1 + "0%, " + col2 + "48%, " + col3 + "100%)"
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
      update()
    }
  }
  stepCounter ++
  if(stepCounter == steps){
    update()
    stepCounter = 0;
    destColor == 1? destColor = 0 : destColor = 1
    currentColor == 1? currentColor = 0 : currentColor = 1
    clearInterval(bumper)
    function timeout(ms) {
        return new Promise(resolve => setTimeout(transition, ms));
    }
    await timeout(2000)
  }
}

function transition() {
 bumper = setInterval(bumpGrad ,40);
}

transition()
