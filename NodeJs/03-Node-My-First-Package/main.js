const SayHi=(name)=>{
    console.log("Good Afternoon! "+name)
}

const diff =(a,b)=>{
    console.log(a-b)
}

const RandomNumber=()=>{
    console.log(Math.floor(Math.random()))
}

/* module.exports.GreetUser=GreetUser ; */ //Named Export 
module.exports = {SayHi,diff, RandomNumber} ; //Default Export

//version : 1(major) MAJOR version when you make incompatible API changes, complete different code  . 0(minor) MINOR version when you add functionality in a backwards compatible manner .0(patch) PATCH version when you make backwards compatible bug fixes 
//version : 1.0.1 patch release
//version : 1.1.0 minor release
//version : 2.0.0 major release