try{
     let userpassword= prompt("please give password")
     let databasepassword = "def"
        if(userpassword!==databasepassword){
            //custom error
            throw new Error("please try again")
        }
}
catch(err){
  alert(err.message)
}

  


    console.log("something")

    let sum=(a,b)=>{
        return a+b
    }

    console.log(sum(2,3))