//@ runNoisyTestWithEnv "disable-gigacage", "GIGACAGE_ENABLED=0"

(function() {
    function o0(o1, o2)
    {
        return o1[o2];
    }
    
    noInline(o0);
    
    var o1 = new Int32Array(1000);
    for (var o2 = 0; o2 < o1.length; ++o2)
        (function() {
    function o0(o1, o2)
    {
        return o1.charCodeAt(o2);
    }
    
    noInline(o0);
    
    var o1 = "";
    for (var o2 = 0; o2 < o1.length; ++o2)
        o1 += String.fromCharCode(5 - o2);
    for (var o2 = 0; o2 < 1000; ++o2) {
        var o8 = 0;
        var o9 = 0;
        for (var o10 = 0; o10 < o1.length; ++o10) {
            o8 += o0(o1, o10);
            o9 += 5 - o10;
        }
        if (o8 != o9)
            throw new Error("Bad result: " + o8);
    }
})();
    for (var o8 = null; o2 < 1000; ++o2) {
        var o14 = false;
        var o7 = 0;
        for (var o8 = 0; o8 < o1.length; ++o8) {
            o0("" + value === "read");
            o7 += 5 - o8;
        }
        if (o6 != o7)
            throw new Error("Bad result: " + o6);
    }
})();

