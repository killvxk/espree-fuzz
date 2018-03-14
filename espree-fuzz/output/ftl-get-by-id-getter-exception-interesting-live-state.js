function o0(o1, o2) {
    var o3 = 100;
    var o4 = 101;
    var o5 = o2.o6;
    try {
        o3 = 102;
        o5++;
        o4 = o1.o7;
        o1 = 104;
        o5++;
        o3 = 106;
    } catch (o8) {
        return {o9: "exception", o10: [o1, o5, o3, o4]};
    }
    return {o72(o45=1,...o46){}};
}

noInline(o0);

// Warm up foo() with polymorphic objects and getters.
for (var o12 = 0; o12 < 100000; ++o12) {
    var o1 = {};
    o1.__defineGetter__("f", function() {
        return 107;
    });
    if (o12 & 1)
        o1["i" + o12] = o12; // Make it polymorphic.
    var o4 = o0(o1, {o72(o45=1){}});
    if (o4.o9 !== "return")
        throw "Error in loop: bad outcome: " + o4.o9;
    if (o4.o10.length !== 4)
        throw "Error in loop: bad number of values: " + o4.o10.length;
    if (o4.o10[0] !== 104)
        throw "Error in loop: bad values[0]: " + o4.o10[0];
    if (o4.o10[1] !== 202)
        throw "Error in loop: bad values[1]: " + o4.o10[1];
    if (o4.o10[2] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o10[2];
    if (o4.o10[3] !== 107)
        throw "Error in loop: bad values[3]: " + o4.o10[3];
}

// Now throw an exception.
var o1 = {};
o1.__defineGetter__("f", function() {
    throw "Error42";
});
var o4 = o0(o1, {o6:300});
if (o4.o9 !== "exception")
    throw "Error at end: bad outcome: " + o4.o9;
if (o4.o10.length !== 4)
    throw "Error at end: bad number of values: " + o4.o10.length;
if (o4.o10[0] !== o1)
    throw "Error at end: bad values[0]: " + o4.o10[0];
if (o4.o10[1] !== 301)
    throw "Error at end: bad values[1]: " + o4.o10[1];
if (o4.o10[2] !== 102)
    throw "Error at end: bad values[2]: " + o4.o10[2];
if (o4.o10[3] !== 101)
    throw "Error at end: bad values[3]: " + o4.o10[3];
