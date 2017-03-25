/**
 * Created by danie on 3/23/2017.
 */
function solve(args) {


        let obj = {};
        let result = new Array();

        for (let i = 0; i < args.length - 1; i++) {

            let keyValueInput = args[i].split(' ');


            if (obj[keyValueInput[0]] || obj[keyValueInput[0]] === 0) {
                obj[keyValueInput[0]] = keyValueInput[1];
            }
            else {
                obj[keyValueInput[0]] = keyValueInput[1];
            }

        }

        let command = args[args.length - 1];

        if(obj[command]!=undefined) {
            console.log(obj[command]);
        }else {
            console.log("None");
        }


}

solve([

    'key value',
    'key eulav',
    'test tset',
    'key'
])