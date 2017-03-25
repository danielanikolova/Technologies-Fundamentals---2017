/**
 * Created by danie on 3/22/2017.
 */
function solve(args) {

    for(let i = 0; i<args.length; i++){
        if (args[i]!='Stop'){
            console.log(args[i]);
        }else{
            break;
        }
    }



}
solve([
    '1',
    '2',
    '3',
   'Stop',
    '10'
])
