//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Disabling ES6 Array builtins using this['constructor'] property to construct their return values

try { {} } catch(e) {}try { {} } catch(e) {}

var o2 = [
    o1("HTMLElement"),
    {
        name: "Array.prototype.filter",
        o3: function () {
            var o525 = o489.o617(o31, {
            o696: true
        });
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.filter.call(o4, function() { try {
return true;
}catch(e){} });

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.filter should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.filter should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.filter does not set the length property of returned object, but it is Array.");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.map",
        e: function () {
            var o4 = ['a','b','c'];
            try {
o4['constructor'] = Number;
}catch(e){}

            var o5 = Array.prototype.map.call(o4, function(o10) { try {
return o10;
}catch(e){} });

            try {
o6.o7(Array.isArray(o5), "Return from Array.prototype.map should be an Array object");
}catch(e){}
            try {
o6.o8(o5 instanceof Number, "Return from Array.prototype.map should not have been constructed from Number");
}catch(e){}
            try {
o6.o9(3, o5.length, "Array.prototype.map does not set the length property of returned object, but it is Array.");
}catch(e){}
        }
    },
    {
        name: "Array.prototype.slice",
        o5: function () {
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
    o89 += "setter was called.",
];

try {
o11.o12(o2, o1("HTMLStyleElement"));
}catch(e){}
