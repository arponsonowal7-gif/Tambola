let numbers = [];

function generateNumber(){

if(numbers.length == 90){
alert("All numbers finished");
return;
}

let num;

do{
num = Math.floor(Math.random()*90)+1;
}while(numbers.includes(num));

numbers.push(num);

document.getElementById("number").innerText = num;

let li = document.createElement("li");
li.innerText = num;
document.getElementById("history").appendChild(li);

}
