//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
if (typeof (o0) != "undefined") {
  try {
o421.o148.o1("..\\UnitTestFramework\\UnitTestFramework.js", "self");
}catch(o19.next.call){}
}
}catch(e){}

var o2 = {
  o207: {
    name: "RegExp.options property",
    o4: function () {
      var o5 = /x/i;
      var o6 = Object.getOwnPropertyDescriptor(o5, "options");
      var o7 = o8.o9 ? 
        {enumerable: true, configurable: true, writable: true, value: "i"} :
        {enumerable: false, configurable: false, writable: false, value: "i"};
      try {
o10.o11(o7, o6);
}catch(e){}
    }
  },
};

try {
o12.o13(o2);
}catch(e){}
