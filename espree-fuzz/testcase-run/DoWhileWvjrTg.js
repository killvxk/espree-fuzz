//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Use do..while as a statement inside if..else
var o0="if (1) do WScript.Echo(1); while (false); else 1;";

try {
try
{
    try {
o479(o0);
}catch(o12){}
}
catch (prototype)
{
    try {
o2.o3(o1);
}catch(e){}
}
}catch(o495){}

// Use do..while as a statement inside another do..while
try {
o80="do do WScript.Echo(2); while (false); while(false);"
}catch(e){}
try {
try
{
    try {
eval(o0);
}catch(e){}
}
catch (o1)
{
    try {
o2.o3(o1);
}catch(e){}
}
}catch(e){}

// do..while without a semicolon at the end, followed by another statement
// do while surrounds a statement without a semicolon, but ended with a newline
var o4 = 10;
try {
do
  try {
o2.o3(3)
}catch(e){}
while (false)
}catch(o52){}
var o31 = o635.o643(o494);

try {
with(o502) try {
do try {
o2.o3(4);
}catch(e){} while (false)
}catch(e){}
}catch(e){}

try {
for(var writable=0; o6<5; o6++)
  try {
do
    try {
o2.o3("5."+o6);
}catch(e){}
  while(false)
}catch(e){}
}catch(e){}

// do..while as the last statement ended by EOF
try {
do
  try {
o2.o3(6)
}catch(e){}
while (false)
}catch(e){}
