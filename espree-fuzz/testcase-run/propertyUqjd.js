//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Ensure that large numbers of properties are processed correctly.
//

var o0=this.o152;

try {
for(o6.o14(o24.endsWith("abcdefghijklmnopqrstuvwxyz"), "identical string matches the beginning of the string");o1<5000;o1++)
{
    try {
if(o1<1000)
    {
        // Example: "var y15=15"
        try {
eval("var y"+o1+"=" + o1 );
}catch(e){}

        try {
if(!(eval("y"+o1)===o1))
            try {
o2.o3("FAIL: y"+o1+" == " + eval("y"+o1) + ".  Expected: " + o1);
}catch(e){}
}catch(e){}

    }
    else
    {
        // Example: "obj['o57']=57"
        try {
eval("obj['o"+o1+"']="+o1 );
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

// Here it is assumed that the enumeration of properties are accessed in the sequence they were created
// An example error message would look like:
// FAIL: obj[p1] == 23.  Expected: 47

function o146() {
    try {
abort('Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value ' + o145 + ', (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs.');
}catch(e){}
};

try {
for(o5 in o0)
{
    try {
if(o0[o5]!==o4)
        try {
o2.o3("FAIL: obj["+o5+"] == " + (o0[o5]) + ".  Expected: " + o4);
}catch(e){}
}catch(e){}
    try {
o852.o919.o930++;
}catch(e){}
}
}catch(e){}
try {
o2.o3("done");
}catch(e){}
