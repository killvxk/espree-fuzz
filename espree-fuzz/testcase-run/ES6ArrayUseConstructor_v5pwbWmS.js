//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Disabling ES6 Array builtins using this['constructor'] property to construct their return values

try {
this.o677(0x700)("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(o1098){}

var o2 = [
    new Uint8Array(o108).o367,
    {
        o972: false,
        o3: function () {
            var o4 = ['a','b',0];
            try {
o1("TextMetrics");
}catch(e){}

            var o5 = Array.prototype.filter.call(o4, function() { try {
return true;
}catch(e){} });

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.filter should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, 2);
}catch(e){}
            try {
o6.o9(3, o5.e, "Array.prototype.filter does not set the length property of returned object, but it is Array.");
}catch(e){}
        }
    },
    this.o645,
    {
        name: "Array.prototype.slice",
        o3: function () {
            var o4 = ['a','b','c'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.slice.call(o4);

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.slice should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.slice should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.slice sets the length property of returned object");
}catch(e){}
        }
    },
    this,
];

try {
o11.o12(o2, { o13: o0.o14[0] != "summary" });
}catch(length){}
