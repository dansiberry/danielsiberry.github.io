window.domLoaded = function domLoaded() {

  // let pageDownButton = document.getElementById("page-down")
  // let pageUpButton = document.getElementById("page-up")
  let landing = document.getElementById("landing")
  let citizenVoice = document.getElementById("citizenvoice")
  let pages = document.getElementsByClassName("scroll-page")
  let home = document.getElementById("home")
  let pageCounter = 0
  let fired = 0

  // pageDownButton.addEventListener("click", pageDown)
  // pageUpButton.addEventListener("click", pageUp)

  window.addEventListener('wheel', function(e) {
    let trackFunc = new Date()
    if ((trackFunc.getTime() - fired) > 1400) {
      if(e.deltaY >= 1 ) {
        pageDown()
        fired = new Date().getTime();
      }
      if(e.deltaY <= -1) {
        pageUp()
        fired = new Date().getTime();
      }
    }
  })

  function pageUp() {
    if (pageCounter != 0){
      pageCounter --
      let currentPage = pages[pageCounter]
      let pageBelow = pages[pageCounter + 1]
      home.classList.remove("background-" + (pageCounter / 2 + 1))
      home.classList.add("background-" + (pageCounter / 2))
      pageBelow.classList.remove("in-view")
      pageBelow.classList.add("to-be-viewed")
      currentPage.classList.remove("viewed")
      currentPage.classList.add("in-view")
    }
  }

  function pageDown() {
    if (pageCounter != (pages.length - 1)){
      pageCounter ++
      let currentPage = pages[pageCounter]
      let pageAbove = pages[pageCounter - 1]
      home.classList.remove("background-" + (pageCounter / 2 - 1))
      home.classList.add("background-" + (pageCounter / 2))
      pageAbove.classList.remove("in-view")
      pageAbove.classList.add("viewed")
      currentPage.classList.remove("to-be-viewed")
      currentPage.classList.add("in-view")
    }
  }

}
