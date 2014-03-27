// Author: Miguel Rodriguez Martinez
// 03-25-2014
// Deliverable 4

// Global Variables
var phonePattern;
var emailFormat;


// Functions

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
// Allows to have .com. .org .tv .net

checkEmailFormat = function(arg) {
    // search values @ and .com within argument
    var argLowerCase = arg.toLowerCase();          // string to lower case
    var atCode = arg.indexOf("@");                  // get index of @
    var dat = arg.indexOf(".");                     // get index of .
    var notTogether = arg.indexOf("@.");            // verify @. not math
    var totalChars = arg.length;
    
    console.log("argLowerCase: " +argLowerCase);
    console.log("atCode: " +atCode);
        console.log("dat: " + dat);
            console.log("notTogether: " +notTogether);
                console.log("totalChars: " +totalChars);
                
                
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



// Main Code
// Check a Phone Number pattern

phonePattern = chkPhonePattern("352-426-4008");
if (phonePattern) {
    //true value returned
    console.log("Right Phone Number Pattern");
} else {
    console.log("Wrong Phone Number Pattern");
};

//Check an email address format

emailFormat = checkEmailFormat("a@a.tv");
if (emailFormat) {
    //true value returned
    console.log("valid email address format!");
} else {
    console.log("invalid email address format!");
};

