// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.12-3-4
description: Object.isFrozen returns false for all built-in objects (Function)
---*/

  var b = Object.isFrozen(Function);

assert.sameValue(b, false, 'b');
