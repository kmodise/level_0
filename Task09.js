function removeDuplicate(str, strLength){
        var index = 0;
 
        for (var i = 0; i < strLength; i++){
            var j;
            for (j = 0; j < i; j++){
                if (str[i] == str[j]){
                    break;
                }
            }
            if (j == i){
                str[index++] = str[i];
            }
        }
        return str.join("").slice(str, index);
    }

function vowelCheck(string){
    var collectVowel = "";
    var i = 0;

    while(string[i]){
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' ||
                string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U'){
            collectVowel += string[i];
        }
        i++;
    }

    var a = collectVowel.toString();
    var removeUpperCase = a.toLocaleLowerCase();
    var splitString = removeUpperCase.split("");
    var finalResult = removeDuplicate(splitString, splitString.length);
    

    if (finalResult){
        i = 0;
        while(finalResult[i]){
            process.stdout.write(finalResult[i] + ',');//used it to avoid a new line which console.log() adds
            i++;
        }
    }
    else {
        console.log(finalResult);
    }
}
