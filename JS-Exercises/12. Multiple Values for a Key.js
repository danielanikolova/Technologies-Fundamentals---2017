/**
 * Created by danie on 3/23/2017.
 */
function  solve(args) {

    let obj = {};
    let inputLine;
    let arr = [];

    for(let i=0; i<args.length - 1; i++) {

        inputLine = args[i].split(' ');

        if(obj[inputLine[0]]){
            obj[inputLine[0]].push(inputLine[1])
        }else{
            obj[inputLine[0]] = [inputLine[1]];
        }

    }
        let key = args[args.length-1];

        console.log(obj[key] ? obj[key].join('\n') : "None");

}

solve([

    '3 bla',
    '3 alb',
    '2'
])
