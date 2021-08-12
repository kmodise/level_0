function makeTime(num){
    var hours;
    var minutes;
    var minuteString = " minute";
    var hourString = " hour";

    hours = Math.floor(num/60);
	minutes = num % 60;

    if (hours > 1){
        hourString = " hours";
    }
    if (minutes > 1){
        minuteString = " minutes";
    }

    console.log(hours + hourString + " " + minutes + minuteString);
    
}