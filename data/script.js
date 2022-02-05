// var, const and let!!!

// var - globally scoped and function scoped, can be updated and re-declared*
// const - globally and function scoped, cannot be updated or re-declared
// let - block scoped, can be updated but not re-declared

//re-declared - nadpisana

//NaN - not a number

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//SHORT IF STATEMENT

// x ? y = z

//example:
//var hasName = (name === 'true') ? 'Y' : 'N';

// condition - (name === 'true')

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//VARIABLE NAMING, example:

//GOOD WAY:
// let userInputNumber
// let user
// const changeGameMode

//WRONG WAY:
// let SwitchStatement
// let Disbaled_BuTtOn_1
// const 3Form

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//STRING METHODS

//string length
//example: variable.length;
//*without brackets, embed method

//string replace()
//example: variable.replace("ketchup", 'mustard');

//string slice()
//const str = "The quick brown fox jumps over the lazy dog.";
//example: str.slice(31);
//output: "the lazy dog."

//example: str.slice(40, 44);
//output: "dog."

//example: str.slice(-4);
//output: "dog."

//string trim()
//example: const str = "   Hi!   ";
//str.trim();
//output: "Hi!";

//string substring()
//const str = 'Mozilla';
//str.substring(1, 3);
//output: "oz"
//str.substring(2);
//output: "zilla"

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//ARRAY METHODS

let movieLine = ["tom", "nancy"];
movieLine.push("oliver");
//add elements to the end of the ARRAY

movieLine.pop();
//remove element from the end of the ARRAY

movieLine.shift();
//remove element from the beginning of the ARRAY

movieLine.unshift("joseph");
//add elements to the beginning of the ARRAY
//

//MORE COMMON METHODS
//
//concat - merge array
//includes - look for a value
//indexOf - just like string.indexOf
//join - creates a string from an array
//reverse - reverse an array
//slice - copies a portion on an array
//splice - removes/replaces elements
//sort - sorts an array

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//OBJECTS

//examples

let order = {
	name: "toilet paper",
	amount: 15,
	price: 8.99,
	company: "Linteo",
	ratings: [
		{
			userName: "Torroto321",
			accountLevel: 15,
			rate: 5,
		},
		{
			userName: "Sausage2",
			accountLevel: 50,
			rate: 8,
		},
		{
			userName: "Ponton3000",
			accountLevel: 3,
			rate: 10,
		},
	],
};

order.ratings[1].userName = "Onion5";
order.amount = 5;
order.quality = "Very Good";
order.slices = 4;

console.log(order);

for (let i = 0; i < order.ratings.length; i++) {
	console.log(order.ratings[i]);
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//NEW FOR LOOPS

//FOR OF - strings, arrays

const seatingChart = [
	["Kristen", "Erik", "Namita"],
	["Kristen2", "Erik2", "Namita2"],
	["Kristen3", "Erik3", "Namita3"],
];

for (let row of seatingChart) {
	for (let students of row) {
		console.log(students);
	}
}

console.log("\n================================\n");

for (let e of "Example text") {
	console.log(e);
}

//FOR IN - objects

const testScores = {
	keenan: 80,
	damon: 67,
	kim: 89,
	shawn: 91,
	kdzan: 40,
	daeyon: 88,
	kaazm: 59,
	shuttler: 21,
};

console.log("\n================================\n");

for (let person in testScores) {
	console.log(`${person} scored: ${testScores[person]}`);
}

console.log("\n================================\n");

//avg score

let total = 0;
let scores = Object.values(testScores);

for (let score of scores) {
	total += score;
}
console.log(total / scores.length);

//Object. method

console.log("\n\nObject Keys:\n" + Object.keys(testScores));
console.log("\n\nObject Values:\n" + Object.values(testScores));
console.log("\n\nObject Entries:\n" + Object.entries(testScores));

console.log("\n================================\n");

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
