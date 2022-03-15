/**
 * Variable scoope
 * A variable has scoope of its own execution context. Refer note. There
 * are two scoopes global scoope and function scoope
 * */

const name = "Johndoe";

const getName = () => {
	const name = "JaneDoe";
	console.log(name); // Output: JaneDoe

	const age = 21;

	const getAge = () => {
		console.log(age); // Output: 21
	};

	getAge();
};

console.log(name); // Output: JohnDoe

getName();

/** Here is another interesting thing about scoope kind of related to var and lte */
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
