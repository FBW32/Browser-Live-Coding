const {sum,substract} = require("./operator")

/* const path = require("path") */
/* const fs = require("fs")
const http = require("http") */


console.log(process.argv)

/* if(process.argv[2]==="abc"){
    console.log("done")
} */

if(process.argv[2]==="add" ){
    sum(Number(process.argv[3]), Number(process.argv[4]))
}else if(process.argv[2]==="minus"){
    substract(Number(process.argv[3]), Number(process.argv[4]))
}

/* process.exit() */

/* process.kill() */
