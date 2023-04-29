//ANSWER TO QUESTION 1

// Mutating methods in arrays permits the change of the object after the method has been used; instead of returning the new array with the new changes. 
//Non-mutating methods do not change the object after the array method has been used. 
//Examples of Mutating Method = array.pop(), array.push(), array.shift(), array.unshift(), array.splice()
//Examples of Non-mutating Method = array.concat(), array.indexOf(), array.slice), array.includes(), array.join()

//ANSWER TO QUESTION 2
let arrayOfLanguages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'] 
arrayOfLanguages.splice(5, 0, 'Kotlin')
console.log(arrayOfLanguages)

arrayOfLanguages.splice(3, 0, 'Java')
console.log(arrayOfLanguages)

arrayOfLanguages.splice(0, 1)
console.log(arrayOfLanguages)

arrayOfLanguages.splice(0, 0, 'Scala', 'Swift')
console.log(arrayOfLanguages)

arrayOfLanguages.splice(5, 1, 'Go', 'Rust')
console.log(arrayOfLanguages)


//ANSWER TO QUESTION 3
let fruit = ['apple', 'mango', 'banana'];
	function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
	console.log(fruit)
// fruit = [ 'apple', 'mango', 'banana' ]


//ANSWER TO QUESTION 4
let arrayOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16] 
let maximum = arrayOfNumbers[0];

for (let i = 0; i < arrayOfNumbers.length; i++) {
	if (maximum < arrayOfNumbers[i] ) {
	maximum = arrayOfNumbers[i];
	}
	}
	console.log(maximum);

//ANSWER TO QUESTION 5
let valTimesIndex = [2, 4, 6].map((x, index) => {
	console.log(x * index);
		  return x * index;	
		  	})
