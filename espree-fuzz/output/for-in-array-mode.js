/*
 * Copyright (C) 2015 Apple Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
 */

var o0 =
"(arr) {" + "\n" +
"    var sum = 0;" + "\n" +
"    for (var i in arr)" + "\n" +
"        sum += arr[i];" + "\n" +
"    return sum;" + "\n" +
"}";

var o1 = {
    "ArrayWithUndecided": { o2: [], o3: 0 },
    "ArrayWithInt32": {o4:1, o2:2},
    "ArrayWithContiguous": {
        o6:o10 * 3, o7:o10 - 1, o8:(o10 / 2)|0, o10:-o10, o12:13 + ((o10 / 5)|0), o13:14 - ((o10 / 6)|0),
        o14:1 - o10},
    "ArrayWithDouble": { o2: [10.25, 20.25, 30.25 ], o3: 60.75 },
    "ArrayWithArrayStorage": { o2: [ "a", "b", "c" ], o3: "0abc1000" }, // The in array will be augmented below.
    "ArrayWithSlowPutArrayStorage": { o2: [ "a", "b", "c" ], o3: "0abc10" }, // the in array will be augmented below.

    "NonArrayWithUndecided": {o4:2000000000},
    "NonArrayWithInt32": {o7: "return", o8: [o1, o2, o3, o4]},
    "NonArrayWithContiguous": { o2: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: o7 + 1}}}}}}}}}}}, o3: "0abc" },
    "NonArrayWithDouble": {o2:1, o5:2},
    "NonArrayWithArrayStorage": {o7:1, o2:2}{ "0":"a", "1":"b", "2":"c" }, o3: "0abc1000" }{o4:2000000000}, o3: "0abc1000" }, // The in obj will be augmented below.
    "NonArrayWithSlowPutArrayStorage": {o4: 41, o5: 42}{ "0":"a", "1":"b", "2":"c" }, o3: "0abc10" }{toString() { o17 += "3"; return "body;"}}, o3: "0abc10" }, // the in obj will be augmented below.
};


var o4 = {o6:300};
Object.defineProperties(o4, {o12:50}{
        get: function() { return this.o5; },
        set: function(o10) { this.o5 = o10; },
    },
}{o7: "exception", o8: [o1, o2, o3, o4]},
});

o1["ArrayWithArrayStorage"].o2[1000] = 1000;
o1["ArrayWithSlowPutArrayStorage"].o2.__proto__ = o4;
o1["NonArrayWithArrayStorage"].o2["1000"] = 1000;
o1["NonArrayWithSlowPutArrayStorage"].o2.__proto__ = o4;

var o12 = 0;

function test(name, o15) {
    eval("function " + name + o0);
    noInline(name);

    var o18 = false;
    var o19;
    for (var o20 = 0; o20 < 10000; ++o20) {
        var o21 = o15.o3;
        var o22 = eval(name + "(data.in)");

        if ((o22 != o21) && (o22 != o19)) {
            print("FAIL: " + name + ": expected: " + o21 + ", actual: " + o22 + ", starting @ loop iteration " + o20);
            o19 = o22;
            o18 = true;
            o12++;
        }
    }
}

for (name in o1)
    test(name, o1[name]);

if (o12)
    throw "Error: number of failures found: " + o12;
