//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ undefined, null,
            true, false, new Boolean(true), new Boolean(false),
            NaN, +0, -0, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, 654, 987, -1026, +98768.2546, -88754.15478,
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

function o3(stdlib,o4,buffer) {
    "use asm";

    // numerical mutable variable
    var o5 = 0, o6 = 0.0, o7 = -5;
    // foreign imports
    var o8 = o4.o5|0;
    var o9 = o4.o7|0;
    var o10 = +o4.o6;
    var o11 = +o4.o12;
    var o13 = o4.o13;
    var o14 = o4.o14;
    
    // stdlib immutable variable type double
    var o15 = stdlib.Infinity, o16 = stdlib.NaN;
    // stdlib math (double) -> double
    var o17 = stdlib.Math.acos ;
    var o18 = stdlib.Math.o19 ;
    var o20 = stdlib.Math.o21 ;
    var o22 = stdlib.Math.cos  ;
    var o23 = stdlib.Math.sin  ;
    var o24 = stdlib.Math.tan  ;
    var o25 = stdlib.Math.ceil ;
    var o26 = stdlib.Math.floor;
    var o27 = stdlib.Math.o28  ;
    var o29 = stdlib.Math.o30  ;
    var o31 = stdlib.Math.sqrt ;
    // stdlib math (signed) -> signed ^ (doublish) -> double
    var o32 = stdlib.Math.abs;
    // stdlib math (doublish, doublish) -> double
    var o33 = stdlib.Math.atan2;
    var o34 = stdlib.Math.o35;
    // stdlib math (int,int) -> signed
    var o36 = stdlib.Math.imul;
    // stdlib math imm variable double
    var o37 = stdlib.Math.o38;
    var o39 = stdlib.Math.o40;
    var o41 = stdlib.Math.o42;
    var o43 = stdlib.Math.o44;
    var o45 = stdlib.Math.o46;
    var o47 = stdlib.Math.o48;
    var o49 = stdlib.Math.o50;
    var o51 = stdlib.Math.o52;
    
    //views
    var o53=new stdlib.Int8Array(buffer);
    var o54=new stdlib.Int16Array(buffer);
    var o55=new stdlib.Int32Array(buffer);
    var o56=new stdlib.Uint8Array(buffer);
    var o57=new stdlib.Uint16Array(buffer);
    var o58=new stdlib.Uint32Array(buffer);
    var o59=new stdlib.Float32Array(buffer);
    var o60=new stdlib.Float64Array(buffer);
    
    function o61(o62,o63) {
        o62 = o62|0;
        o63 = o63|0;
        return ((o62|0)<(o63|0))|0;
    }
    
    function o64(o62,o63) {
        o62 = o62|0;
        o63 = o63|0;
        return ((o62|0)<=(o63|0))|0;
    }
   
    function o65(o62,o63) {
        o62 = o62|0;
        o63 = o63|0;
        return ((o62|0)>(o63|0))|0;
    }
    
    function o66(o62,o63) {
        o62 = o62|0;
        o63 = o63|0;
        return ((o62|0)>=(o63|0))|0;
    }
    
    function o67(o62,o63) {
        o62 = o62|0;
        o63 = o63|0;
        return ((o62|0)==(o63|0))|0;
    }
   
    function o68(o62,o63) {
        o62 = o62|0;
        o63 = o63|0;
        return ((o62|0)!=(o63|0))|0;
    }
    
    function o69(o62,o63) {
        o62 = +o62;
        o63 = +o63;
        return (o62<o63)|0;
    }
    
   
    function o70(o62,o63) {
        o62 = +o62;
        o63 = +o63;
        return (o62<=o63)|0;
    }
   
    function o71(o62,o63) {
        o62 = +o62;
        o63 = +o63;
        return (o62>o63)|0;
    }
  
    function o72(o62,o63) {
        o62 = +o62;
        o63 = +o63;
        return (o62>=o63)|0;
    }
    
  
    function o73(o62,o63) {
        o62 = +o62;
        o63 = +o63;
        return (o62==o63)|0;
    }
    
  
    function o74(o62,o63) {
        o62 = +o62;
        o63 = +o63;
        return (o62!=o63)|0;
    }
    
    function o75(o62,o63) {
        o62 = o62|0;
        o63 = o63|0;
        return (o62+o63)|0;
    }
    function o76(o62,o63) {
        o62 = o62|0;
        o63 = o63|0;
        return (o62-o63)|0;
    }
   
    function imul(o62,o63) {
        o62 = o62|0;
        o63 = o63|0;
        var o77 = 0;
        var o78 = 0;
        
        if( o63|0 > 10 ){
            o63 = 10;
        }   
        for(;(o77|0)<(o63|0);o77 = (o77+1)|0){
            o78 = (o78 + o62)|0;
        }
        return o78|0;
    }
  
    function o79(o62,o63) {
        o62 = o62|0;
        o63 = o63|0;
        return ((o62>>>0)/(o63>>>0))|0;
    }
    
    function add(o62,o63) {
        o62 = +o62;
        o63 = +o63;
        return +(o62+o63);
    }

    function sub(o62,o63) {
        o62 = +o62;
        o63 = +o63;
        return +(o62-o63);
    }

    function o80(o62,o63) {
        o62 = +o62;
        o63 = +o63;
        return +(o62*o63);
    }

    function o81(o62,o63) {
        o62 = +o62;
        o63 = +o63;
        return +(o62/o63);
    }
    
    function o82(o62,o63){
        o62 = o62|0;
        o63 = o63|0;
        var o77 = 0, o83 = 0;
        if(o67(o62,o63)|0){
            o77 = imul(o62,o75(o62,o62)|0)|0;
            o83 = imul(o79(o62,5)|0,imul(o62,2)|0)|0;
        }
        else {
            o77 = imul(o62,o75(o62,o63)|0)|0;
            o83 = imul(o79(o62,5)|0,o75(o62,o63)|0)|0;
        }
        if(o61(o77,o83)|0){
            o77 = o83;
        }
        else{
            o13(o83|0);
        }
        return o77|0;
    }
    
    function o84(o62,o63){
        o62 = +o62;
        o63 = +o63;
        var o77 = 0.0, o83 = 0.0;
        if(o73(o62,o63)|0){
            o77 = +o80(o62,+add(o62,o62));
            o83 = +o80(+o81(o62,5.5),+o80(o62,2.1));
        }
        else {
            o77 = +o80(o62,+add(o62,o63));
            o83 = +o80(+o81(o62,5.5),+add(o62,o63));
        }
        if(o69(o77,o83)|0){
            o77 = o83;
        }
        else{
            o13(o83);
        }
        return +o77;
    }
    
    function o85(o62,o63){
        o62 = o62|0;
        o63 = +o63;
        var o77 = 0, o83 = 0.0;
        o77 = o82(o62,~~(+o84(o63,5.5)))|0;
        o83 = +o84(o63,+(o82(o62,5)|0));
        o14(o77|0,o83);
        return o77|0;
    }
    
    var o86 = [o82,o82];
    var o87 = [o84,o84];
    
    
    return { 
        o82 : o82,
        o84 : o84,
        o85 : o85,
    };
}


var global = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o88 = {o13:function(o62){print(o62);}, o14:function(o62,o63){print(o62,o63);},o5:155,o7:658,o6:68.25,o12:3.14156,o82:48.1523,o84:14896.2514}
var buffer = new ArrayBuffer(1<<20);

var o89 = o3(global,o88,buffer);

for (var o77=0; o77<all.length; ++o77) {
    for (var o83=0; o83<all.length; ++o83) {
        print("f1 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o89.o82   (all[o77],all[o83])));
        print("f2 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o89.o84   (all[o77],all[o83])));
        print("f3 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o89.o85   (all[o77],all[o83])));
    }
}

