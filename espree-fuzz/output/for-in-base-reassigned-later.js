function o0(o1) {
    var o2 = o1;
    var o3 = 0;
    for (var o4 in o2) {
        o3 += o2[o4];
        if (o3 >= 3)
            o2 = {
  value: false,
  configurable: true,
  o18: false,
  enumerable: true
};
    }
    return o3;
}

noInline(o0);

for (var o8 = 0; o8 < 10000; ++o8) {
    var o3 = o0({o4:2000000000});
    if (o3 != 7)
        throw "Error: bad result: " + o3;
}
