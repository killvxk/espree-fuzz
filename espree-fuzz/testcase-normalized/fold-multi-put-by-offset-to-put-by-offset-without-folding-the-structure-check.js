function o0(o1) {
    o1.o2 = 1;
}

function o3(o1) {
    o1.o4 = 2;
}

function o5(o2, o1) {
    o2(o1);
}

function o6(o2, o1) {
    o2(o1);
}

for (var o7 = 0; o7 < 100; ++o7) {
    o0({o2:1, o4:2});
    o0({o4:1, o2:2});
    o0({o8:1, o4:2, o2:3});
    o3({o2:1, o4:2});
    o3({o4:1, o2:2, o9:3});
    o3({o8:1, o4:2, o2:3, o9:4});
}
    
for (var o7 = 0; o7 < 100; ++o7) {
    o5(o0, {o2:1});
    o5(function() { }, null);
    o5(function() { return 42; }, null);
    o6(o3, {o4:1});
    o6(function() { }, null);
    o6(function() { return 42; }, null);
}
    
(function(o2, o9, o1, o10) {
    var o11 = 0;
    var o12 = 1000000;
    for (var o7 = 0; o7 < o12; ++o7) {
        var o13;
        if (o7 == o12 - 1)
            o13 = o10;
        else
            o13 = o1;
        o6(o9, o13);
        o5(o2, o13);
    }
    if (o1.o4 != 2)
        throw "Error: bad value in o.e: " + o1.o4;
    if (o1.o2 != 1)
        throw "Error: bad value in o.f: " + o1.o2;
    if (o10.o4 != 2)
        throw "Error: bad value in p.e: " + o10.o4;
    if (o10.o2 != 1)
        throw "Error: bad value in p.f: " + o10.o2;
})(o0, o3, {o2:42, o4:2}, {o4:12, o2:13, o9:14});
