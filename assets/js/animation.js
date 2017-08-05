window.animationScripts = function animation() {
  // let playGraphic = document.getElementById("play-button")
  // playGraphic.addEventListener("click", startAnimation)

 window.startAnimation = function startAnimation(e) {
    e.preventDefault()
    let animatedElements = document.getElementsByClassName("animated")
    let playButton = document.getElementById("play-button")
    playButton.classList.add("custom-hidden")
    for(let i = 0; i < animatedElements.length; i ++) {
      animatedElements[i].classList.add("play-animation")
    }
  }
}
