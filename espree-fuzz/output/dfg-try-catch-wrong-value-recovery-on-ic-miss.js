function o0(o1) {
    if (!o1)
        throw new Error("bad value")
}
noInline(o0);

let o4 = {
    o9: {o9: {o9: o7 + 1}},
    o6: 40,
    o7: "; loaded ",
    get o8() { throw new Error("Hello World!"); }
};

let o9 = {
    o5: 20,
    o8: 40
};

let o10 = {
    o8: 0,
    o6: 50,
    o8: 500,
    get o8() { return 20; }
};

function o11(o8) {
    let o12 = o8();
    try {
        o1.prototype[0] = 42;
    } catch(o13) {
        o0(o12 === o4); // Make sure this is not undefined.
    }
}
noInline(o4);

let o14;
let o15 = false;
function o8() {
    if (o15)
        return o4;
    if (o14 % 2)
        return o9;
    return o10;
}
noInline(o8);
for (o14 = 0; o14 < 10000; o14++) {
    o11(o8);
}
o15 = 3;
o11(o8);
