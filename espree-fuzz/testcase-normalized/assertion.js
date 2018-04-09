//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// BEGIN PRELUDE
function o0(o1) {
    try {
        o2.write(o1 + "<br/>");
        o0 = function(o1) { o2.write(o1 + "<br/>"); };
    } catch (o3) {
        try {
            o4.o5("" + o1);
            o0 = function(o1) { o4.o5("" + o1); };
        } catch (o6) {
            print("" + o1);
            o0 = function(o1) { print("" + o1); };
        }
    }
}

var o7 = false;
var o8 = false;
var o9 = false;

function o10(o11) {
    var o12 = [];
    for (var o13 = 1; o13 < arguments.length; ++o13)
        o12.push(arguments[o13]);
    try {
        return o11.apply(this, o12);
    } catch (o3) {
        o0("EXCEPTION");
    }
}

o14 = "0123456789abcdef";

function o15(o1) {
    var o16 = [];
    if (o1 === null)
        o16.push("null");
    else if (o1 === undefined)
        o16.push("undefined");
    else if (o1 === true)
        o16.push("true");
    else if (o1 === false)
        o16.push("false");
    else if (typeof o1 === "number")
        o16.push(o1.toString());
    else if (typeof o1 == "string") {
        if (o1.length > 8192)
            o16.push("<long string>");
        else {
            o16.push("\"");
            var o17 = -1;
            for (var o18 = 0; o18 < o1.length; o18++) {
                var o19 = o1.charCodeAt(o18);
                if (o19 < 32 || o19 > 127 || o19 == '"'.charCodeAt(0) || o19 == '\\'.charCodeAt(0)) {
                    if (o17 >= 0)
                        o16.push(o1.substring(o17, o18));
                    o17 = -1;
                    o16.push("\\u");
                    o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 12) & 0xf)));
                    o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 8) & 0xf)));
                    o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 4) & 0xf)));
                    o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 0) & 0xf)));
                }
                else {
                    if (o17 < 0)
                        o17 = o18;
                }
            }
            if (o17 >= 0)
                o16.push(o1.substring(o17, o1.length));
            o16.push("\"");
        }
    }
    else if (o1 instanceof RegExp) {
        var o20 = o1.source;
        o16.push("/");
        var o17 = -1;
        for (var o18 = 0; o18 < o20.length; o18++) {
            var o19 = o20.charCodeAt(o18);
            if (o19 < 32 || o19 > 127) {
                if (o17 >= 0)
                    o16.push(o20.substring(o17, o18));
                o17 = -1;
                o16.push("\\u");
                o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 12) & 0xf)));
                o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 8) & 0xf)));
                o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 4) & 0xf)));
                o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 0) & 0xf)));
            }
            else {
                if (o17 < 0)
                    o17 = o18;
            }
        }
        if (o17 >= 0)
            o16.push(o20.substring(o17, o20.length));
        o16.push("/");
        if (o1.global)
            o16.push("g");
        if (o1.o21)
            o16.push("i");
        if (o1.o22)
            o16.push("m");
        if (!o7 && o1.o23 !== undefined) {
            o16.push(" /*lastIndex=");
            o16.push(o1.o23);
            o16.push("*/ ");
        }
    }
    else if (o1.length !== undefined) {
        o16.push("[");
        for (var o18 = 0; o18 < o1.length; o18++) {
            if (o18 > 0)
                o16.push(",");
            o16.push(o15(o1[o18]));
        }
        o16.push("]");
        if (!o9 && (o1.input !== undefined || o1.index !== undefined))
        {
            o16.push(" /*input=");
            o16.push(o15(o1.input));
            o16.push(", index=");
            o16.push(o15(o1.index));
            // IE only
            // sb.push(", lastIndex=");
            // sb.push(dump(o.lastIndex));
            o16.push("*/ ");
        }
    }
    else if (o1.toString !== undefined) {
        o16.push("<object with toString>");
    }
    else
        o16.push(o1.toString());
    return o16.join("");
}

function o24(o25, o26, o27) {
    var o16 = [o25];
    o16.push("(");
    for (var o18 = 0; o18 < o27; o18++) {
        if (o18 > 0) o16.push(", ");
        o16.push(o15(o26[o18]));
    }
    if (o26.length > o27) {
        o16.push(", ");
        o16.push(o15(o26[o27]));
        o26[0].o23 = o26[o27];
    }
    o16.push(");");
    o0(o16.join(""));
}

function o28(o29) {
    if (!o7) {
        o0("r.lastIndex=" + o15(o29.o23));
    }
    if (!o8) {
        // IE only
        // echo("RegExp.index=" + dump(RegExp.index));
        // echo("RegExp.lastIndex=" + dump(RegExp.lastIndex));
        var o16 = [];
        o16.push("RegExp.${_,1,...,9}=[");
        o16.push(o15(RegExp.o30));
        for (var o18 = 1; o18 <= 9; o18++) {
            o16.push(",");
            o16.push(o15(RegExp["$" + o18]));
        }
        o16.push("]");
        o0(o16.join(""));
    }
}

function exec(o29, o31) {
    o24("exec", arguments, 2);
    o0(o15(o29.exec(o31)));
    o28(o29);
}

function test(o29, o31) {
    o24("test", arguments, 2);
    o0(o15(o29.test(o31)));
    o28(o29);
}

function replace(o29, o31, o1) {
    o24("replace", arguments, 3);
    o0(o15(o31.replace(o29, o1)));
    o28(o29);
}

function split(o29, o31) {
    o24("split", arguments, 2);
    o0(o15(o31.split(o29)));
    o28(o29);
}

function match(o29, o31) {
    o24("match", arguments, 2);
    o0(o15(o31.match(o29)));
    o28(o29);
}

function search(o29, o31) {
    o24("search", arguments, 2);
    o0(o15(o31.search(o29)));
    o28(o29);
}

function o32(o29, o1) {
    o0("bogus(" + o15(o29) + ", " + o15(o1) + ");");
    try { new RegExp(o29, o1); o0("FAILED"); } catch (o33) { o0("PASSED"); }
}
// END PRELUDE

// This is a variant of the prototype regex for finding CSS classes
// that was causing problems on CNN.com because it had classes
// with -'s in their names 
match(/([\w\-\*]+)\b/, "b-b");

// Here is a simpler repro of the above:
match(/.*\b/, "one two");

// TODO - fix this:
match(/([a ]\b)*\b/, "a a a aa");
