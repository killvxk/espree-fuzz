//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

class o44 extends o43 {
            constructor(o40,o41) {
                super();
                this.o40 = o40;
                this.o41 = o41;
            }
            o45() { return "Dr. " + super.o39(); }
            o46() { return "Dr. " + super.o42; }
            o47() { return "Dr. " + eval('super.getFullName()'); }
            o48() { return "Dr. " + eval('super.fullName'); }
            o49() { return "Dr. " + (()=>super.o39()) (); }
            o50() { return "Dr. " + (()=>super.o42) (); }
        };
o0[1] = 100;
Array.prototype[5] = 50;
var o1 = 0;

function o2()
{
    o1++;
    o3.o4("FAILED");
}

function o5(o6, o7, o8)
{
    var o9 = 0;
    for(var o10 = 0;o10<10;o10++){
        o6 = o6[o7];
        o9 += o6 + 10;
        o6 = o0;
    }
    if (o9 != o8)
    {
        o2();
    }

    return o7;
}
// generate profile
for(var o7=0;o7<200;o7++)
{
    o5(o0, 5, 600);
}

Object.defineProperty(o0,5,{get:function(){return 200}});

for(var o7=0;o7<200;o7++)
{
    o5(o0, 5, 2100);
}

if (!o1)
{
    o3.o4("Passed");
}