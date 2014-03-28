// Author: Miguel Rodriguez Martinez
// 03-25-2014
// Deliverable 4

// Global Variables
var phonePattern;
var emailFormat;
var urlFormat;
var upperCaseInitial;
var stringToNumber;
var arrayToSum; 
var numericTotalValue;


// FUNCTIONS

// Function to verify a phone number pattern

chkPhonePattern = function(arg) {
    
    if (arg.length === 12) {
        // it substracts every part of the string
        var subArg1 = arg.substr(0,3);
        var subArg2 = arg.substr(3,1);
        var subArg3 = arg.substr(4,3);
        var subArg4 = arg.substr(7,1);
        var subArg5 = arg.substr(8,4);
        if (!isNaN(subArg1) ^ subArg2 === "-" ^ !isNaN(subArg3) ^ subArg4 === "-" ^ !isNaN(subArg5)) {
            // Valid Pattern
            return true;
        };    
    }
    return false;
};

// Function to verify email address format
// Allows to have .com. .org .tv .net among others

checkEmailFormat = function(arg) {
    // search values @ and .com within argument
    var argLowerCase = arg.toLowerCase();          // string to lower case
    var atCode = arg.indexOf("@");                  // get index of @
    var dat = arg.indexOf(".");                     // get index of .
    var notTogether = arg.indexOf("@.");            // verify @. not math
    var totalChars = arg.length;
                
                
    if (atCode < dat) {                 // @ is before the .
        if (totalChars > 5)  {           // Minimum 5 Characters 
            if (atCode > 0) {             // (.) can not be the first element of the string
                if (notTogether === -1) {               // @. can not be together
                    if (dat < arg.length-1) {           // @ can not be the last character
                        if ( atCode < arg.length-1) {   // . can not be the last character
                    
                            return true
                        };
                    };
                };
            };
        };
        
    };
    return false
};


// Function to check a URL
// strings must begin with a http:// or https://

var checkURL = function(arg) {
    if (arg.substr(0,7) === "http://" || arg.substr(0,8) === "https://" ) {
        //valid URL
        return true;
    }
    return false;
};


// Function to Capitalize first letter of every word in a string

var stringToUpperCaseInitial = function(arg) {
    var firstLetter;
    var firstLetterUpper;
    var restOfWord;
    var wordLength;
    var changeToLowerCase = arg.toLowerCase();
    var arrayString = changeToLowerCase.split(" ")
    var wordUpperInitial = "";
    
    for (var i = 0; i < arrayString.length; i++) {
        firstLetter = arrayString[i].substr(0,1);
        firstLetterUpper = firstLetter.toUpperCase();
        wordLength = arrayString[i].length - 1;
        restOfWord = arrayString[i].substr(1, wordLength);
        wordUpperInitial = wordUpperInitial + firstLetterUpper + restOfWord + " ";
    };
    return wordUpperInitial;
};

// FUNCTION TO CHANGE A STRING ARGUMENT TO NUMBER DATA TYPE

var getNumberDataType = function(arg) {
    if (!isNaN(arg)) {
        //data is a number
        var changedTypeVariable = parseInt(arg,10);
        return changedTypeVariable;
    } else {
        console.log("Unable to convert the string to number data type")
        return 0;
    }
};


// FUNCTION FIND TOTAL VALUE ONLY FOR NUMBERS DATA TYPE VALUES

var sumArrayNumberDataOnly = function(arrayArg) {
    var sumNumbers = 0;
    for (var i = 0; i < arrayArg.length; i++) {
        if (typeof(arrayArg[i]) === "number") {
            //Value in Array Index is a number
            sumNumbers = sumNumbers + arrayArg[i];
        };
    };
    return sumNumbers;
    
};




// MAIN CODE
// Check a Phone Number pattern

phonePattern = chkPhonePattern("352-426-4008");
if (phonePattern) {
    //true value returned
    console.log("Right Phone Number Pattern");
} else {
    console.log("Wrong Phone Number Pattern");
};


//Check an email address format

emailFormat = checkEmailFormat("miguel@aim.com");
if (emailFormat) {
    //true value returned
    console.log("valid email address format!");
} else {
    console.log("invalid email address format!");
};


// Verify if a string is a URL

urlFormat = checkURL("https://www.visualbitscorp.com");
if (urlFormat) {
    //true value returned
    console.log("valid URL format!");
} else {
    console.log("invalid URL format!");
};


// UPPER CASE FIRST INICIAL EVERY WORD IN STRING

upperCaseInitial = stringToUpperCaseInitial("MIGUEL rodriguez MARTINez");
console.log(upperCaseInitial);


// CHANGE A STRING VERSION OF A NUMBER TO A NUMBER DATA TYPE

stringToNumber = getNumberDataType("000001971");
console.log(stringToNumber);


// FIND TOTAL VALUE ONLY FOR NUMBERS DATA TYPE VALUES

arrayToSum = ["tree",10,5,"5","3MM",20,55,"31"]; 
numericTotalValue = sumArrayNumberDataOnly(arrayToSum);
console.log("Total Value of just numbers in array: " + numericTotalValue);







