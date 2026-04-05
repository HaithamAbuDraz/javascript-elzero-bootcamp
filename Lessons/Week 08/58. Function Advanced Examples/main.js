/*
	Function Advanced Examples
*/

function sayHello(userName, age) {
	if (age < 20) {
		console.log(`App is Not Suitable For You`);
	} else {
		console.log(`Hi ${userName} Your Age is ${age}`);
	}
}

sayHello("Haitham", 21); // Hi Haitham Your Age is 21
sayHello("Sayed", 42); // Hi Sayed Your Age is 42
sayHello("Ali", 18); // App is Not Suitable For You

function generateYears(start, end, exclude) {
	for (let i = start; i <= end; i++) {
		if (i === exclude) {
			continue;
		}
		console.log(i);
	}
}

generateYears(2004, 2026, 2023); // 2004 => 2026 exclude 2023
// 2004
// 2005
// 2006
// 2007
// 2008
// 2009
// 2010
// 2011
// 2012
// 2013
// 2014
// 2015
// 2016
// 2017
// 2018
// 2019
// 2020
// 2021
// 2022
// 2024
// 2025
// 2026