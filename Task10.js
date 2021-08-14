function removeDuplicateChar(str) {
    return str.split('').filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      }).join('');
  }


function sameCharacter(s1, s2){
    var i = 0;
    var x = 0;
    var commonChar = "";
    var s1 = s1.toLocaleLowerCase();
    var s2 = s2.toLocaleLowerCase();
    

    while(s1[i]){

        while(s2[x]){
            if (s1[i] === s2[x]){
                commonChar += s2[x];
            }
            x++;
        }
        i++;
        x = 0;
    }

    var setToLowerCase = commonChar.toLocaleLowerCase();
    var finalResult = removeDuplicateChar(setToLowerCase);
    i = 0;

    while(finalResult[i]){
        process.stdout.write(finalResult[i] + ',');//used it to avoid a new line which console.log() adds
        i++;
    }
}