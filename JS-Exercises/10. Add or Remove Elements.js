/**
 * Created by danie on 3/22/2017.
 */
function solve(args) {

    let arr = new Array();

    let nums = 0;
    let index = 0;
    let command = '';

    for(let i = 0; i<args.length; i++){

        let commandAndNum = args[i].split(' ');

        command = commandAndNum[0];
         if(command === 'add'){
             arr.push(Number(commandAndNum[1]));
         }
         else if(command == 'remove'){

             index = Number(commandAndNum[1]);

             if(arr.length - 1 < index){
                 continue;
             }else {
                 arr.splice(index, 1)
             }

         }

    }
   for(let elm of arr){

        console.log(elm);
   }

}
solve([
    'add 3',
    'add 5',
    'remove 2',
    'remove 0',
    'add 7'



])