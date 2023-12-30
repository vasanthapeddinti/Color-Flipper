const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    console.log("Hello!!"); // for console debug

    let hexColor = '#';
    let randomIndex; // has to be in the range of 0 to 15
    for(let i = 0; i < 6; i++) {
        randomIndex = getRandomNumber()
        hexColor += hex[randomIndex];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}