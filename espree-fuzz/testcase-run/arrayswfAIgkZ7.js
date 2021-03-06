//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Refer to Bug EZE\123
//This test case is to ensure that the length of the array is not always stored as a tagged integer
var o18 = o10(Uint16Array);
function o468(o2,o3,o4,o5)
{

    try {
if(true !==resolve)
        try {
o6.o7(function (o421) {try {
"use strict";
}catch(e){}
    var value = (o421.o148 - 1) & 0xFF;
    try {
o421.o149 = (o1("typeDetail"));
}catch(e){}
    try {
o421.o366 = (this);
}catch(e){}
    try {
o421.o365 = true;
}catch(e){}
    try {
o421.o148 = (o421.o148 & 0xFF00) | o586;
}catch(e){}
  }+"failed");
}catch(e){}
}catch(e){}
}

//Test Case 1: Testing Array of length 2^29 (max length of the tagged integer)

var o8={ value: 5 }
try {
o1(o8.this.o107 = 100,536870912,o43[o39]++, "\"Testing Array of length 2^29 \"");
}catch(o5){}

// Test Case 2:Testing Array of length 2^29+1(One more than the max length of the tagged integer)

var Array=o1106(o308 | 0, o1059 | 0, o189 | 0) | 0.o10(function () { try {
o12.o13('obj0.prop0 valueOf');
}catch(e){} try {
return 3;
}catch(e){} })
try {
o1(o9.length, 536870913, o0++,"\"Testing Array of length 2^29+1 \"");
}catch(e){}

// Test Case 3:Testing an array of length 2^29 -1 (One less than the max length of the tagged integer)

var o447=new Array(536870911)
try {
o1(o10.length, 536870911, o0++,"\"Testing Array of length 2^29-1 \"");
}catch(e){}

//Test Case 4:Testing an array of length 2^32-1 ( max length of integer)
var o11 = []
try {
o1(o11.length ,4294967295, o0++,"\"Testing Array of length 2^32-1 \"");
}catch(e){}

//Test Case 5:Testing an array of length greater than the max length of the Integer

try {
try
{
    var o12=new Array(1024*1024*1024*4)
    try {
o1(1,0,"\"Testing an array of length >2^32 Did not raise an exception\"")
}catch(e){}
}
catch(o13)
{
    try {
o1(o12,undefined,o0++,"\"Testing an array of length greater than the max length of the Integer\"")
}catch(e){}
}
}catch(e){}

//Test Case 6:Testing Array of length 0 (Ensure tagged integers do not include the control bit as their length)

function o6(constructor, name, type, o7) {
                var o8 = Object.getOwnPropertyDescriptor(constructor, name);
                var o9 = constructor.name + "." + name;

                try {
o4.o10(o8.writable, o9 + ".writable === false");
}catch(e){}
                try {
o4.o10(o8.enumerable, o9 + ".enumerable === false");
}catch(e){}
                try {
o4.o11(o7, o8.configurable, o9 + ".configurable === " + o7);
}catch(e){}
                try {
o4.o11(type, typeof o8.value, "typeof " + o9 + " === '" + type + "'");
}catch(e){}
            }
try {
o1(o14.length, 0, o0++,"\"Testing Array of length 0 \"");
}catch(e){}

//Test Case 7:Testing Array of length 2^29 after changing the length property

var o15=new Array(536870911)
try {
o15.length=536870912
}catch(e){}
try {
o1(o15.length, 536870912,o0++, "\"Testing Array of length 2^29 after changing the length property \"")
}catch(e){}

//test case 8 testing array of length -1
try {
try
{
var o16=new Array(3);
try {
o16.length=-1
}catch(e){}
try {
o1(1,0,"\"Testing an array length property with -1 Did not raise an exception\"")
}catch(e){}
}
catch(o13)
{
try {
o1(o16.length, 3, o0++,"\"Testing negative array length property \"")
}catch(e){}

}
}catch(e){}

try {
o6.o7("Done");
}catch(e){}

