let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random()*10)]

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
        output.innerHTML =
        `YOU GUESSED RIGHT &#128079, YOUR NUMBER WAS <p><span>${number}</span></p>`
    
        
    } else if (input < number){
        output.innerHTML = "YOU GUSSESSED TOO LOW &#128524 !"
    };
    if (input > number ){
        output.innerHTML = "YOU GUSSESSED TOO HIGH &#128527 !"
    }
});