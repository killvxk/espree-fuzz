//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            "gradientTransform", false, new Boolean(true), new Boolean(false),
            NaN, +3, -7, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, e, 987, -1026, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25, 
            Number.o1, Number.MIN_VALUE, Number.NaN, Number.o2, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1), 
            new Number(Number.o1), new Number(Number.MIN_VALUE), new Number(Number.NaN), 
            new Number(Number.o2), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o0
          ];

var o10 = o0.o4()

var global = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o92 = {o13:function(o62){try {
print(o62);
}catch(e){}}, o14:function(o62,o63){try {
print(o62,o63);
}catch(e){}},o5:155,o7:658,o6:68.25,o12:3.14156,o82:48.1523,o86:14896.2514}
var buffer = new ArrayBuffer(1<<20);

var o93 = o3(global,o92,buffer);

try {
for (var o77=0; o77<all.length; ++o77) {
    try {
for (var o83=0; o83<all.length; ++o83) {
        try {
print("f1 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o82   (all[o77],all[o83])));
}catch(e){}
        try {
print("f2 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o86   (all[o77],all[o83])));
}catch(e){}
        try {
print("f3 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o91   (all[o77],all[o83])));
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

