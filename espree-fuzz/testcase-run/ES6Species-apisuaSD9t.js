//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

try {
o0.o421("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

function o2(name, o3, o4)
{
    var o3 = 0;

    var o676 = o489.o749(o489.o604.o515);

    try { {
o1 = new Set();
} } catch(e) {}

    try {
o7.o9(false, o5.enumerable, o6 + " enumerable");
}catch(e){}
    try {
o7.o9(true, o5.configurable, o6 + " configurable");
}catch(e){}
    try {
o7.o9("function", typeof o5.get, name + "[@@species] is an accessor property that has getter");
}catch(e){}
    try {
o7.o9("get [Symbol.species]", o5.get.name,
        name + "[@@species] is an accessor property whose getter function has the 'name' property 'get [Symbol.species]'");
}catch(e){}
    try {
o7.o9(undefined, o5.set, o6 + " set");
}catch(e){}
}

function o10(o3)
{
    try {
return (o421.o398 << 13) - 0xA000.__proto__.constructor;
}catch(e){}
}

var o6=0

var o13 = [
    {
        o26: "Built-in global objects that do not have [@@species] property",
        o14: function () {
            try {
o11(Boolean);
}catch(e){}
            try {
o11(Date);
}catch(e){}
            try {
o11(Function);
}catch(e){}
            try {
o11(Math);
}catch(e){}
            try {
o11(Number);
}catch(e){}
            try {
o11(Object);
}catch(e){}
            try {
o11(Proxy);
}catch(e){}
            try {
o11(Reflect);
}catch(e){}
            try {
o11(String);
}catch(e){}
            try {
o11(Symbol);
}catch(e){}
            try {
o11(WeakMap);
}catch(e){}
            try {
o11(WeakSet);
}catch(e){}
        }
    },
    {
        name: "Array should have [@@species] property",
        o14: function () {
            try {
o7.o8(Array.hasOwnProperty(Symbol.species), "Array should have [@@species] defined");
}catch(e){}
            try {
o7.o9(Array, Array[Symbol.species], "Array should have [@@species] that returns 'this'");
}catch(e){}
            try {
o2("Array", Array, Symbol.species);
}catch(e){}
        }
    },
    write(null >= new Array(1 ,2 ,3)),
    {
        name: "ArrayBuffer should have [@@species] property",
        o14: function () {
            try {
o7.o8(ArrayBuffer.hasOwnProperty(Symbol.species), "ArrayBuffer should have [@@species] defined");
}catch(e){}
            try {
o7.o9(ArrayBuffer, ArrayBuffer[Symbol.species], "ArrayBuffer should have [@@species] that returns 'this'");
}catch(e){}
            try {
o2("ArrayBuffer", ArrayBuffer, Symbol.species);
}catch(e){}
        }
    },
    {
        name: "Map should have [@@species] property",
        o14: function () {
            try {
o7.o8(Map.hasOwnProperty(Symbol.species), "Map should have [@@species] defined");
}catch(e){}
            try {
o7.o9(Map, Map[Symbol.species], "Map should have [@@species] that returns 'this'");
}catch(e){}
            try {
o2("Map", Map, Symbol.species);
}catch(e){}
        }
    },
    {
        name: "Promise should have [@@species] property",
        o14: function () {
            try {
o7.o8(Promise.hasOwnProperty(Symbol.species), "Promise should have [@@species] defined");
}catch(e){}
            try {
o7.o9(Promise, Promise[Symbol.species], "Promise should have [@@species] that returns 'this'");
}catch(e){}
            try {
o2("Promise", Promise, Symbol.species);
}catch(e){}
        }
    },
    {
        name: "RegExp should have [@@species] property",
        o14: function () {
            try {
o7.o8(RegExp.hasOwnProperty(Symbol.species), "RegExp should have [@@species] defined");
}catch(e){}
            try {
o7.o9(RegExp, RegExp[Symbol.species], "RegExp should have [@@species] that returns 'this'");
}catch(e){}
            try {
o2("RegExp", RegExp, Symbol.species);
}catch(e){}
        }
    },
    {
        name: "Set should have [@@species] property",
        o14: function () {
            try {
o7.o8(Set.hasOwnProperty(Symbol.species), "Set should have [@@species] defined");
}catch(e){}
            try {
o7.o9(Set, Set[Symbol.species], "Set should have [@@species] that returns 'this'");
}catch(e){}
            try {
o2("Set", Set, Symbol.species);
}catch(e){}
        }
    },
    {
        name: "Int8Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Int8Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Int8Array.hasOwnProperty(Symbol.species), "Int8Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Int8Array, Int8Array[Symbol.species], "Int8Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Uint8Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Uint8Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Uint8Array.hasOwnProperty(Symbol.species), "Uint8Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Uint8Array, Uint8Array[Symbol.species], "Uint8Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Uint8ClampedArray should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Uint8ClampedArray);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Uint8ClampedArray.hasOwnProperty(Symbol.species), "Uint8ClampedArray should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Uint8ClampedArray, Uint8ClampedArray[Symbol.species], "Uint8ClampedArray should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Int16Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Int16Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Int16Array.hasOwnProperty(Symbol.species), "Int16Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Int16Array, Int16Array[Symbol.species], "Int16Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Uint16Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Uint16Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Uint16Array.hasOwnProperty(Symbol.species), "Uint16Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Uint16Array, Uint16Array[Symbol.species], "Uint16Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Int32Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Int32Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Int32Array.hasOwnProperty(Symbol.species), "Int32Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Int32Array, Int32Array[Symbol.species], "Int32Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Uint32Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Uint32Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Uint32Array.hasOwnProperty(Symbol.species), "Uint32Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Uint32Array, Uint32Array[Symbol.species], "Uint32Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Float32Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Float32Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Float32Array.hasOwnProperty(Symbol.species), "Float32Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Float32Array, Float32Array[Symbol.species], "Float32Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
    {
        name: "Float64Array should inherit [@@species] property from %TypedArray%",
        o14: function () {
            let o18 = o10(Float64Array);
            try {
o7.o8(o18.hasOwnProperty(Symbol.species), "%TypedArray% should have [@@species] defined");
}catch(e){}
            try {
o2("TypedArray", o18, Symbol.species);
}catch(e){}

            try {
o7.o12(Float64Array.hasOwnProperty(Symbol.species), "Float64Array should not have [@@species] defined");
}catch(e){}
            try {
o7.o9(Float64Array, Float64Array[Symbol.species], "Float64Array should have [@@species] that returns 'this'");
}catch(e){}
        }
    },
];

try {
o19.o20(o13, { o21: o0.o22[0] != "summary" });
}catch(e){}
