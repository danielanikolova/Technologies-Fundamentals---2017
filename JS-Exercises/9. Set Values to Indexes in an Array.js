/**
 * Created by danie on 3/22/2017.
 */
function solve(args) {

    let N = Number(args[0]);

    let arr = new Array(N);
    let index = 0;
    let num = 0;

    for(let i = 1; i < args.length; i++){

        let indexAndNumber = args[i]
            .split(' ');

        index = Number(indexAndNumber[0]);
        num = Number(indexAndNumber[2]);

        arr[index] = num;

    }

        for(let elm of arr){

        if(elm === undefined){
            elm = 0;
        }

        console.log(elm);
        }
}

solve([

    '5',
    '0 - 3',
    '3 - -1',
    '4 - 2'
])
