window.animationScripts = function animation() {

 window.startAnimation = function startAnimation(e) {
    e.preventDefault()
    let animatedElements = document.getElementsByClassName("animated")
    let playButton = document.getElementById("play-button")
    for(let i = 0; i < animatedElements.length; i ++) {
      animatedElements[i].classList.add("play-animation")
    }
    setTimeout(window.reset, 20000)
  }

  window.reset = function resetAnimation() {
      let els = document.getElementsByClassName("animated")
      for(let i = 0; i < els.length ; i++) {
          els[i].classList.remove("play-animation")
          els[i].style.animation= "none"
          setTimeout(function() {
            els[i].style.animation = '';
          }, 10);
      }
  }

}

