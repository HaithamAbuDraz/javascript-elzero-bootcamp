/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("I am The Good Promise");
    reject(Error("I am The Bad Promise"));
  }, 3000);
});

async function readData() {
  console.log("Before Promise"); // Before Promise
  // myPromise.then((resolvedValue) => console.log(resolvedValue));
  // console.log(await myPromise); // I am The Good Promise
  console.log(await myPromise.catch((err) => err)); // Error: I am The Bad Promise at main.js:11:12
  console.log("After Promise"); // After Promise
}

readData();
/*
Before Promise
I am The Good Promise
After Promise
*/
/*
Before Promise
Error: I am The Bad Promise
    at main.js:11:12
After Promise
*/