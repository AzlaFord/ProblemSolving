function lastwords(string){
    let i = string.length - 1;
    let lenght = 0
    while(string[i] == ' '){
        i--;
    }
    while(i <=0 || i != ' '){
        lenght++;
        i--;
    }
    return lenght
}