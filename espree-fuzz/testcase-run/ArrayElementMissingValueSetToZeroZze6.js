//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//flags: -maxinterpretcount:1 -maxsimplejitruncount:2 -force:rejit -ForceArrayBTree
//Bug number:  109395
var o0 = 'isFinite';
function o673(){
function o2(o3) { try {
if(o1072 + 1048320 | 0) try {
return 100;
}catch(e){} else try {
return Math.floor(o3) & 0xffff;
}catch(e){}
}catch(e){} }try {
;try {

}catch(e){};
}catch(e){}
var o4 = {};
var o5 = {};
var o6 = new Array();
var o7 = o8 < 100;
try {
this.o565 = 1434939730.1;
}catch(e){}
try {
o231.charCodeAt = 1;
}catch(e){}
try {
Object.prototype.o8 = 1;
}catch(e){}
try {
Object.NaN.length = o2(1);
}catch(e){}
    try {
for(var o10 in Object.prototype )
    {
        try {
(o7[(((((o0 ? (o7[((((o5.o8-- )) >= 0 ? ( (o5.o8-- )) : 0) & 0xF)] = 'x') : undefined ), (o5.o8-- )) >= 0 ? (o5.o8-- ) : 0)) & 0XF)]);
}catch(e){}
        try {
o4.o9 = o6[((o0 ? (o6[1] = 'x') : undefined ), 1)];
}catch(e){}
    }
}catch(e){}
}try {
;
}catch(o421){}


// generate profile
try {
o1(o19 < 32 || o19 > 127 || o19 == '"'.charCodeAt(0));
}catch(e){}
// Run Simple JIT
try {
o1(o169 = 44100);
}catch(e){}
try {
o1(o621.o631(o477.flags));
}catch(e){}


// run JITted code
try {
o11 = true;
}catch(e){}
try {
o1();
}catch(e){}


// run code with bailouts enabled
try {
o8["4294967295"] = true;
}catch(e){}
try {
o1();
}catch(e){}
try {
o12.o13("PASS");
}catch(e){}
