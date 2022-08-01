let myBtns , myEqual , myClear ,myResult;

myBtns = document.querySelectorAll('.btns .btn')
myEqual= document.querySelector('.equal')
myClear= document.querySelector('.clear')
myResult=document.querySelector('.result')
myTime=document.querySelector('.Time h4')


// console.log(myBtns)
// console.log(myEqual)

myBtns.forEach((show)=>{
    show.addEventListener('click',(att)=>{
        myResult.value+=att.target.dataset.name
    })
})

myEqual.addEventListener('click',()=>{
    // console.log(eval())
    
    if (myResult.value===''){
        myResult.value=''
    }
    else{
        myResult.value=eval(myResult.value)
    }
})

myClear.addEventListener('click',()=>{
    myResult.value=''

})


// function showTime(){
//     let myDate = new Date();
//     let mySeconds = myDate.getSeconds()

//     if (myDate.getSeconds()>=0 && myDate.getSeconds()<10){
//         mySeconds ='0' +myDate.getSeconds()
    
//     }

//     myTime.innerHTML=myDate.getHours() + ' : ' + myDate.getMinutes() + ' : '  +myDate.getSeconds()


// }


// setInterval(showTime, 1000);

setInterval(() => {
    let myDate = new Date();
        let mySeconds = myDate.getSeconds()
    
        if (myDate.getSeconds()>=0 && myDate.getSeconds()<10){
            mySeconds ='0' +myDate.getSeconds()
        
        }
    
        myTime.innerHTML=myDate.getHours() + ' : ' + myDate.getMinutes() + ' : '  +myDate.getSeconds()
    
    
}, 1000);