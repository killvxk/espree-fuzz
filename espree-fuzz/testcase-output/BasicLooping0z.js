//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {}

var all = [ o9, null,
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

function o3() {
    "use asm";

    function o4(o5,o6) {
        o5 = o5|0;
        o6 = +o6;
        if( (o5|0) > 10){
            o5 = 10;
        }
        while( (o5|0) > 0){
            o5 = (o5 - 1)|0;
            o6 = +(o6 + 1.0);
            if( (o5|0) == 0 ){
                break;
            }
        }
        return +o6;
    }

    function o7(o5,o6) {
        o5 = o5|0;
        o6 = +o6;
        if( (o5|0) > 10){
            o5 = 10;
        }
        do{
            o5 = (o5 - 1)|0;
            if((o5|0) > 10){
                o5 = 10;
            }
            o6 = +(o6 + 1.0);
            if( (o5|0) == 0 ){
                break;
            }
        }
        while( (o5|0) > 0 );

        return +o6;
    }

    function o8(o5,o6) {
        o5 = o5|0;
        o6 = o6|0;
        var o9=0;

        if( (o5|0) > 10){
            o5 = 10;
        }
        if( (o6|0) <= 0){
            o6 = 1;
        }
        for(; (o9|0) < (o5|0) ; o9 = (o9+1)|0) {
            o6 = (o6 + 1)|0;
        }

        for(o9=0; (o9|0) < (o5|0) ; o9 = (o9+1)|0 ) {
            o6 = (o6 + 2)|0;
        }

        for(;;){
            o6 = o6 << 1;
            if( (o6|0) > (1<<20)) {
                break;
            }
        }
        return o6|0;
    }

    return {
        o10 : o4,
        o11 : o7,
        o12 : o8,
    };
}


var o13 = o3();


for (var o9=0; o9<all.length; ++o9) {
    for (var o14=0; o14<all.length; ++o14) {
        print("f1 a["+o9+"](" + all[o9] +") , a["+o14+"]("+all[o14]+") = " + (o13.o10(all[o9],all[o14])));
        print("f2 a["+o9+"](" + all[o9] +") , a["+o14+"]("+all[o14]+") = " + (o13.o11(all[o9],all[o14])));
        print("f3 a["+o9+"](" + all[o9] +") , a["+o14+"]("+all[o14]+") = " + (o13.o12(all[o9],all[o14])));
    }
}
