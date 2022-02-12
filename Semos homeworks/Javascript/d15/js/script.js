

function calculator(num1,operation, num2, num3, operation2){
    var total ;
    if (operation == "+" && operation2 == "+"){
        total= num1 + num2 + num3;
    }else if (operation == "-" && operation2 == "-"){
        total = num1 - num2 - num3;
    }else if (operation == "+" && operation2 == "-"){
        total = num1 + num2 - num3;
    }else if(operation == "-" && operation2 == "+"){
        total = num1 - num2 + num3;
    }else if (operation == "*" && operation2 == "*"){
        total = num1 * num2 * num3;
    }else if (operation == "*" && operation2 == "/"){
        total = num1 * num2 / num3;
    }else if (operation == "/" && operation2 == "*"){
        total = num1 / num2 * num3;
    }else if (operation == "*" && operation2 == "+"){
        total = num1 * num2 + num3;
    }else if (operation == "*" && operation2 == "-"){
        total = num1 * num2 - num3;
    }else if (operation == "/" && operation2 == "/"){
        total = num1 / num2 / num3; 
    }else if (operation == "/" && operation2 == "+"){
        total = num1 / num2 + num3;
    }else if (operation == "/" && operation2 == "-"){
        total = num1 / num2 - num3;   
    }

    return total ;
    

}

