/*
  Async & Await With Try, Catch, Finally
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am The Good Promise");
    // reject("I am The Bad Promise");
  }, 3000);
});

// async function readData() {
//   console.log("Before Promise"); // Before Promise
//   try {
//     console.log(await myPromise);
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//     // I am The Good Promise
//     // I am The Bad Promise
//   } finally {
//     console.log("After Promise"); // After Promise
//   }
// }

// readData();

// "https://api.github.com/users/haithamabudraz/repos"

async function fetchData() {
  console.log("Before Fetch"); // Before Fetch
  try {
    let myData = await fetch("https://api.github.com/u sers/haithamabudraz/repos");
    console.log(await myData.json());
    /*
      0: { id: 1201130915, node_id: 'R_kgDOR5fNow', name: 'coursera-frontend-developer-course', full_name: 'HaithamAbuDraz/coursera-frontend-developer-course', private: false, … }
      1: { id: 947175468, node_id: 'R_kgDOOHTALA', name: 'Data-Structures-Java', full_name: 'HaithamAbuDraz/Data-Structures-Java', private: false, … }
      2: { id: 1218029734, node_id: 'R_kgDOSJmopg', name: 'elzero-html-css-template-one', full_name: 'HaithamAbuDraz/elzero-html-css-template-one', private: false, … }
      3: { id: 863443890, node_id: 'R_kgDOM3cbsg', name: 'HaithamAbuDraz', full_name: 'HaithamAbuDraz/HaithamAbuDraz', private: false, … }
      4: { id: 1194336910, node_id: 'R_kgDORzAijg', name: 'javascript-elzero-bootcamp', full_name: 'HaithamAbuDraz/javascript-elzero-bootcamp', private: false, … }
      5: { id: 1011059853, node_id: 'R_kgDOPEOMjQ', name: 'Modern-Login-Sign-Up-Form', full_name: 'HaithamAbuDraz/Modern-Login-Sign-Up-Form', private: false, … }
      6: { id: 946522914, node_id: 'R_kgDOOGrLIg', name: 'My-Website', full_name: 'HaithamAbuDraz/My-Website', private: false, … }
      7: { id: 1147233349, node_id: 'R_kgDORGFkRQ', name: 'Single-Page-CV-Project', full_name: 'HaithamAbuDraz/Single-Page-CV-Project', private: false, … }
    */
  } catch (reason) {
    console.log(`Reason: ${reason}`);
  } finally {
    console.log("After Fetch"); // After Fetch
  }
}

fetchData();

