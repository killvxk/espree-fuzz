function o0(o1) {
    return "foo" in o1;
}

noInline(o0);

for (var o3 = 0; o3 < 100000; ++o3) {
    var o1 = {o2:1, o5:2};
    o1["i" + o3] = 42;
    o1.o0 = 43;
    o0(o1);
}
