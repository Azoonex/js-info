// let text = 33
// let result = text.toString()
// console.log(text,result)


// let text = "Hello World!";
// let result = text.valueOf();

// console.log(text,result)

let userName = ['ali','reza','jamal','elham','abas']

let newUserName = userName.map((item,i,x)=>{
    if(i + 1 === x.length){
        console.log('item calling',i)
    }else{
        console.log('item',i);
    }
})


