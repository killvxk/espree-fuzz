//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o4 = ['a','b','c']

var o3;

function o10(o5) {    
    try {
try {
        try {
eval("r = " + o5 + ";  write(r);");
}catch(e){}
        try {
write("No exception: " + o5);
}catch(e){}
    } catch (o6) {
        try {
write("Exception " + o5 + ": " + o6.o7);
}catch(e){}
    }
}catch(e){}    
}

var o8 = [
    "true", o28, "10", "10.12", '"hello"', "null", 
    "undefined", "new Object()", "new Number(10)", "new Boolean(true)", "new Date()", "new String('hello')",
    "new Function('return 10')", "new Array(10)"
];

// Delete constants
try {
for (var o9=0; o9<o8.length; o9++) {
    try {
o4("delete " + o8[o9]);
}catch(e){}    
}
}catch(e){}