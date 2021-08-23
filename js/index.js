const emrAuthButton = document.querySelector(".emr-auth-button");

//form the backend url
let currentUrl = window.location.href;
const AUTH_SERVER_URL = currentUrl + "/api/auth";

function authenticationStarted(){
  fetch(AUTH_SERVER_URL, {
    method: 'POST',
  }).then((response) => {
    if(response.ok){
      //update the view to show successfully logged in
      //make the login button slowly fadein and fadeout using css animation
      //switch the class on icon of the login button to bi-refresh-fill and make it rotate
      //set the timeout to a few seconds (e.g 10 seconds) and update the user to check their internet connection
    } else {
      //update the view to show wrong username or password
    }
  })
}