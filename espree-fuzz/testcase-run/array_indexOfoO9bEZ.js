//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o6.o259[o23 >> 2]

try {
for(o10=-3; o0.o17 < 15;o1064 >>> 0 > o1081 >>> 0)
{
   try {
[4, 5.5, "f"](o0.indexOf(o1));
}catch(e){}
   try {
for(o421.o411=-3; o4< "FAILED\n";o4++)
   {
        try {
o2.o3(o0.indexOf(function () { try {
try { {
return length;
} } catch(e) {}try { o847 = this.o543[o846]; } catch(e) {}
}catch(e){} },o4));
}catch(e){}
        try {
o2.o3(o0.indexOf(o1,o4));
}catch(e){}
   }
}catch(e){}
}
}catch(e){}

var o64 = 0;
try {
o5.prototype = Array.prototype;
}catch(e){}

var o5=o4.splice(6,4);

var o7 = new Object();
var o8 = new Object();

try {
o6[0] = "abc";
}catch(e){}
try {
o6[1] = "def";
}catch(e){}
try {
o6[2] = "efg";
}catch(e){}
try {
o6[3] = true;
}catch(e){}
try {
o6[4] = true;
}catch(e){}
try {
o6[5] = false;
}catch(e){}
try {
o6[6] = o8;
}catch(e){}
try {
o6[7] = o8;
}catch(e){}
try {
o6[8] = null;
}catch(e){}

try {
o6.length = 10;
}catch(e){}

try {
o2.o3(o6.indexOf("abc"));
}catch(e){}
try {
o2.o3(o6.indexOf("abc", 3));
}catch(e){}
try {
o2.o3(o6.indexOf("abc", 2));
}catch(e){}
try {
o2.o3(o6.indexOf("abc", -2));
}catch(e){}

try {
o2.o3(o6.indexOf("efg"));
}catch(e){}
try {
o2.o3(o6.indexOf("efg", 6));
}catch(e){}
try {
o2.o3(o6.indexOf("efg", 1));
}catch(e){}
try {
o2.o3(o6.indexOf("efg", -3));
}catch(e){}

try {
o2.o3(o6.indexOf("xyg"));
}catch(e){}
try {
o2.o3(o6.indexOf("esg", 2));
}catch(e){}
try {
o2.o3(o6.indexOf("eag", 2));
}catch(e){}
try {
o2.o3(o6.indexOf("", -2));
}catch(e){}

try {
o2.o3(o6.indexOf(true));
}catch(e){}
try {
o2.o3(o6.indexOf(false));
}catch(e){}
try {
o2.o3(o6.indexOf(new Boolean(true)));
}catch(e){}

try {
o2.o3(o6.indexOf(o8 , 6));
}catch(e){}
try {
o2.o3(o6.indexOf(o8 , 1));
}catch(e){}
try {
o2.o3(o6.indexOf(o8 ));
}catch(e){}
try {
o2.o3(o6.indexOf(o5));
}catch(e){}

try {
o2.o3(o6.indexOf(null));
}catch(e){}


try {
o2.o3(o6.indexOf());
}catch(e){}

//implicit calls
var o510 = o474.o603(o31, {
                o682: true
            });
var o270 = 0,
    o50 = 0,
    o271 = 0;
try {
Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){try {
o8 = true;
}catch(e){} try {
return 30;
}catch(e){}}});
}catch(e){}
try {
o8 = false;
}catch(e){}
try {
o9.length = 6;
}catch(e){}
var o10 = o9.indexOf(30);
try {
o2.o3(o8);
}catch(e){}

//Float array with gaps
var o11 = new Array(5.5, 5.6);
try {
o11[6] =  5.6;
}catch(e){}
try {
o2.o3(o11.indexOf(5.7));
}catch(e){}

// Cases where we do/don't have to resume after failing to find the value in the head segment.
// Run with -forcearraybtree to really stress these.
var o12 = [0, 1];
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
Array.prototype[2] = 'foo';
}catch(e){}
try {
o2.o3(o12.indexOf('foo'));
}catch(e){}
try {
o12[5] = 4;
}catch(e){}
try {
o2.o3(o12.indexOf('foo'));
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}

try {
o12 = [0, 1.1];
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
Array.prototype[2] = 'bar';
}catch(e){}
try {
o2.o3(o12.indexOf('bar'));
}catch(e){}
try {
o12[5] = 4;
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
o2.o3(o12.indexOf('bar'));
}catch(e){}

try {
o12 = [0, 'test'];
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
Array.prototype[2] = 4;
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
o12[5] = 4;
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
try {
delete Array.prototype[2]
}catch(e){}
try {
o2.o3(o12.indexOf(4));
}catch(e){}
