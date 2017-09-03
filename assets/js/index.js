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

window.submitForm = function submitForm() {
  var data = {"content" : "test content", "email" : "afaef@faef.com" }
  console.log("aefaef")
  var xhr = new XMLHttpRequest();
    xhr.open("post", "https://formspree.io/dansiberry1@gmail.com", true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback function
    xhr.onloadend = function (response) {
      if (response.target.status === 0) {

        // Failed XmlHttpRequest should be considered an undefined error.
        formStatus.className += ' alert-danger';
        formStatus.innerHTML = form.dataset.formError;

      } else if (response.target.status === 400) {

        // Bad Request
        formStatus.className += ' alert-danger';
        formStatus.innerHTML = JSON.parse(responseText).error;

      } else if (response.target.status === 200) {

        // Success
        formStatus.className += ' alert-success';
        formStatus.innerHTML = form.dataset.formSuccess;

      } else if (response.target.status === 500) {

        // Success
        console.log(response)

      }
    };
}



