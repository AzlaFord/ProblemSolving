function ValidParentheses(string){
    let stack = [];
    let ClosetoOpen = {'(': ')', '[': ']', '{': '}'};
    for(let i = 0; i < string.length; i++) {
        if(string[i] in ClosetoOpen){
            stack.push(string[i]);
        } else {
            let lastOpen = stack.pop();
            if(ClosetoOpen[lastOpen] !== string[i]){
                return false;
            }
        }
    }
    return stack.length === 0;
}
