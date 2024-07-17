
function buysnake1(){
    alert(" We have 4 in stock.");
}



snake1.onclick = buysnake1;



function buysnake2(){
    alert("Sorry, we are sold out.");
}



snake2.onclick = buysnake2;


function buysnake3(){
    alert("Sorry, we are sold out.");
}



snake3.onclick = buysnake3;


function buysnake4(){
    alert("We have 6 in stock.");
}



snake4.onclick = buysnake4;


function buysnake5(){
    alert("We have 8 in stock.");
}



snake5.onclick = buysnake5;




function buysnake6(){
    alert("Sorry, we are sold out.");
}



snake6.onclick = buysnake6;


function appreciation(name) {
    return `${name},thanks for visitig my site`
}

function setText() {
    let name = prompt("What is your name?");
    myBuy1.innerHTML = appreciation(name);
}

testout2.onclick = setText;