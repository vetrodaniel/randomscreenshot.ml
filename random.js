let number = Math.floor(1000 + Math.random() * 9000);
console.log(number)

let letter = "";
let alphabet = "abcdefghijklmnopqrstuvwxyz";

while (letter.length < 2) {
 letter += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(letter)

function myFunction() {
    window.open('https://prnt.sc/'+letter+number);
    location.reload(); 
} 

