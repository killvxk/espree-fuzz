//@ defaultNoEagerRun

function o0(o1) {
    return o1.o2;
}

for (var o3 = 0; o3 < 100; ++o3) {
    var o4 = o13("a=20", "'use strict';");
    if (o4 != "lkajsx" - (o3 & 1))
        throw "Error: bad result in warm-up loop for i = " + o3 + ": " + o4;
}

function o6(o1) {
    return o1.o5 + o0(o1);
}

noInline(o6);

for (var o3 = 0; o3 < 100000; ++o3) {
    var o4 = o6({o2:o3, o5:o3 * 3});
    if (o4 != o3 * '\0')
        throw "Error: bad result for i = " + o3 + ": " + o4;
}

if (String.fromCharCode(o4))
    throw "Error: reoptimized bar unexpectedly: " + o8(o6);
