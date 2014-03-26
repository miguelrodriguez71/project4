// Author: Miguel Rodriguez Martinez
// 03-25-2014
// Deliverable 4

// Global Variables
var checkPhonePattern;


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
            return true;
        } else {
            return false;
        
        };
        
    
    } else {
        return false;
    };
    return false;
};





// Main Code

phonePattern = chkPhonePattern("352-426-4008");
if (phonePattern) {
    //true value returned
    console.log("Right Pattern");
} else {
    console.log("Wrong Pattern");
};
