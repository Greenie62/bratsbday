
var counterDOM = document.querySelector(".counter");
var overlayDOM = document.querySelector(".overlay");
var overlayTwoDOM = document.querySelector(".overlaytwo");
var ageCounter = 1


function countUp(num){
    counterDOM.innerHTML = num
    console.log("Num: " + num)
    if(num < 29){
        if(num < 4){
            setTimeout(()=>{
                countUp(num+1)
            },500)
            return;
        }

        if(num <= 17){
            setTimeout(()=>{
                countUp(num+1)
            },150)
            return;
        }
        setTimeout(()=>{
            countUp(num+1)
        },100)
    }
    else{
        startOverlay()
    }
}


countUp(ageCounter)


function startOverlay(){
    console.log("overlay fired!")

    overlayDOM.classList.toggle("slide-left")
    console.log(overlayDOM)

    setTimeout(dropOverlay,3000)
}


function dropOverlay(){
    overlayTwoDOM.classList.toggle("drop-down")

    setTimeout(slideOverlayBack,3000)

}

function slideOverlayBack(){
    console.log('slideOverlayBack')
    document.querySelector(".message").innerHTML = "TOO :p"
    overlayDOM.classList.remove("slide-left");
    setTimeout(()=>{
        document.querySelector(".counter").style.fontSize="65px"
        document.querySelector(".counter").style.top="25%"
        document.querySelector(".counter").style.opacity="65%"
        document.querySelector(".counter").innerHTML= "Happy  \nBday Brat \n :)"
    },3000)
}