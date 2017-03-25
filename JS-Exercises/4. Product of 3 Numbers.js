/**
 * Created by danie on 3/22/2017.
 */
function solve(args) {

    let num1 = args[0];
    let num2 = args[1];
    let num3 = args[2];

    if(num1 >=0 && num2>=0 && num3>=0){
        console.log("Positive")
    }else if(num1 < 0 && num2>=0 && num3>=0
        || num1 >=0 && num2<0 && num3>=0
        ||num1 >=0 && num2>=0 && num3<0){
        console.log("Negative")
    }else if(
        num1 < 0 && num2<0 && num3>=0 ||
        num1 >=0 && num2<0 && num3<0||
        num1 <0 && num2>=0 && num3<0
    ){
        console.log("Positive")
    }else {
        console.log("Negative")
    }

}


solve([

    '-3',
    '-4',
    '5'

])