//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Verifies the order of getOwnPropertyDescriptor trap called for ownKeys
function o0() {
    var o1 = o70 >> 2;
    var o29 = o1("createTexture").o30  ;

    var o30 = o27.valueOf(this);

    try {
print('***Testing Object.getOwnPropertyNames()');
}catch(e){}
    try {
print(Object.getOwnPropertyNames(o4));
}catch(e){}
    try {
try { {} } catch(o70) {}try { o24 += o22; } catch(e) {}try { o7.o16(function() { try {
'use strict';
}catch(e){} try {
o3.caller = 'something';
}catch(e){} }, o17, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode"); } catch(e) {}
}catch(e){}
    try {
print(Object.keys(o4));
}catch(e){}
    try {
print('***Testing Object.getOwnPropertySymbols()');
}catch(e){}
    try {
print(Object.getOwnPropertySymbols(o4).length);
}catch(e){}

    try {
print('***Testing Object.freeze()');
}catch(e){}
    try {
try{
        try {
Object.freeze(o4);
}catch(e){}
        try {
print('Object.freeze should fail because underlying OwnPropertyKeys should fail since target becomes non-extensible');
}catch(e){}
    } catch (o5) {
        try {
if (!(o5 instanceof o6)) {
            try {
o7('incorrect instanceof Error' + o5);
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}

// Verifies that we don't call GetPropertyDescriptor of target for Object.keys unnecessarily if we throw TypeERROR before
function o8() {
    var o1 = {};
    try {
Object.defineProperty(o1, o421, { value: 5, configurable: false });
}catch(e){}
    var o2 = new Proxy(o1, {
        getOwnPropertyDescriptor: function (target, o3) {
            try {
print(o257 + o3.toString());
}catch(o391){}
            try {
return Object.getOwnPropertyDescriptor(target, o3);
}catch(e){}
        },

        ownKeys: o474.o667 = o510.o31
    });


    var o41 = stdlib.o25.next().o42;

    try {
print('***Testing Object.keys()');
}catch(e){}
    try {
try{
        try {
print(Object.keys(o4));
}catch(e){}
        try {
print('Should throw TypeError because ownKeys doesnt return non-configurable key.');
}catch(e){}
    } catch (o5) {
        try {
if (!(o5 instanceof o6)) {
            try {
print('incorrect instanceof Error');
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}

function o9() {
    var o1 = {};
    var o10 = 0;
    var o2 = new Proxy(o1, {

        get: function (target, o3, o11) {
            try {
print('get on proxy : ' + o3.toString());
}catch(e){}
            try {
return o10++ * 5;
}catch(e){}
        },
        getOwnPropertyDescriptor: function (target, o3) {
            try {
print('getOwnPropertyDescriptor on proxy : ' + o3.toString());
}catch(e){}
            try {
return { configurable: true, enumerable: true, value: 10 };
}catch(e){}
        },

        ownKeys: function (target) {
            try {
print('ownKeys for proxy');
}catch(e){}
            try {
return ["prop0", "prop1", Symbol("prop2"), Symbol("prop5")];
}catch(e){}
        }
    });

    var o4 = new Proxy(o2, {
        get: function (target, o3, o11) {
            try {
print('get on proxy2 : ' + o3.toString());
}catch(e){}
            try {
return Reflect.get(target, o3, o11);
}catch(e){}
        },
        getOwnPropertyDescriptor: function (target, o3) {
            try {
print('getOwnPropertyDescriptor on proxy2 : ' + o3.toString());
}catch(e){}

            try {
return { configurable: true, enumerable: true, value: 10 };
}catch(e){}
        },

        ownKeys: function (target) {
            try {
print('ownKeys for proxy2');
}catch(e){}
            try {
return ["prop2", "prop3",  Symbol("prop4"), Symbol("prop5")];
}catch(e){}
        }
    });

    try {
print('***Testing Object.assign()');
}catch(e){}
    var o12 = Object.assign(o1, null, o2, o4);
    var o13 = Object.getOwnPropertySymbols(o12);
    var o14 = Object.getOwnPropertyNames(o12);
    try {
print("PropertyNames returned : ");
}catch(e){}
    try {
for (o15 = 0; o15 < o14.length; o15++)
    {
        try {
print(o14[o15].toString())
}catch(e){}
    }
}catch(e){}
    try {
print("PropertySymbols returned : ");
}catch(e){}
    try {
for (o15 = 0; o15 < o13.length; o15++)
    {
        try {
print(o13[o15].toString())
}catch(e){}
    }
}catch(e){}

}

var o4 = "b"

try {
o0();
}catch(e){}
try {
o8();
}catch(e){}
try {
o9();
}catch(e){}
try { o9(17, Math.clz32, 0x00007ABC, "17 leading zero bits in the uint32 value 0x00007ABC, same as 0x00004000"); } catch(e) {}
