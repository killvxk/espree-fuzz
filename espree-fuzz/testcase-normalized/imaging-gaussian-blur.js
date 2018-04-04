/*
 Copyright (C) 2007 Apple Inc.  All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

 THIS SOFTWARE IS PROVIDED BY APPLE COMPUTER, INC. ``AS IS'' AND ANY
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
*/

if(typeof(o0) === "undefined")
{
    var o0 = {
        o1: print
    }
}

function o3(o4) {
    o5.o6("console").o7 = o4 + "ms";
    if (o8.o9) {
        o9.o10(o4);
    }
}


var o12 = 10; // radius
var o13, o14, o15;

function o16() {
   var o17 = o12 * o12;
   var o18 = 2 * Math.o20 * o17;
   o13 = [];
   o13.push([]);
   var o22 = 0, o23;

   do {
       var o24 = Math.o25(-(o22 * o22) / (2 * o17)) / o18;
       if (o24 < 1e-3) break;
       o13[0].push(o24);
       ++o22;
   } while (o22 < 7);

   o14 = o22;
   for (o23 = 1; o23 < o14; ++o23) {
       o13.push([]);
       for (o22 = 0; o22 < o14; ++o22) {
           var o24 = Math.o25(-(o22 * o22 + o23 * o23) / (2 * o17)) / o18;
           o13[o23].push(o24);
       }
   }
   o15 = 0;
   for (o23 = 1 - o14; o23 < o14; ++o23) {
       for (o22 = 1 - o14; o22 < o14; ++o22) {
           o15 += o13[Math.abs(o23)][Math.abs(o22)];
       }
   }
}

o16();

var o27 = 400, o28 = 267;


var o29 = new Date();

//print("i: " + i + "j: " + j);

function o31() {
    for (var o32 = 0; o32 < o28; ++o32) {
        for (var o33 = 0; o33 < o27; ++o33) {
            var o34 = 0, o24 = 0, o35 = 0, o36 = 0;
            for (var o23 = 1 - o14; o23 < o14; ++o23) {
                if (o32 + o23 < 0 || o32 + o23 >= o28) continue;
                for (var o22 = 1 - o14; o22 < o14; ++o22) {
                    if (o33 + o22 < 0 || o33 + o22 >= o27) continue;
                    o34 += o11[4 * ((o32 + o23) * o27 + (o33 + o22)) + 0] * o13[Math.abs(o23)][Math.abs(o22)];
                    o24 += o11[4 * ((o32 + o23) * o27 + (o33 + o22)) + 1] * o13[Math.abs(o23)][Math.abs(o22)];
                    o35 += o11[4 * ((o32 + o23) * o27 + (o33 + o22)) + 2] * o13[Math.abs(o23)][Math.abs(o22)];
                    o36 += o11[4 * ((o32 + o23) * o27 + (o33 + o22)) + 3] * o13[Math.abs(o23)][Math.abs(o22)];
            }
            }
            o11[4 * (o32 * o27 + o33) + 0] = o34 / o15;
            o11[4 * (o32 * o27 + o33) + 1] = o24 / o15;
            o11[4 * (o32 * o27 + o33) + 2] = o35 / o15;
            o11[4 * (o32 * o27 + o33) + 3] = o36 / o15;
    }
    }
    return o11;
}
o31();

var o37 = new Date() - o29;

o0.o1("### TIME:", o37, "ms");