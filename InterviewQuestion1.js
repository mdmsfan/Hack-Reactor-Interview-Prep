var companies = [
  {
    "name" : "AdventNet",
    "category_code" : "enterprise",
    "number_of_employees" : 600,
    "founded_year" : 1996,
    "total_money_raised" : "$0"
  },
  {
    "name" : "TechnologyGuide",
    "category_code" : "web",
    "number_of_employees" : 10,
    "founded_year" : 2001,
    "total_money_raised" : "$0"
  },
  {
    "name" : "Wetpaint",
    "category_code" : "web",
    "number_of_employees" : 47,
    "founded_year" : 2005,
    "total_money_raised" : "$39.8M"
  },
  {
    "name" : "Zoho",
    "category_code" : "software",
    "number_of_employees" : 1600,
    "founded_year" : 2005,
    "total_money_raised" : "$0"
  },
  {
    "name" : "Omnidrive",
    "category_code" : "network_hosting",
    "number_of_employees" : null,
    "founded_year" : 2005,
    "total_money_raised" : "$800k"
  },
  {
    "name" : "Digg",
    "category_code" : "news",
    "number_of_employees" : 60,
    "founded_year" : 2004,
    "total_money_raised" : "$45M"
  },
  {
    "name" : "Geni",
    "category_code" : "web",
    "number_of_employees" : 18,
    "founded_year" : 2006,
    "total_money_raised" : "$16.5M"
  },
  {
    "name" : "StumbleUpon",
    "category_code" : "web",
    "number_of_employees" : null,
    "founded_year" : 2002,
    "total_money_raised" : "$18.5M"
  }
];

// Given an array of companies, return an array of all the company names founded last century
var collectCompaniesFoundedLastCentury = function (companies) {
 
  //run through an array with a for loop
  //access a property "founded_year"
  //determine if the value in the property <2000 and larger than 1899
  //if it meets the above criteria, push it into the array lastCenturyCompanies
   var lastCenturyCompanies = []; 
   for (var i = 0; i < companies.length; i++) {
     if (companies[i]["founded_year"] < 2000 && companies[i]["founded_year"] > 1899){
       lastCenturyCompanies.push(companies[i]["name"]);
     }
   }
  return lastCenturyCompanies;
};


// [1, 2] === [1, 2]; //false

function areArraysEqual(array1, array2) {
  var areEqual = true;
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      areEqual = false;
    }
  }
  return areEqual && array1.length === array2.length;
}

// assert(areArraysEqual([1, 2, 3], [1, 2, 3]) === true, "should return true for arrays of the same length with the same elements");
// assert(areArraysEqual([1, 2, 3], [1, 2, 3, 4]) === false, "should return false for arrays of different lengths");

// assert(areArraysEqual(collectCompaniesFoundedLastCentury(companies), ["AdventNet"]), "should return companies founded between 1899 and 2000");

// Given an array of companies, return an array of all the company names that raised 20 million dollars or more
function collectTwentyMillionDollarCompanies (companies) {
  //run through an array with a for loop
  //access a property "total_money_raised"
  //convert a value string of "total_money_raised" into a number
  //if this number is >= 20 million then I want it to push into an array of company names
  var companyNames = []; 
  for (var i = 0; i < companies.length; i++) {
    if (convertStringToNumber(companies[i]["total_money_raised"]) >= 20){
       companyNames.push(companies[i]["name"]);
     }
   }
   return companyNames
  }
  //console.log(collectTwentyMillionDollarCompanies (companies))

function convertStringToNumber(str) {
  //have a way to get rid of the $ sign
  //if string ends with M then we want to convert the string into a number
  var lastItem = str.charAt(str.length - 1)
  var num = null
  if (lastItem === "M"){
    str = str.substr(1); 
    num = parseInt(str); 
  }
  return num; 
}

function countAllCharacters(word) {
  // your code here
  var letters = word.split("")
  var charactersCount = {}
  for (var i = 0; i < letters.length; i++){
    var num = 0
      for (var k = 0; k<letters.length; k++){
          if (letters[i] === letters[k]){
              console.log(letters[i]); 
              console.log(letters[k])
              num = num + 1;
              charactersCount[letters[i]] = num
          }
      }
  }
  return charactersCount
}
//var output = countAllCharacters('banana');
//console.log(output)

function getLongestElement(arr) {
  // your code here
  var longestElement = arr[0];
  if (arr.length === 0) {
      return 0; 
  }
  else {
      arr.forEach(function(element){
          if (element.length > longestElement.length) {
              longestElement = element; 
          }
      });
      return longestElement;
  }
}
var output = getLongestElement(['one', 'two', 'three']);

function isANumber(number) {
    if (typeof number === "number") {
    return number; 
    }
    else {
        return 0;
    }
}
function getLargestNumberAmongMixedElements(arr) {
  var largestNumber = isANumber(arr[0]); 
  if (arr.length === 0) {
      return 0; 
  }
  else {
      arr.forEach(function(element){
          if (isANumber(element) > largestNumber){
              largestNumber = isANumber(element); 
          }
      })
    return largestNumber; 
  }
}
console.log(isANumber(5))
console.log(isANumber('word'))
var output = getLargestNumberAmongMixedElements([2, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
console.log(output); // --> 'three'