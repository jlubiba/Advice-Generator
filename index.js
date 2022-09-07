// Type what is below to get it working on your VS terminal after installing "npm i node-fetch"
// import fetch from "node-fetch";

let diceRoll = document.querySelector(".dice-circle");
// diceRoll.addEventListener('click', a());
 diceRoll.onclick = function buttonPress() {
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
        .then(res => res.json())
        .then(data => {

            let advice = document.querySelector("#advice-text");
            let adviceNumber = document.querySelector("#advice-number");

            function changingStuff(number, slipAdvice) {
                number = data.slip.id; // From the API's JSON, get the advice number.
                slipAdvice = data.slip.advice; // From the API's JSON, get the advice.
                console.log("Id:", number);
                console.log("Advice:", slipAdvice);
                adviceNumber.innerHTML = "Advice # " + number;
                // Advice section
                advice.innerHTML = slipAdvice; // Get the advice portion of the API here.
            };
            changingStuff();
        })
}

