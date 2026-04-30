/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/haithamabudraz/repos")
  .then((result) => {
    console.log(result); // Response {type: 'cors', url: 'https://api.github.com/users/haithamabudraz/repos', redirected: false, status: 200, ok: true, …}
    let myData = result.json();
    console.log(myData); // Array(10)
    return myData;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => {
    console.log(ten[4].name);// javascript-elzero-bootcamp
  });

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/haithamabudraz/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[4].name)) // javascript-elzero-bootcamp
//   .catch((rej) => console.log(rej));
