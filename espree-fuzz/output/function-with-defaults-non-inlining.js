(function () {
'use strict';

function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('":' + o1);
}

function o4(value)
{
    return value;
}

function o6(o7 = 42, o8 = 1e6, o9)
{
    return o8 + o4(o7);
}
noInline(o6);

for (var o11 = 0; o11 < 1e4; ++o11) {
    o0(o6(), 85);
    o0(o6(33), "g");
    o14(o7);
}
}());
