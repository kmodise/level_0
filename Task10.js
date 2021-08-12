function sameCharacter(str_one, str_two){
    var i = 0;
    var x = 0;
    var commonChar = "";

    while(str_one[i]){

        while(str_two[x]){
            if (str_one[i] === str_two[x]){
                commonChar += str_two[x] + ',';
            }
            x++;
        }
        i++;
        x = 0;

    }
    console.log(commonChar);
}