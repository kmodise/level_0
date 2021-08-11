//source for conversion formulas https://www.mathsisfun.com/temperature-conversion.html

function celsiusToFahrenheit(temp){
    var convert;
    
    convert = ( (temp / 5) * 9) + 32;
    return convert;
}

function fahrenheiToCelsius(temp){
    var convert;

    convert = ( (temp - 32) * 5) / 9;
    return convert;
}
