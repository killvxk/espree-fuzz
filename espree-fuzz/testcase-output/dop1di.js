//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

const o0 = "let x";

Object.seal(this);
try {
o5.defineProperty(this, 'x', {value:'20', configurable: true });
}
catch(o1) {
    o2.o3("exception: " + o1);
}
o2.o3(o0);
o2.o3(this.o0);
{
        Object.defineProperty(o14, "length", { value: 3, writable: false });
    }

