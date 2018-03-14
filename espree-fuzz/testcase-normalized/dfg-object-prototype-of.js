function o0(o1, o2)
{
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, o6) {
    var o7 = false;
    var o8 = null;
    try {
        o5();
    } catch (o9) {
        o7 = true;
        o8 = o9;
    }
    if (!o7)
        throw new Error('not thrown');
    if (String(o8) !== o6)
        throw new Error(`bad error: ${String(o8)}`);
}

(function () {
    function o11(o12)
    {
        return Object.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16)
        o0(o11({}), Object.prototype);
}());

(function () {
    function o11(o12)
    {
        return Object.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16) {
        o4(() => o11(null), `TypeError: null is not an object (evaluating 'Object.getPrototypeOf(object)')`);
        o4(() => o11(undefined), `TypeError: undefined is not an object (evaluating 'Object.getPrototypeOf(object)')`);
    }
}());

(function () {
    function o11(o12)
    {
        return Object.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16)
        o0(o11("Cocoa"), String.prototype);
}());

(function () {
    function o11(o12)
    {
        return Object.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16)
        o0(o11(42), Number.prototype);
}());

(function () {
    function o11(o12)
    {
        return Object.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16)
        o0(o11(42.195), Number.prototype);
}());

(function () {
    function o11(o12)
    {
        return Object.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16)
        o0(o11(true), Boolean.prototype);
}());

(function () {
    function o11(o12)
    {
        return Object.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16)
        o0(o11(Symbol("Cocoa")), Symbol.prototype);
}());

(function () {
    function o11(o12)
    {
        return Object.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16) {
        o0(o11("Cocoa"), String.prototype);
        o0(o11(42), Number.prototype);
        o0(o11(42.195), Number.prototype);
        o0(o11(true), Boolean.prototype);
        o0(o11(Symbol("Cocoa")), Symbol.prototype);
    }
}());