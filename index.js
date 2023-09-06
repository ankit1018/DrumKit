for(var i=0;i<7;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        makeSound(this.innerHTML);
        makeAnimation(this.innerHTML);
    })
}
document.addEventListener("keydown",function(event){
    console.log(event);
    makeSound(event.key);
    makeAnimation(event.key);
})
function makeSound(key){
    switch(key) {
        case "w":
            var aud = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            var aud = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            var aud = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            var aud = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            var aud = new Audio("sounds/crash.mp3");
            break;
        case "k":
            var aud = new Audio("sounds/kick-bass.mp3");
            break;
        case "l":
            var aud = new Audio("sounds/snare.mp3");
            break;
    }
    aud.play();
}
document.addEventListener("click",function(event){
    console.log(event);
})
function makeAnimation(currentKey) {
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+currentKey).classList.remove("pressed");},150);
}






//var aud = new Audio("sounds/tom-1.mp3");
//aud.play();