/*
  Promise And XHR
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/haithamabudraz/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[4].name)) // javascript-elzero-bootcamp
  .catch((rej) => console.log(rej));
