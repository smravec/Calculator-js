//functions
function number_click(event_listener){
    const main_number = document.getElementsByClassName("main-number")[0]
    const prev_number = document.getElementsByClassName("prev-number")[0]

    //regex to check if main number is + - / or * 
    if (/^[-/*+]$/.test(main_number.innerHTML)){
        prev_number.innerHTML = `${main_number.innerHTML}${prev_number.innerHTML}`
        main_number.innerHTML = `${event_listener.currentTarget.arg}`
    }
    else{
        main_number.innerHTML = `${main_number.innerHTML}${event_listener.currentTarget.arg}` 
    }
}

function operation_click(event_listener){
    const prev_number = document.getElementsByClassName("prev-number")[0]
    const main_number = document.getElementsByClassName("main-number")[0]

    prev_number.innerHTML = main_number.innerHTML
    main_number.innerHTML = `${event_listener.currentTarget.arg}`
}

function equals_click(){
    const prev_number = document.getElementsByClassName("prev-number")[0]
    const main_number = document.getElementsByClassName("main-number")[0]
    if( prev_number.innerHTML.length > 0 && main_number.innerHTML.length > 0){
        const operation = prev_number.innerHTML[0]

        switch (operation) {
            case "+":
                main_number.innerHTML = parseInt(prev_number.innerHTML.slice(1)) + parseInt(main_number.innerHTML)                 
                prev_number.innerHTML = ""
                break;
            
            case "-":
                main_number.innerHTML = parseInt(prev_number.innerHTML.slice(1)) - parseInt(main_number.innerHTML)                 
                prev_number.innerHTML = ""
            break;
                                
            case "/":
                main_number.innerHTML = parseFloat((parseInt(prev_number.innerHTML.slice(1)) / parseInt(main_number.innerHTML)).toFixed(5))                 
                prev_number.innerHTML = ""
            break;
            
            case "*":
                main_number.innerHTML = parseInt(prev_number.innerHTML.slice(1)) * parseInt(main_number.innerHTML)                 
                prev_number.innerHTML = ""
            break;
        }
    }
}

function delete_click(){
    const main_number = document.getElementsByClassName("main-number")[0]
    if( main_number.innerHTML > 0){
        main_number.innerHTML = main_number.innerHTML.slice(0,-1)
    }
}

function delete_all_click(){
    const main_number = document.getElementsByClassName("main-number")[0]
    const prev_number = document.getElementsByClassName("prev-number")[0]

    main_number.innerHTML = ""
    prev_number.innerHTML = ""
}

//global vars

//class names of all number buttons on the calculator
let number_buttons = [ 
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
]

//Assign event listeners to the number buttons
for (let index = 0; index < number_buttons.length; index++) {
    let button = number_buttons[index];
    button = document.getElementsByClassName(button)[0]
    button.arg = index
    button.addEventListener("click", number_click) 
}

const add = document.getElementsByClassName("add")[0]
add.arg = "+"
add.addEventListener("click", operation_click)

const substract = document.getElementsByClassName("substract")[0]
substract.arg = "-"
substract.addEventListener("click", operation_click)

const multiply = document.getElementsByClassName("multiply")[0]
multiply.arg = "*"
multiply.addEventListener("click", operation_click)

const divide = document.getElementsByClassName("divide")[0]
divide.arg = "/"
divide.addEventListener("click", operation_click)

const equals = document.getElementsByClassName("equals")[0]
equals.addEventListener("click", equals_click)

const delete_button = document.getElementsByClassName("delete")[0]
delete_button.addEventListener("click", delete_click)

const delete_all = document.getElementsByClassName("delete-all")[0]
delete_all.addEventListener("click", delete_all_click)