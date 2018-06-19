//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Configuration: es6.xml
//Testcase Number: 2407
//Switches: -PrintSystemException   -maxinterpretcount:3 -maxsimplejitruncount:6 -werexceptionsupport  -forcejitloopbody -force:rejit -force:ScriptFunctionWithInlineCache -force:fixdataprops -force:atom -ForceArrayBTree -off:lossyinttypespec -off:trackintusage -off:ParallelParse -off:fefixedmethods -off:LoopCountBasedBoundCheckHoist
//Baseline Switches: -nonative -werexceptionsupport  -PrintSystemException
//Arch: X86
//Flavor: chk
//Branch: fbl_ie_stage_dev3
//Build: 150425-1820
//FullBuild: 10102.0.150425
//MachineName: BPT42065
//InstructionSet: 
//reduced switches: -maxsimplejitruncount:6 -maxinterpretcount:3
var index = 1;
var o942 = new Uint8Array(length);
try {
for (o11 =1; o393 < 2; o421.o149 + 2) {
  function o3() {
  }
  try {
o3.prototype = o0;
}catch(e){}
  var this.o707.o103(this.o567, 0, 0) = new o3();
  var test = { o5: o1(o6.__lookupSetter__) };
}
}catch(e){}
try {
o6.o7("PASS");
}catch(e){}