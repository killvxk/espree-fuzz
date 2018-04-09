//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Disabling ES6 Array builtins using this['constructor'] property to construct their return values

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Array.prototype.concat",
        o3: function () {
            var o4 = ['a','b','c'];
            o4['constructor'] = Number;

            var o5 = Array.prototype.concat.call(o4, [1,2,3]);

            o6.o7(Array.isArray(o5), "Return from Array.prototype.concat should be an Array object");
            o6.o8(o5 instanceof Number, "Return from Array.prototype.concat should not have been constructed from Number");
            o6.o9(6, o5.length, "Array.prototype.concat sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.filter",
        o3: function () {
            var o4 = ['a','b','c'];
            o4['constructor'] = Number;

            var o5 = Array.prototype.filter.call(o4, function() { return true; });

            o6.o7(Array.isArray(o5), "Return from Array.prototype.filter should be an Array object");
            o6.o8(o5 instanceof Number, "Return from Array.prototype.filter should not have been constructed from Number");
            o6.o9(3, o5.length, "Array.prototype.filter does not set the length property of returned object, but it is Array.");
        }
    },
    {
        name: "Array.prototype.map",
        o3: function () {
            var o4 = ['a','b','c'];
            o4['constructor'] = Number;

            var o5 = Array.prototype.map.call(o4, function(o10) { return o10; });

            o6.o7(Array.isArray(o5), "Return from Array.prototype.map should be an Array object");
            o6.o8(o5 instanceof Number, "Return from Array.prototype.map should not have been constructed from Number");
            o6.o9(3, o5.length, "Array.prototype.map does not set the length property of returned object, but it is Array.");
        }
    },
    {
        name: "Array.prototype.slice",
        o3: function () {
            var o4 = ['a','b','c'];
            o4['constructor'] = Number;

            var o5 = Array.prototype.slice.call(o4);

            o6.o7(Array.isArray(o5), "Return from Array.prototype.slice should be an Array object");
            o6.o8(o5 instanceof Number, "Return from Array.prototype.slice should not have been constructed from Number");
            o6.o9(3, o5.length, "Array.prototype.slice sets the length property of returned object");
        }
    },
    {
        name: "Array.prototype.splice",
        o3: function () {
            var o4 = ['a','b','c','d','e','f'];
            o4['constructor'] = Number;

            var o5 = Array.prototype.splice.call(o4, 0, 3);

            o6.o7(Array.isArray(o5), "Return from Array.prototype.splice should be an Array object");
            o6.o8(o5 instanceof Number, "Return from Array.prototype.splice should not have been constructed from Number");
            o6.o9(3, o5.length, "Array.prototype.splice sets the length property of returned object");
        }
    },
];

o11.o12(o2, { o13: o0.o14[0] != "summary" });
