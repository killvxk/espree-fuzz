var o0 = o1.o0;

let o2;
function o3(o4, o5, o6, o7, o8, o9) {
    function o10(o5, o11) {
        if (!o5)
            throw new Error(o11);
    }
    o10(o4 === o2);
    o10(o5 === o2+1);
    o10(o6 === o2+2);
    o10(o7 === null);
    o10(o8 === undefined);
    o10(o9 === undefined);
}
noInline(o3);

function o15(o4, o5, o6, o7, o8, o9)
{
    o3(o4, o5, o6, o7, o8, o9);
    return !!(o4%2) ? o4 + o5 + o6 + o7 : o4 + o5 + o6 + o7;
}

const o16 = o0(`(function (f, a, b, c, d) {
    let y = @idWithProfile(null, "SpecInt32Only");
    return f(a, b, c, y);
})`);

noInline(o16);

for (o2 = 0; o2 < 1000; ++o2) {
    o16(o15, o2, o2+1, o2+2, o2+3);
}