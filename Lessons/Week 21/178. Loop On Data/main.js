/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/haithamabudraz/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};
/*
HaithamAbuDraz/coursera-frontend-developer-course
HaithamAbuDraz/Data-Structures-Java
HaithamAbuDraz/elzero-html-css-template-one
HaithamAbuDraz/HaithamAbuDraz
HaithamAbuDraz/javascript-elzero-bootcamp
HaithamAbuDraz/Modern-Login-Sign-Up-Form
HaithamAbuDraz/My-Website
HaithamAbuDraz/Single-Page-CV-Project
*/
