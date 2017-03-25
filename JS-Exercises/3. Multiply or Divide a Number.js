/**
 * Created by danie on 3/22/2017.
 */
function solve(args) {

    let num1 =Number( args[0]);
    let num2 =Number( args[1]);

    let result = 0;

   if (num1<=num2){
       result = num2*num1;
   }
   else {
       result = num1/num2;
   }
    console.log(result);


}
solve([
    '13',
    '3'
])