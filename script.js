// FIRST DIV

document.getElementById("btn1").addEventListener
("click", function(){
    document.querySelector("#secondCon").style.height = "70px";
    document.querySelector("#second").style.display = "flex";
    document.querySelector("#btn1").style.visibility = "hidden";
    document.querySelector("#btn2").style.visibility = "visible";

    console.log("click");

})


document.getElementById("btn2").addEventListener
("click", function(){
    document.querySelector("#secondCon").style.height = "30px";
    document.querySelector("#second").style.display = "none"
    document.querySelector("#btn1").style.visibility = "visible";
    document.querySelector("#btn2").style.visibility = "hidden";

})

// SECOND DIV

document.getElementById("btn3").addEventListener
("click", function(){
    document.querySelector("#thirdCon").style.height = "70px";
    document.querySelector("#four").style.display = "flex";
    document.querySelector("#btn3").style.visibility = "hidden";
    document.querySelector("#btn4").style.visibility = "visible";

})


document.getElementById("btn4").addEventListener
("click", function(){
    document.querySelector("#thirdCon").style.height = "30px";
    document.querySelector("#four").style.display = "none"
    document.querySelector("#btn3").style.visibility = "visible";
    document.querySelector("#btn4").style.visibility = "hidden";

})

// THIRD DIV

document.getElementById("btn5").addEventListener
("click", function(){
    document.querySelector("#fifthCon").style.height = "70px";
    document.querySelector("#sixth").style.display = "flex";
    document.querySelector("#btn5").style.visibility = "hidden";
    document.querySelector("#btn6").style.visibility = "visible";
})


document.getElementById("btn6").addEventListener
("click", function(){
    document.querySelector("#fifthCon").style.height = "30px";
    document.querySelector("#sixth").style.display = "none"
    document.querySelector("#btn5").style.visibility = "visible";
    document.querySelector("#btn6").style.visibility = "hidden";

})

// FOURTH DIV

document.getElementById("btn7").addEventListener
("click", function(){
    document.querySelector("#sevenCon").style.height = "70px";
    document.querySelector("#eight").style.display = "flex";
    document.querySelector("#btn7").style.visibility = "hidden";
    document.querySelector("#btn8").style.visibility = "visible";
})


document.getElementById("btn8").addEventListener
("click", function(){
    document.querySelector("#sevenCon").style.height = "30px";
    document.querySelector("#eight").style.display = "none"
    document.querySelector("#btn7").style.visibility = "visible";
    document.querySelector("#btn8").style.visibility = "hidden";

})

// FOURTH DIV

document.getElementById("btn9").addEventListener
("click", function(){
    document.querySelector("#ninthCon").style.height = "70px";
    document.querySelector("#tenth").style.display = "flex";
    document.querySelector("#btn9").style.visibility = "hidden";
    document.querySelector("#btn10").style.visibility = "visible";
})


document.getElementById("btn10").addEventListener
("click", function(){
    document.querySelector("#ninthCon").style.height = "30px";
    document.querySelector("#tenth").style.display = "none"
    document.querySelector("#btn9").style.visibility = "visible";
    document.querySelector("#btn10").style.visibility = "hidden";

})