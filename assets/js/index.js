import "../../node_modules/jquery/dist/jquery.js"
import "./grad.js"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../sass/app.scss"
import "./scrollEffects.js"
import "./animation.js"



window.showForm = function showForm() {
  document.getElementById("menu-expanded").classList.add("grow-to-form")
}

window.hideForm = function hideForm() {
  document.getElementById("menu-expanded").classList.remove("grow-to-form")
}
