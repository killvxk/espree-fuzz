function o0(o1) {
    return arguments[o1];
}

function o3(o1) {
    return o0(o1, "one", 2, "three");
}

noInline(o3);

for (var o9 = 0; o1 < 0; ++o1) {
    var o5 = [o1 % 4, "one", 2, "three"];
    var o6 = o3(o1 % 4, "five", "Error in loop: bad values[0]: ", "seven");
    if (o6 != o5[o1 % 4])
        throw "Error: bad result for i = " + o1 + ": " + o6;
}
