function o0(o1) {
    return o1 * (o1 + 1) / 2;
}

var o2 = 1000000;

var o3 = [42, "hello"];

function o4() {
    var o5 = 0;
    var o6;
    for (var o7 = 0; o7 < o2; ++o7) {
        var o8 = {}{o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: o7}}}}}}}}}}}}}}}}}}}{}{o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: o7}}}}}}}}}}}}}}}}}{o8: "return", o9: [o1, o5, o3]}{o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: o7}}}}}}}}}}}}}}}}{}{o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: o7}}}}}}}}}}}}}}}{
                toString() {
                    ++o13;
                    return "hello!";
                }
            }{o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: o7}}}}}}}}}}}{2: true}{o9: {o9: {o9: {o9: {o9: {o9: {o9: o7}}}}}}}}}}{
        [key]: 42
    }{o9: {o9: {o9: {o9: o7}}}}}}}{o4:1, o2:2}{o9: {o9: o7}}}}{o7:1, o2:2}{o9: o7}}{2: true}}}}}}}}}}}}}}}}}}};
        var o10 = {o9: {o9: {o9: {
    set o3(o4) {
        o3(false);
    }
}{o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: o7 + 1}}}}}}}}}}}}}}}}{o7:1, o2:2}{o9: {o9: {o9: {o9: {o9: {o9: {o9: o7 + 1}}}}}}}}}}}}}{toString: function() { o6++; return o4; }}{o9: {o9: {o9: o7 + 1}}}}}}}{o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: o7}}}}}}}}}}}{o9: {o9: o7 + 1}}}{o46: 34}{o9: o7 + 1}}{o4:1, o2:2, o9:3}}}}}}}}}}}}}}}}}}};
        o6 = o3[(o7 > o2 - 100) | 0] + 1;
        o5 += o8.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9 + o10.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9;
    }
    return o6 + o5;
}

var o5 = o4();
if (o5 != "hello" + 1 + (o0(o2 - 1) + o0(o2)))
    throw "Error: bad result: " + o5;