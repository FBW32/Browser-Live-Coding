/* 10 items => Array.map => return [] =>10 items
10 items => Array.filter =>return [] =>any number less than 10
10 item => Array.reduce  =>return single value (string,number ,array,obj) */

/* let data = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < data.length; i++) {
  sum = sum + data[i]; 
}*/
/* console.log(sum); */

/* 
let listItems = [
  { description: "Eggs (Dozen)", quantity: 1, price: 3, total: 3 },
  { description: "Cheese", quantity: 0.5, price: 5, total: 2.5 },
  { description: "Butter", quantity: 2, price: 6, total: 12 },
];
           /*  Array.map((item)=>{}) 
let sum1 = listItems.reduce((acc, item)=>{
return acc= acc + item.quantity
},0)

console.log(sum1) */

let randomNumber= [1,1,2,34,5,5,66,7,1,3,2,7,9,3,34]

/* let sum = randomNumber.reduce((acc,item)=>acc+=item) */
let result = randomNumber.reduce((acc,item)=>{
    if(acc[item]){
        acc[item]++ ;
    }else{
        acc[item]=1
    }
    return acc;
}, {})

console.log(result)

