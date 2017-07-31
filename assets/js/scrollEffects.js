window.domLoaded = function domLoaded() {

  let pageDownButton = document.getElementById("page-down")
  let pageUpButton = document.getElementById("page-up")
  let landing = document.getElementById("landing")
  let citizenVoice = document.getElementById("citizenvoice")
  let pages = document.getElementsByClassName("scroll-page")
  let home = document.getElementById("home")
  let pageCounter = 0

  pageDownButton.addEventListener("click", pageDown)
  pageUpButton.addEventListener("click", pageUp)

  function pageUp() {
    if (pageCounter != 0){
      pageCounter --
      pageCounter --
      let currentPage1 = pages[pageCounter]
      let currentPage2 = pages[pageCounter + 1]
      let pageBelow1 = pages[pageCounter + 2]
      let pageBelow2 = pages[pageCounter + 3]
      home.classList.remove("background-" + (pageCounter / 2 + 1))
      home.classList.add("background-" + (pageCounter / 2))
      pageBelow1.classList.remove("in-view")
      pageBelow1.classList.add("to-be-viewed")
      pageBelow2.classList.remove("in-view")
      pageBelow2.classList.add("to-be-viewed")
      currentPage1.classList.remove("viewed")
      currentPage1.classList.add("in-view")
      currentPage2.classList.remove("viewed")
      currentPage2.classList.add("in-view")
    }
  }

  function pageDown() {
    if (pageCounter != (pages.length - 2)){
      pageCounter ++
      pageCounter ++
      let currentPage1 = pages[pageCounter]
      let currentPage2 = pages[pageCounter + 1]
      let pageAbove1 = pages[pageCounter - 1]
      let pageAbove2 = pages[pageCounter - 2]
      home.classList.remove("background-" + (pageCounter / 2 - 1))
      home.classList.add("background-" + (pageCounter / 2))
      pageAbove1.classList.remove("in-view")
      pageAbove1.classList.add("viewed")
      pageAbove2.classList.remove("in-view")
      pageAbove2.classList.add("viewed")
      currentPage1.classList.remove("to-be-viewed")
      currentPage1.classList.add("in-view")
      currentPage2.classList.remove("to-be-viewed")
      currentPage2.classList.add("in-view")
      console.log(pageCounter)
      console.log(pages.length)
    }
  }

}
