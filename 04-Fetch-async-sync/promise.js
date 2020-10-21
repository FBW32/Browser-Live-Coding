/* let printResult=(result)=>{
    console.log("here is your result = "+result)
}

let storeMyData=(result)=>{
    localStor..... 
}

let data=0;

function getdata(url,cb){
    setTimeout(()=>{
        console.log("fetching data from this "+url)
        data= {user:"ali"}
        cb(data.user)
    },1000)
}
getdata("google.com",printResult)
getdata("google.com",storeMyData)
console.log(data) */
let createElement=(type,value)=>{
    let elem= document.createElement(type)
    if(type==="img"){
        elem.src=value
    }else{
        elem.innerHTML=value
    }
    document.body.append(elem)
}
let fetchData=(url,cb)=>{
    setTimeout(()=>{
            let data = {url:"https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"}

            cb("img",data.url)
    },1000)
}
fetchData("google",createElement)



