//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test()
{
    return [ 0 , 1, 2 ,3,4 ,5, 6,7,0, 9, 255, 256, 65535, 65536, -1];
};

var o8 = -1;;


function o1()
{
    return [ 0 , 1.1, 2 ,3,4 ,5, 6,7,8, 9, 255, 256, 65535, 65536, -1, 1, 2, 3, 4, 5, 6, 7, 1 ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
};


for (var o2 = 0; o2 < 2; o2++)
{
    o3.o4(test().join(","));
}

for (var o2 = 0; o2 < 2; o2++)
{
    o3.o4(o0().join(","));
}
for (var o2 = 0; o2 < 2; o2++)
{
    o3.o4(o1().join(","));
}
