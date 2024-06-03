function stringinstring(string1,string2){
    if(string2 == ''){
        return 0
    }
    for(var i=0;i<string1.length +1 - string2.length;i++){
        for(var j=0;j<string2.length;j++){
            if(string1[i+j]!=string2[j]){
                break
            }
            if(j == string2.length){
                return i 
            }
        }
    }
    return -1
}