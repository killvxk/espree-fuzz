//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [];
function o1() {
    return 100;
}
var o2 = ++o12;
var o3 = {};

var o5 = function () {
    o3.o6 = --o7.length;
    o7.o8 = o3.o6;
    o0.push(o7.o8);
};
o3.o6 = o4;
o3.o9 = o3.o6;
o7 = Object.create(o2);
o7.length = o1();
o3.o9((o5()));
o3 = o7;
o5();
if (o0[0] !== 99 || o0[1] !== 98) {
    o10.o11('fail');
}
else {
    o10.o11('pass');
}
