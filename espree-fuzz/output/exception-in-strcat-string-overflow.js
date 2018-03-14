function o0(o1, o2) {
    return o1 + "x" + o2;
}

noInline(o0);

for (var o4 = 0; o4 < 10000; ++o4) {
    var o2;
    var o5;
    if (o4 & 1) {
        o2 = 42;
        o5 = "ax42";
    } else {
        o2 = "b";
        o5 = "axb";
    }
    var o6 = o0("a", o2);
    if (o6 != o5)
        throw "Error: bad result: " + o6;
}

var o7 = "l";
for (var o4 = 0; o4 < 30; ++o4)
    o7 = o7 + o7;

var o6 = null;
var o8 = false;
try {
    o6 = o0(o7, o7);
} catch (o9) {
    o8 = true;
}

if (!o8)
    throw "Error: did not throw";
if (o6 !== null)
    throw "Error: did set result: " + o6;
