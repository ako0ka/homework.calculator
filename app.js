const screen = document.getElementById("screen")
screen.value = ""
console.log(screen);

const one = document.getElementById("1")
const two = document.getElementById("two")
const ac = document.getElementById("ac")
const clear = document.getElementById("clear")
const plusminus = document.getElementById("plusminus")
const procent = document.getElementById("procent")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const gamravleba = document.getElementById("gamravleba")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const minus = document.getElementById("minus")
const three = document.getElementById("three")
const plus = document.getElementById("plus")
const zero = document.getElementById("zero")
const mdzime = document.getElementById("mdzime")
const toloba = document.getElementById("toloba")
const gayofa = document.getElementById("gayofa")


let operator = ""
let num1 = ''


one.addEventListener("click", () => {
 screen.value += "1"
});
two.addEventListener("click", () => {
    screen.value += "2"
   });
   ac.addEventListener("click", () => {
    screen.value = ""
   });
   clear.addEventListener("click", () => {
    screen.value = screen.value.slice(0, -1)
   });
  plusminus.addEventListener("click", () => {
    screen.value += "+/-"
    
   });
   procent.addEventListener("click", () => {
    screen.value += "%"
   
   });
   seven.addEventListener("click", () => {
    screen.value += "7"
   
   });
   eight.addEventListener("click", () => {
    screen.value += "8"
   
   });
   nine.addEventListener("click", () => {
    screen.value += "9"
   
   });
   gamravleba.addEventListener("click", () => {
    operator = "*"
   num1 = parseFloat(screen.value)
   screen.value = ""
   });
   four.addEventListener("click", () => {
    screen.value += "4"
    
   });
   five.addEventListener("click", () => {
    screen.value += "5"
    
   });
   six.addEventListener("click", () => {
    screen.value += "6"
    
   });
   minus.addEventListener("click", () => {
    operator = "-"
   num1 = parseFloat(screen.value)
   screen.value = ""
   });
   three.addEventListener("click", () => {
    screen.value += "3"
   
   });
   plus.addEventListener("click", () => {
   operator = "+"
   num1 = parseFloat(screen.value)
   screen.value = ""
   });
   zero.addEventListener("click", () => {
    screen.value += "0"
   
   });
   mdzime.addEventListener("click", () => {
    screen.value += ","
   
   });
  
   gayofa.addEventListener("click", () => {
    operator = "/"
    num1 = parseFloat(screen.value)
    screen.value = ""
   });

   toloba.addEventListener("click", () => {
    let num2 = parseFloat(screen.value)
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;
            default:
        result = num2

        }
        screen.value = result
   });
  