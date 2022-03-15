/** var, let and const */

/**
 * var and let
 * The main difference between var and let is that instead of being function
 * scoped, let is block scoped.
 * `var: function scoped undefined when accessing a variable before it's declared`
 * `let: block scoped ReferenceError when accessing a variable before it's declared`
 */
console.log(discountPricesVar([100, 200, 300], 0.5)); // [50, 100, 150]
console.log(discountPricesLet([100, 200, 300], 0.5)); // [50, 100, 150]

function discountPricesVar(prices, discount) {
	var discounted = [];

	for (var i = 0; i < prices.length; i++) {
		var discountedPrice = prices[i] * (1 - discount);

		var finalPrice = Math.round(discountedPrice * 100) / 100;

		discounted.push(finalPrice);
	}

	console.log(i); // 3
	console.log(discountedPrice); // 150
	console.log(finalPrice); // 150

	return discounted;
}

function discountPricesLet(prices, discount) {
	var discounted = [];

	for (let i = 0; i < prices.length; i++) {
		let discountedPrice = prices[i] * (1 - discount);

		let finalPrice = Math.round(discountedPrice * 100) / 100;

		discounted.push(finalPrice);
	}

	// console.log(i); // Output: undefined
	// console.log(discountedPrice); // Output: undefined
	// console.log(finalPrice); // Output: undefined

	return discounted;
}

let name = "JaneDoe";
const handle = "janedoe"; // ✅

name = "John Dow";
handle = "@janedow"; // ❌ TypeError: Assignment to constant variable.

const person = {
	name: "Kim Kardashian"
};

person.name = "Kim Kardashian West"; // ✅
person = {}; // ❌ Assignment to constant variable.

/**
 * The most popular opinion, and the opinion that I subscribe to,
 * is that you should always use const unless you know the variable
 * is going to change. The reason for this is by using const, you're
 * signalling to your future self as well as any other future developers
 * that have to read your code that this variable shouldn't change.
 * If it will need to change (like in a for loop), you should use let.
 *
 * `var` Vs `const` Vs `let`
 *
 * `var:`
 * `function scope`
 * `undefined when accessing a variable before it's declared`
 *
 * `let:`
 * `block-scoped`
 * `ReferenceError when accessing a variable before it's declared`
 *
 * `const:
 * block-scoped`
 * `ReferenceError when accessing a variable before it's declared can't be reassigned`
 */
