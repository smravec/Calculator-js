//global vars
let prevcislo = null
let znamienko = null
let usingoperation = 0

//number buttons

const nula = document.getElementById("nula")
const jedna = document.getElementById("jedna")
const dva = document.getElementById("dva")
const tri = document.getElementById("tri")
const styri = document.getElementById("styri")
const pat = document.getElementById("pat")
const sest = document.getElementById("sest")
const sedem = document.getElementById("sedem")
const osem = document.getElementById("osem")
const devat = document.getElementById("devat")

nula.arg = 0
jedna.arg = 1
dva.arg = 2
tri.arg = 3
styri.arg = 4
pat.arg = 5
sest.arg = 6
sedem.arg = 7
osem.arg = 8
devat.arg = 9

nula.addEventListener("click", writetotext)
jedna.addEventListener("click", writetotext)
dva.addEventListener("click", writetotext)
tri.addEventListener("click", writetotext)
styri.addEventListener("click", writetotext)
pat.addEventListener("click", writetotext)
sest.addEventListener("click", writetotext)
sedem.addEventListener("click", writetotext)
osem.addEventListener("click", writetotext)
devat.addEventListener("click", writetotext)

function writetotext (event_listener) {
    if(vysledok.innerText == "vysledok" || vysledok.innerText == "+" || vysledok.innerText == "-" || vysledok.innerText == "/" || vysledok.innerText == "*"){
        vysledok.innerText = event_listener.currentTarget.arg
    }
    else{
        vysledok.innerText = vysledok.innerText + event_listener.currentTarget.arg
    }
    
    usingoperation = 0
}
// text field

const vysledok = document.getElementById("vysledok")

//delete buttons

const delall = document.getElementById("delete-everything")
const del = document.getElementById("delete")


delall.addEventListener("click", delalltext)
del.addEventListener("click", deltext)

function delalltext(){
    vysledok.innerText = "vysledok"
    usingoperation = 0
    prevcislo = null
    znamienko = null
    
}

function deltext(){
    if(usingoperation == 0){
        if(vysledok.innerText.length == 1){
            vysledok.innerText = "vysledok"
        }
        else{
            vysledok.innerText = vysledok.innerText.slice(0,-1)
        }
    }
}
//operation buttons

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const deleno = document.getElementById("deleno")
const krat = document.getElementById("krat")

plus.arg = "plus"
minus.arg = "minus"
deleno.arg = "deleno"
krat.arg = "krat"

plus.addEventListener("click", operation)
minus.addEventListener("click", operation)
deleno.addEventListener("click", operation)
krat.addEventListener("click", operation)

function operation(event_listener){
    prevcislo = vysledok.innerText

    if(event_listener.currentTarget.arg == "plus"){
        znamienko = "+"
        vysledok.innerText = "+"
        usingoperation = 1
    }

    if(event_listener.currentTarget.arg == "minus"){
        znamienko = "-"
        vysledok.innerText = "-"
        usingoperation = 1
    }

    if(event_listener.currentTarget.arg == "deleno"){
        znamienko = "/"
        vysledok.innerText = "/"
        usingoperation = 1
    }

    if(event_listener.currentTarget.arg == "krat"){
        znamienko = "*"
        vysledok.innerText = "*"
        usingoperation = 1
    }
}

//equal button

const rovna_sa = document.getElementById("rovna_sa")

rovna_sa.addEventListener("click", equals)

function equals(){
    if(prevcislo != null && usingoperation == 0 && znamienko != null){
        if(znamienko == "+"){
            vysledok.innerText = parseInt(prevcislo) + parseInt(vysledok.innerText)
        }

        if(znamienko == "-"){
            vysledok.innerText = parseInt(prevcislo) - parseInt(vysledok.innerText)
        }

        if(znamienko == "/"){
            vysledok.innerText = parseInt(prevcislo) / parseInt(vysledok.innerText)
        }

        if(znamienko == "*"){
            vysledok.innerText = parseInt(prevcislo) * parseInt(vysledok.innerText)
        }
    }
}