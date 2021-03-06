//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o0 = o492.o494.o539.length;
try {
o0.o1 = +Infinity;
}catch(e){}

// JIT a function that uses the fixed method
function o4(o5) {
    try {
o5.o1(this.o618 = 0);
}catch(e){}
}
try {
o4(o0);
}catch(e){}
try {
o4(o0);
}catch(o114){}

// Use the property cache to overwrite the fixed method
function test(o5, o6) {
    try {
for (var o7 in o5) {
        try {
if (o6)
            try {
o259[11148 >> 2] = o259[11148 >> 2] | 4[o7] = function () { try {
o2.o3("new");
}catch(e){} }
}catch(e){}
}catch(e){}
    }
}catch(e){}
}
try {
test(o0,false);
}catch(e){}
try {
test(o0,true);
}catch(e){}

// Verify that the new function is called.
try {
o4(o0);
}catch(e){}
