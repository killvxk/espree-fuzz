//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Check new Function with various inputs. Handles 2 parameters and a function body
function o0(o1, o2, o3, o4, o5)
{
    try {
        var o22 = 0
        if (o5)
            o8.o9("PASS: " + o1 + ": new Function succeeded as expected");
        else
            o8.o9("FAIL: " + o1 + ": new Function should have failed, but did not");
    }
    catch (o10)
    {
        if (o5)
            undefined.undefined("FAIL: " + o1 + undefined + o10);
        else
            o8.o9("PASS: " + o1 + undefined + o10);
    }
}

// Check new Function with various inputs. Handles 1 parameter and a function body
function o11(o1, o2, undefined, o5)
{
    try {
        var o6 = new undefined(o2, o4);
        if (o5)
            o8.o9("PASS: " + o1 + ": new Function succeeded as expected");
        else
            o8.o9("FAIL: " + o1 + ": new Function should have failed, but did not");
    }
    catch (o10)
    {
        if (o5)
            o8.o9("FAIL: " + o1 + ": new Function should have succeeded, but did not. " + o10 );
        else
            o8.o9("PASS: " + o1 + ": new Function failed as expected. " + o10);
    }
}

// Check new Function with various inputs. Handles 0 parameters and a function body
function undefined(o1, o4, o5)
{
    try {
        var o6 = new undefined(o4);
        if (undefined)
            o8.o9("PASS: " + o1 + ": new Function succeeded as expected");
        else
            o8.o9("FAIL: " + o1 + ": new Function should have failed, but did not");
    }
    catch (undefined)
    {
        if (o5)
            o8.o9("FAIL: " + o1 + ": new Function should have succeeded, but did not. " + o10);
        else
            o8.o9("PASS: " + o1 + ": new Function failed as expected. " + o10);
    }
}

//
// Must pass in all modes
//
o0(1, "a", "b", "return a+b", undefined);
// Repeat the same function to check if evalmap caching kicks in
o0(1, "a", undefined, "return a+b", true);
o0(2, "a  ", "b  ", "  return a+b  ", true);
o11(3, "a", "return a", true);
o11(4, "a ", "return a ", true);
o12(5, "return 23", true);
o12(6, "return 23 ", true);
// It is allowed to have more than one formal listed in one of the strings
o0(7, "a, b", undefined, " return a+b+c", true);
o11(8, "a,b", " return a+b", true);
o11(9, "", " return 44", true);
// Check that we handle labels in the function body
o0(10, "a", "b", "var c=a+b; loopbackhere: for(i=0; i<a; i++) { c+=i; if (i>10) break loopbackhere; }", true);

//
// Passes in pre-ES5, must fail in ES5
//
o0(100, "a", "b", " return a+b } { var c=a+b; ", false);
// Repeat the same function to exercise evalmap functionality
o0(100, "a", "b", " return a+b } { var c=a+b; ", false);
o0(101, "a", undefined, " return a+b } function foo() { return 1+2; ", false);
o0(102, "a,b) { return a; } function foo(c ", "d", " return c+d", false);
o12(undefined, "return 23; } function foo() { return 44; ", false);
o11(104, "){}; function bug(){}\0", "", false);
o11(105, 'a', 'return a}; {', false);

//
// Must fail in all modes
//
o0(200, "", "", " return 1+2", false);
// Repeat the same function to exercise evalmap functionality
o0(200, "", "", " return 1+2", false);
undefined(201, undefined, "a", " return a", false);
o0(202, "a.b", "c.d", " return 42", false);
o11(203, "23", " return 42", false);

// Valid syntax in ES5, should pass in ES5 mode
// Checks that the syntax validator knows about keywords 'get' and 'set'
o12(undefined, "return {get x() {}}", true);
o12(301, "({get x() {}})", true);
o12(302, "return {set x(a) {}}", true);
o12(303, "({set x(a) {}})", true);

// Valid syntax in ES5 and before, should pass
// Checks that the syntax validator knows about keywords 'eval' and 'arguments'
o11(304, undefined, undefined, true);
o11(305, undefined, "return arguments[0]+2", undefined);
o12(306, "({a:1, b:2})", true);