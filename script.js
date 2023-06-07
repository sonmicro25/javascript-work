// 1.  Write a function that will be able to convert figures from Fahrenheit to Celsius

function fahrenheitToCelsius(fahrenheit) {
    // Convert Fahrenheit to Celsius
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
  
  // Usage example
  var temperatureInFahrenheit = 77;
  var temperatureInCelsius = fahrenheitToCelsius(temperatureInFahrenheit);
  console.log(temperatureInCelsius);

//   Second Usage example 

console.log(fahrenheitToCelsius(200))


// 2.  Create a function that will calculate the average of numbers in an array

var avgArrayNum = [1,2,3,4,5,6];

function averageNumber(avgArray) {
  var sumArray = 0;
    for (let index = 0; index < avgArray.length; index++) {
      sumArray += avgArray[index];
      var averageArray = sumArray / avgArray.length
    }

    return averageArray
}

// Usage example

console.log(averageNumber(avgArrayNum))



// 3.  Create a function that checks if a number, n is divisible by two numbers x and y
// All inputs are positive non-zero-digits 

function isDivisibleByTwo(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

// Usage example

console.log(isDivisibleByTwo(10, 2, 3))


// 4. Create a function that will output the first 100 prime numbers

function generatePrimeNumbers(limit) {
  var primes = [];
  var num = 2;

  while (primes.length < limit) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}

function isPrime(number) {
  for (var i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

// Example usage:
var primeNumbers = generatePrimeNumbers(100);
console.log(primeNumbers);



// 5. Create a function that will return the boolean specifying if a number is a prime number

function isPrime(n) {
  for (let index = 2; index < n; index++) {
    if (n % index === 0) {
      return false;
    }
  }
  return true;
}

// Usage example

console.log(isPrime(100))


//6.  Create a function that will receives an array of numbers of diverse numbers and returns an array containing only positive numbers

function getPositiveNumbers(numbers) {
  var positiveNumbers = [];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > 0) {
      positiveNumbers.push(numbers[index]);
    }
  }
  return positiveNumbers;
}

// Usage example

console.log(getPositiveNumbers([-2,-8,4,0,9]));


// 7. Write a program that prints the number from 1 to 100 but for multiples of 3 prints "Fizz"
// instead of the number and for the multiples of 5 prints "Buzz". For the numbers which are multiples of
// both 3 and 5 print "FizzBuzz"

function getFizzBuzz(number) {
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
}

// Usage Example 
getFizzBuzz(100)


// 8. The marketing team is spending way too much time typing in hastags. Let's create a hastag generator for them, our hastag generator
// will meet the following criteria
// * It must start with a hash symbol #
// * Ignore all spaces in the input 
// * All words mush have their first letter capitalized
// * If the final result is going to be longer than 140 characters. it should return false
// * If the input or result is an empty string. it should return false.



function generateHashtags(text) {
  // Remove leading and trailing spaces, split the text into an array of words
  var words = text.trim().split(' ');

  // Filter out empty words and add '#' symbol to each word
  var hashtags = words
    .filter(function(word) {
      return word !== '';
    })
      // First Letter Capitalized
      hashtags = hashtags.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
    .map(function(word) {
      return '#' + word;
    });
      // SHOULD NOT BE MORE THAN 140 CHARACTERS
    if(hashtags.length > 140) {
      return false
    }



  return hashtags;
}

// Example usage:
var inputText = "javaScript";
var result = generateHashtags(inputText);
console.log(result);

