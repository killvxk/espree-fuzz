//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
(function ()
{
    function o0() { try {
o1("easy, cancel defer");
}catch(e){} }
    try {
o0();
}catch(e){}
})(this.o676);
}catch(e){}

try {
Symbol.isConcatSpreadable(function (o492, o107, o565) {
            var o563 = o107;
            try {
if (o565 === 1) { // SEEK_CUR.
                try {
o563 += o492.o563;
}catch(e){}
            } else try {
if (o565 === 2) { // SEEK_END.
                try {
if (o489.o540(o492.o494.o518)) {
                    try {
try {
                        var o609 = o641.o671(o492.o663);
                        try {
o563 += o609.o85;
}catch(e){}
                    } catch (o189) {
                        try {
throw new o489.o496(o352[o189.o119]);
}catch(e){}
                    }
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
}catch(e){}

            try {
if (o563 < 0) {
                try {
throw new o489.o496(o352.o375);
}catch(e){}
            }
}catch(e){}

            try {
o492.o563 = o563;
}catch(e){}
            try {
return o563;
}catch(e){}
        });
}catch(e){}

try {
(function ()
{
    var o2 = function (o3) { try {
o1(o3);
}catch(e){} };
    function o0() { try {
o2("medium");
}catch(e){} }
    try {
(function () { try {
o0(Array.isArray(o5));
}catch(e){} }).call();
}catch(e){}
}).call(this);
}catch(o10){}

try {
(function ()
{
    try {
o1((function ()
    {
        var o2 = function () { try {
return "hard";
}catch(e){} };
        function o0() { try {
return o2();
}catch(e){} }
        try {
return { o4: function () { try {
return o0();
}catch(e){} } };
}catch(e){}
    }).call().o4());
}catch(e){}
}).apply(this);
}catch(e){}

var o929 = (o70 & 0x8);
try {
with (o5)
{
  try {
(function o7()
  {
    try {
o1("outer function: " + o6);
}catch(e){}
    try {
(function o8()
    {
      try {
o1("inner function: " + o6);
}catch(e){}
    })();
}catch(e){}
  })(o1079 | 0);
}catch(e){}
}
}catch(e){}

var o9 = '';
try {
try {
    var o10 = function() { try {
o1(o9)
}catch(e){} };
    try {
throw 'catch';
}catch(e){}
}
catch(o9) {
    var o11 = function() { try {
o1(o9)
}catch(e){} };
    try {
try {
        try {
throw 'catch2';
}catch(e){}
    }
    catch(o9) {
        var o12 = function() { try {
o1(o9)
}catch(e){} };
    }
}catch(e){}
}
}catch(e){}
try {
o10();
}catch(e){}
try {
o11();
}catch(e){}
try {
o12();
}catch(e){}

var o3 = '' +
    'x = { get func() { return 1; } };' +
    'x = { get "func"() { return 1; } };' +
    'x = { get 57() { return 1;} };' +
    'x = { get 1e5() { return 1;} };' +
    'x = { get func() { return 1;} };';

try {
(function() {
    // The getters will only be declared in IE9 mode, since
    // in compat mode the nested eval will pick up the local (empty) string.
    var o3 = '';
    try {
(0,eval)('eval(str)');
}catch(e){}
})();
}catch(e){}

try {
(function (o13) {
    try {
return function() {
        try {
o1(o13);
}catch(e){}
    };
}catch(e){}
})('hi there')();
}catch(e){}

try {
(function()
{
    // Test named function expression with deferred child where the func name is not visible.
    try {
new function o5(o5)
    {
        function o14()
        {
        }
        try {
eval("\r\n    writeLine(x)")
}catch(e){}
    }
}catch(e){}
})();
}catch(e){}

var o15 = new Function('writeLine("puppies!");');
try {
o15();
}catch(e){}

// Test function with duplicate parameters
function o16(o17,o18,o19,o17) {try {
return o17
}catch(e){}}
try {
o20.o21(o16(0));
}catch(e){}

// Helpers

function o1() {
}
