function vowelCheck(string){
    var collectVowel = "";
    var i = 0;
    
    while(string[i]){
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' ||
                string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U'){
            collectVowel += string[i] + ',';
        }
        i++;
    }
    console.log(collectVowel);
}