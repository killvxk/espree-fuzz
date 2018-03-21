// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-date.prototype.toisostring
es5id: 15.9.5.43-0-5
description: >
    Date.prototype.toISOString - The returned string is the UTC time
    zone(0)
---*/

        var dateStr = (new Date()).toISOString();

assert.sameValue(dateStr[dateStr.length - 1], "Z", 'dateStr[dateStr.length - 1]');
