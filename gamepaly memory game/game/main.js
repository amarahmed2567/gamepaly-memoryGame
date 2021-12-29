//start game nema

let nameGest = document.getElementById("name-gest");
let startBtn = document.getElementById("start-game");
let yesOrNo  = document.getElementById("yes-or-no");
let yesBut  = document.getElementById("yes");
let NoBut  = document.getElementById("no");

document.getElementById("start").play();

    function Namestart(){
    if(nameGest.value.length >= 20){
        document.querySelector(".nav-gam .name span").innerHTML = "unknow";
    }
    else{
        document.querySelector(".nav-gam .name span").innerHTML = nameGest.value;
    };  
    if(nameGest.value == null || nameGest.value  == ""){
    document.querySelector(".nav-gam .name span").innerHTML = "unknow";
    }
    else{
        document.querySelector(".nav-gam .name span").innerHTML = nameGest.value;
    };  

    document.querySelector(".start-game").remove();
    document.getElementById("welcome").play();
    document.getElementById("start").pause();
}
// start exit function///////////////
let exitGame = document.getElementById("exit");

    function exit(){
    yesOrNo.style.top = "10%";
}
yesBut.onclick = function(){
    location.assign("../home/index.html")
}
NoBut.onclick = function(){
    yesOrNo.style.top = "-100%";
}
// end exit function///////////////

//call keys code
document.body.onkeydown =  function  entar(en){
    if(en.keyCode == "13"){
        Namestart();
    }if(en.keyCode == "27"){
        exit();
    }
}; 
//call functions
startBtn.onclick  =Namestart;
exitGame.onclick =exit;

//carts flap

    // let myfront =  document.querySelectorAll(".contear .cart .fornt");
    let  img =  document.querySelectorAll(".contear .cart");
    let arrayImg =Array.from( img);
        // if 2filpped 
        function fleipped(click){
            click.classList.add("in-fleb");
            let myallfleipped = arrayImg.filter(flippedBloock => flippedBloock.classList.contains("in-fleb"));
            if(myallfleipped.length == 2){
            //checking a function
            checkingFunction(myallfleipped[0],myallfleipped[1]);
                        //function close 
                        closefunction();
            }          
        };
        

//checking a function
function checkingFunction(fristBlock,scondBlock){
    let mytrys = document.querySelector(".wins span");
    if (fristBlock.dataset.frout === scondBlock.dataset.frout)
    {
        fristBlock.classList.remove("in-fleb");
        scondBlock.classList.remove("in-fleb");
///////////////////////////////////////////////////
fristBlock.classList.add("has-much");
scondBlock.classList.add("has-much");
document.getElementById("audioTrue").play();
    }
    else{
        mytrys.innerHTML = parseInt(mytrys.innerHTML)+1;
        setTimeout(() => {
            
            fristBlock.classList.remove("in-fleb");
            scondBlock.classList.remove("in-fleb");
            }, 1000);  
        document.getElementById("audio").play();

    }

}
//closefunction()
function closefunction(){
    document.getElementById("contear").classList.add("none-click");
    setTimeout(() => {
        document.getElementById("contear").classList.remove("none-click" );
    }, 1000);
}

    img.forEach(el => {
            el.addEventListener("click",function(){
                fleipped(el);
})});



//لغبطه عناصر 
img.forEach(e =>{
    e.style.order =Math.floor( Math.random()*img.length);
    
})
console.log(img)

//adone game
// let mydone = document.querySelectorAll(" .has-much");

// mydone.forEach(element =>{
//     element.cla
//  console.log("donee")
// })
















