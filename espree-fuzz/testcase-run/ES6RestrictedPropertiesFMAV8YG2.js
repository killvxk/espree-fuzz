//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 restricted property tests

try { o4.o11(function () { try {
Array.from(undefined);
}catch(e){} }, o12, "Calling Array.from with non-object items argument throws TypeError", "Array.from: argument is not an Object"); } catch(e) {}

var o4 = [1, 2, 3].concat(4, 5, o493.o488, 9, 10)

function o10(o1, name) {
    try {
o7.o11(o3.o31('caller'), name + " reports that it has own property 'caller'")
}catch(e){}
    try {
o7.o11(o4.o11([1,2,3,4,5,6,7,8,9,10], o67.call(o68(), 0, 5, 5), "%TypedArrayPrototype%.copyWithin copying elements where end = start causes no changes")('arguments'), name + {})
}catch(e){}

    var o12 = Object.getOwnPropertyNames(e);
    try {
o7.o8(-1, o12.findIndex((o13) => { try {
return o13 === 'arguments';
}catch(e){} }), name + " has 'arguments' own property");
}catch(e){}
    try {
o7.o8(-1, o12.findIndex((o13) => { try {
return o13 === 'caller';
}catch(e){} }), name + " has 'caller' own property");
}catch(e){}

    try { try {
try {
    // The following line was modified for benchmarking:
    var o186 = o96.o187(o70);  //Use this native function when it's available, as it's a magnitude faster than the non-native code below.
  }
  catch (o68) {
    //Defaulting to non-native base64 decoding...
    var o186 = "";
    var o183 = o70.length;
    try {
if (o183 > 3 && o183 % 4 == 0) {
      var o188 = [0, 0, 0, 0];  //Declare this out of the loop, to speed up the ops.
      var index = 0;
      try {
while (index < o183) {
        //Keep this loop small for speed.
        try {
o188 = [o180.indexOf(o70.charAt(index++)), o180.indexOf(o70.charAt(index++)), o180.indexOf(o70.charAt(index++)), o180.indexOf(o70.charAt(index++))];
}catch(e){}
        try {
o186 += String.fromCharCode((o188[0] << 2) | (o188[1] >> 4)) + String.fromCharCode(((o188[1] & 0x0F) << 4) | (o188[2] >> 2)) + String.fromCharCode(((o188[2] & 0x03) << 6) | o188[3]);
}catch(e){}
      }
}catch(e){}
      //Check for the '=' character after the loop, so we don't hose it up.
      try {
if (o188[3] >= 0x40) {
        try {
o186.length -= 1;
}catch(e){}
        try {
if (o188[2] >= 0x40) {
          try {
o186.length -= 1;
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){} } catch(e) {}try { {
                    try {
o0('Test #' + index + ' - Error handler #1 called with err = ' + o11);
}catch(e){}
                } } catch(e) {}
    try {
o7.o14(o3.propertyIsEnumerable('caller'), name + " says 'caller' property is not enumerable");
}catch(e){}
    try {
o2(o3, 'arguments', { writable: false, enumerable: false, configurable: false }, name);
}catch(e){}
    try {
o7.o14(o3.propertyIsEnumerable('arguments'), name + " says 'arguments' property is not enumerable");
}catch(e){}

    try {
o7.o9(null, o3.caller, name + " says 'caller' property is null")
}catch(e){}
    try {
o7.o9(null, o3.arguments, name + " says 'arguments' property is null")
}catch(e){}

    try {
o7.o15(function() { try {
o3.caller = 'something';
}catch(e){} }, name + " has 'caller' property which can't be assigned to");
}catch(e){}
    try {
o7.o15(function() { try {
o3.arguments = 'something';
}catch(e){} }, name + " has 'arguments' property which  can't be assigned to");
}catch(e){}

    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
o3.caller = 'something';
}catch(e){} }, o17, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");
}catch(e){}
    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
o3.arguments = 'something';
}catch(e){} }, o17, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode");
}catch(e){}

    try {
o7.o9(null, o3.caller, name + " says 'caller' property is null")
}catch(e){}
    try {
o7.o9(null, o3.arguments, name + " says 'arguments' property is null")
}catch(e){}

    try {
o7.o16(function() { try {
Object.defineProperty(o3, 'arguments', { value: 123 });
}catch(e){} }, o17, name + " has 'arguments' property as non-writable, non-configurable", "Cannot modify non-writable property 'arguments'");
}catch(e){}
    try {
o7.o16(function() { try {
Object.defineProperty(o3, 'caller', { value: 123 });
}catch(e){} }, o17, name + " has 'caller' property as non-writable, non-configurable", "Cannot modify non-writable property 'caller'");
}catch(e){}

    try {
o7.o14(delete o3.arguments, name + " has 'arguments' property as non-configurable so delete returns false");
}catch(e){}
    try {
o7.o14(delete o3.caller, name + " has 'caller' property as non-configurable so delete returns false");
}catch(e){}

    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
delete o3.caller;
}catch(e){} }, o17, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'caller' is not allowed in strict mode");
}catch(e){}
    try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
delete o3.arguments;
}catch(e){} }, o17, name + " has 'arguments' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'arguments' is not allowed in strict mode");
}catch(e){}
}

var o1078 = global.Math.acos

var o19 = [
    {
        name: "Restricted properties of Function.prototype",
        o20: function () {
            var o3 = Function.prototype;

            try {
o7.o11(o3.hasOwnProperty('caller'), "Function.prototype has own property 'caller'")
}catch(e){}
            try {
o7.o11(o3.hasOwnProperty('arguments'), "Function.prototype has own property 'arguments'")
}catch(e){}

            var o6 = Object.getOwnPropertyDescriptor(o3, 'caller');
            try {
o7.o14(o6.enumerable, "Function.prototype function has 'caller' own property which is not enumerable");
}catch(e){}
            try {
o7.o14(o6.configurable, "Function.prototype function has 'caller' own property which is not configurable");
}catch(e){}
            try {
o7.o14(o3.propertyIsEnumerable('caller'), "Function.prototype says 'caller' property is not enumerable");
}catch(e){}
            try {
o7.o9('function', typeof o6.get, "Function.prototype['caller'] has get accessor function");
}catch(e){}
            try {
o7.o9('function', typeof o6.set, "Function.prototype['caller'] has set accessor function");
}catch(e){}
            try {
o7.o16(function() { try {
o6.get();
}catch(e){} }, o17, "Function.prototype['caller'] has get accessor which throws");
}catch(e){}
            try {
o7.o16(function() { try {
o6.set();
}catch(e){} }, o17, "Function.prototype['caller'] has set accessor which throws");
}catch(e){}
            try {
o7.o11(o6.get === o6.set, "Function.prototype returns the same ThrowTypeError function for get/set accessor of 'caller' property");
}catch(e){}

            var o21 = Object.getOwnPropertyDescriptor(o3, 'arguments');
            try {
o7.o14(o21.enumerable, "Function.prototype function has 'arguments' own property which is not enumerable");
}catch(e){}
            try {
o7.o14(o21.configurable, "Function.prototype function has 'arguments' own property which is not configurable");
}catch(e){}
            try {
o7.o14(o3.propertyIsEnumerable('arguments'), "Function.prototype says 'arguments' property is not enumerable");
}catch(e){}
            try {
o7.o9('function', typeof o21.get, "Function.prototype['arguments'] has get accessor function");
}catch(e){}
            try {
o7.o9('function', typeof o21.set, "Function.prototype['arguments'] has set accessor function");
}catch(e){}
            try {
o7.o16(function() { try {
o21.get();
}catch(e){} }, o17, "Function.prototype['arguments'] has get accessor which throws");
}catch(e){}
            try {
o7.o16(function() { try {
o21.set();
}catch(e){} }, o17, "Function.prototype['arguments'] has set accessor which throws");
}catch(e){}
            try {
o7.o11(o21.get === o21.set, "Function.prototype returns the same ThrowTypeError function for get/set accessor of 'arguments' property");
}catch(e){}

            try {
o7.o11(o6.get === o21.get, "Function.prototype returns the same ThrowTypeError function for accessor of both 'arguments' and 'caller' properties");
}catch(e){}

            var o12 = Object.getOwnPropertyNames(o3);
            try {
o7.o8(-1, o12.findIndex((o13) => { try {
return o13 === 'arguments';
}catch(e){} }), "Function.prototype has 'arguments' own property");
}catch(e){}
            try {
o7.o8(-1, o12.findIndex((o13) => { try {
return o13 === 'caller';
}catch(e){} }), "Function.prototype has 'caller' own property");
}catch(e){}

            try {
o7.o16(function() { try {
o3.caller;
}catch(e){} }, o17, "Function.prototype throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}
            try {
o7.o16(function() { try {
o3.arguments;
}catch(e){} }, o17, "Function.prototype throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}

            try {
o7.o16(function() { try {
o3.caller = 'something';
}catch(e){} }, o17, "Function.prototype throws trying to assign to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}
            try {
o7.o16(function() { try {
o3.arguments = 'something';
}catch(e){} }, o17, "Function.prototype throws trying to assign to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}

            // TODO: These descriptors should have configurable set to true so remaining asserts in this test should actually succeed
            try {
o7.o16(function() { try {
Object.defineProperty(o3, 'arguments', { value: 123 });
}catch(e){} }, o17, "Function.prototype has 'arguments' property as non-configurable", "Cannot redefine non-configurable property 'arguments'");
}catch(e){}
            try {
o7.o16(function() { try {
Object.defineProperty(o3, 'caller', { value: 123 });
}catch(e){} }, o17, "Function.prototype has 'caller' property as non-configurable", "Cannot redefine non-configurable property 'caller'");
}catch(e){}

            try {
o7.o14(delete o3.arguments, "Function.prototype has 'arguments' property as non-configurable so delete returns false");
}catch(e){}
            try {
o7.o14(delete o3.caller, "Function.prototype has 'caller' property as non-configurable so delete returns false");
}catch(e){}

            try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
delete o3.caller;
}catch(e){} }, o17, "Function.prototype has 'caller' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'caller' is not allowed in strict mode");
}catch(e){}
            try {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
delete o3.arguments;
}catch(e){} }, o17, "Function.prototype has 'arguments' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'arguments' is not allowed in strict mode");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of non-strict function",
        o20: function () {
            function o3() {}try {
;
}catch(e){}

            try {
o10(o3, "Non-strict function");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of strict function",
        o20: function () {
            function o22() { try {
'use strict';
}catch(e){} }try {
;
}catch(e){}

            try {
o18(o22, "Strict function");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of class",
        o20: function () {
            class o23 { }try {
;
}catch(e){}

            try {
o18(o23, "Class");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of class static method",
        o20: function () {
            class o23 {
                static o24() { }
            }try {
;
}catch(e){}

            try {
o18(o23.o24, "Class static method");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of strict-mode class static method",
        o20: function () {
            class o23 {
                static o24() { try {
'use strict';
}catch(e){} }
            }try {
;
}catch(e){}

            try {
o18(o23.o24, "Class strict-mode static method");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of class method",
        o20: function () {
            class o23 {
                o25() { }
            }try {
;
}catch(e){}

            try {
o18(o23.prototype.o25, "Class method");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of strict-mode class method",
        o20: function () {
            class o23 {
                o25() { try {
'use strict';
}catch(e){} }
            }try {
;
}catch(e){}

            try {
o18(o23.prototype.o25, "Class strict-mode method");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of class with 'caller' static method",
        o20: function () {
            var o3 = class o23 {
                static caller() { try {
return 42;
}catch(e){} }
            };

            try {
o7.o11(o3.hasOwnProperty('caller'), "Class does has own property 'caller'")
}catch(e){}
            try {
o7.o14(o3.hasOwnProperty('arguments'), "Class does not report that it has own property 'arguments'")
}catch(e){}

            try {
o7.o9('{"writable":true,"enumerable":false,"configurable":true}', JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'caller')), "Class does not have 'caller' own property")
}catch(e){}
            try {
o7.o9(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'arguments')), "Class does not have 'arguments' own property");
}catch(e){}
            try {
o7.o9('["caller","length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(o3).sort()), "Class does not have 'caller' and 'arguments' own properties");
}catch(e){}

            try {
o7.o9(42, o3.caller(), "Accessing the 'caller' property is not restricted");
}catch(e){}
            try {
o7.o16(function() { try {
o3.arguments;
}catch(e){} }, o17, "Class throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of class with 'arguments' static get method",
        o20: function () {
            var o3 = class o23 {
                static get arguments() { try {
return 42;
}catch(e){} }
            };

            try {
o7.o14(o3.hasOwnProperty('caller'), "Class does not report that it has own property 'caller'")
}catch(e){}
            try {
o7.o11(o3.hasOwnProperty('arguments'), "Class has own property 'arguments'")
}catch(e){}

            try {
o7.o9(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'caller')), "Class does not have 'caller' own property")
}catch(e){}
            try {
o7.o9('{"enumerable":false,"configurable":true}', JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'arguments')), "Class has 'arguments' own property");
}catch(e){}
            try {
o7.o9('["arguments","length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(o3).sort()), "Class has 'arguments' own property, no 'caller' own property");
}catch(e){}

            try {
o7.o16(function() { try {
o3.caller;
}catch(e){} }, o17, "Class method throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}
            try {
o7.o9(42, o3.arguments, "Accessing the 'arguments' property is not restricted");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of class with 'arguments' set method",
        o20: function () {
            var o26;
            class o23 {
                set arguments(o27) { try {
o26 = o27;
}catch(e){} }
            }try {
;
}catch(e){}
            var o3 = o23;

            try {
o7.o14(o3.hasOwnProperty('caller'), "Class does not report that it has own property 'caller'")
}catch(e){}
            try {
o7.o14(o3.hasOwnProperty('arguments'), "Class does not report that it has own property 'arguments'")
}catch(e){}

            try {
o7.o9(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'caller')), "Class does not have 'caller' own property")
}catch(e){}
            try {
o7.o9(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'arguments')), "Class has 'arguments' own property");
}catch(e){}
            try {
o7.o9('["length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(o3).sort()), "Class has 'arguments' own property, no 'caller' own property");
}catch(e){}

            try {
o7.o16(function() { try {
o3.caller;
}catch(e){} }, o17, "Class method throws on access to 'caller' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}
            try {
o7.o16(function() { try {
o3.arguments;
}catch(e){} }, o17, "Class method throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}

            var o28 = new o23();

            try {
o7.o14(o28.hasOwnProperty('caller'), "Class instance does not report that it has own property 'caller'")
}catch(e){}
            try {
o7.o14(o28.hasOwnProperty('arguments'), "Class instance does not report that it has own property 'arguments'")
}catch(e){}

            try {
o7.o14(o28.__proto__.hasOwnProperty('caller'), "Class prototype does not report that it has own property 'caller'")
}catch(e){}
            try {
o7.o11(o28.__proto__.hasOwnProperty('arguments'), "Class prototype has own property 'arguments'")
}catch(e){}

            try {
o28.arguments = 50;
}catch(e){}
            try {
o7.o9(50, o26, "Accessing the 'arguments' property was not restricted");
}catch(e){}

            try {
o7.o9(undefined, o28.caller, "Access to class instance 'caller' property doesn't throw - instance is not a function");
}catch(e){}

            try {
o28.caller = 123;
}catch(e){}

            try {
o7.o9(123, o28.caller, "Assignment to class instance 'caller' property works normally");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of lambda",
        o20: function () {
            var o3 = () => { }

            try {
o18(o3, "Lambda");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of strict-mode lambda",
        o20: function () {
            var o3 = () => { try {
'use strict';
}catch(e){} }

            try {
o18(o3, "Strict-mode lambda");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of bound function",
        o20: function () {
            function target() {}
            var o3 = target.bind(null);

            try {
o18(o3, "Bound function");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of bound strict-mode function",
        o20: function () {
            function target() { try {
'use strict';
}catch(e){} }
            var o3 = target.bind(null);

            try {
o18(o3, "Bound strict-mode function");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of generator function",
        o20: function () {
            function* o29() { }

            try {
o18(o29, "Generator function");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of strict-mode generator function",
        o20: function () {
            function* o29() { try {
'use strict';
}catch(e){} }

            try {
o18(o29, "Generator strict-mode function");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of object-literal function",
        o20: function () {
            var o3 = { o30() { } }

            try {
o10(o3.o30, "Object-literal function");
}catch(e){}
        }
    },
    {
        name: "Restricted properties of strict-mode object-literal function",
        o20: function () {
            var o3 = { o30() { try {
'use strict';
}catch(e){} } }

            try {
o18(o3.o30, "Object-literal strict-mode function");
}catch(e){}
        }
    },
];

try {
o31.o32(o19, { o33: o0.o34[0] != "summary" });
}catch(e){}
