/*
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("I am The First Promise");
    rej("I am The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("I am The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("I am The Third Promise");
  }, 2000);
});

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues), // ['I am The First Promise', 'I am The Second Promise', 'I am The Third Promise']
//   (rejectedValues) => console.log(`Rejected: ${rejectedValues}`) // Rejected: I am The First Promise
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValues) => console.log(`Rejected: ${rejectedValues}`)
// );
/*
0: {status: 'rejected', reason: 'I am The First Promise'}
1: {status: 'fulfilled', value: 'I am The Second Promise'}
2: {status: 'fulfilled', value: 'I am The Third Promise'}
length: 3
*/

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues), // I am The Second Promise
  (rejectedValues) => console.log(`Rejected: ${rejectedValues}`)
);
