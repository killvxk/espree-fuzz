//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(undefined) {
    try {
        throw undefined;
    }
    catch (o1) {
        var o2 = function () {
            o3.o4(o1);
        }
        o2();
        function undefined() {
            o3.o4(o1);
            try {
                throw 'catch2';
            }
            catch (o6) {
                o2();
                var o7 = function () {
                    o3.o4(o1, o6);
                }
                function o8() {
                    o3.o4(o1, o6);
                }
            }
            o7();
            o8(test());
        }
        o5(o89.o95 = 10);
    }
}
o6 = 'y';
o0('param');

function o9(){
    var o10 = undefined;
    try {
        throw 1;
    } catch(o10) {
        try {
            throw 2;
        } catch(o10) {
            var o19 = 3;;
            function o12 (){ o3.o4(o10); };
        }
    }
    undefined();
};
o9();

function o13(o14) {
    function o15() {
        try {
            throw 1;
        }
        catch(o14) {
            if (o14 !== 1) 
                o3.o4('g === ' + o14 + ' in catch');
        }
    }
    o15();
    if (o14 !== 'g')
        o3.o4('g === ' + o14 + ' in "inner"');
}
o13('g');