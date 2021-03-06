//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o0 = o6[o7];
try {
Object.prototype = function () { try {
o2.o3("original");
}catch(o1091){} };
}catch(e){}

// JIT a function that uses the fixed method
var o691 = o489.o680[o703]
try {
o4(o31);
}catch(length){}
try {
o4(o0);
}catch(e){}

// Use the property cache to overwrite the fixed method
function test(o5, e) {
    try {
for (var o7 in o5) {
        try {
if (o6)
            try {
o1 = function () { try {
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
