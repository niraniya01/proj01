let firstName = "Harish"

let lastName = "Niraniya"

let fullName = firstName +" "+ lastName

console.log(fullName)

let name = "Linda"

let greeting = "Hi there"

function nameGreeter() {
    console.log(greeting + ", " + name + "!")
}

nameGreeter()

let myPoints = 3

function add3points() {
    myPoints += 3
}

function remove1point() {
    myPoints -= 1
}

add3points()

add3points()

add3points()

remove1point()

remove1point()

console.log(myPoints)

function add() {
    let x = parseFloat(document.getElementById("num1").value)

    let y = parseFloat(document.getElementById("num2").value)

    document.getElementById("result").textContent = x + y
}

function subtract() {
    let x = parseFloat(document.getElementById("num1").value)

    let y = parseFloat(document.getElementById("num2").value)

    document.getElementById("result").textContent = x - y
}

function multiply() {
    let x = parseFloat(document.getElementById("num1").value)

    let y = parseFloat(document.getElementById("num2").value)

    document.getElementById("result").textContent = x * y
}

function divide() {
    let x = parseFloat(document.getElementById("num1").value)

    let y = parseFloat(document.getElementById("num2").value)

    document.getElementById("result").textContent = x / y
}