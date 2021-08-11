function areaOfTriangle(height_1, height_2, height_3){
   
    var s;
    var Area;
 
    //finding semi-perimeter s = (a + b + c)/2
    s = (height_1 + height_2 + height_3) / 2;
 
    //heron's formula Area = √[s(s-a)(s-b)(s-c)]
    Area = Math.sqrt( s * (s - height_1) * (s - height_2) * (s - height_3));
    return Area;
 }
// source ---->>>   https://www.mathswithmum.com/area-triangle-3-sides/