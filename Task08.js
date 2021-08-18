function makeTime(num){
    var hours;
    var minutes;
    var minuteString = " minutes";
    var hourString = " hour";

    hours = Math.floor(num/60);
	minutes = num % 60;

    if (num === 0){
        console.log("0 hours 0 minutes");
        return;
    }

    if (hours > 1){
        hourString = " hours";
    }
    if (minutes == 1){
        minuteString = " minute";
    }

    console.log(hours + hourString + " " + minutes + minuteString);
    
}