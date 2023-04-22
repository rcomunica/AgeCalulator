const urlParams = new URLSearchParams(window.location.search);
let day = parseInt(urlParams.get('day')); 
let month = parseInt(urlParams.get('month'));
let year = parseInt(urlParams.get('year'));

const form = document.getElementById("calculatorAge");
const dayResult = document.getElementById("dayResult");
const monthResult = document.getElementById("monthResult");
const yearResult = document.getElementById("yearResult");

let today = new Date()
let currentYear = today.getFullYear()
let currentDay = today.getDate()
let currentMonth = today.getMonth()



    if(year > currentYear || isNaN(year) || year <= 0){        
        yearResult.innerText = "- -"     
        console.error("Año no valido");   
    }

    if(isNaN(day)){
        dayResult.innerText = "- -"    
        console.error("Dia no valido");
    }

    if (isNaN(month) || month >= 13) {
        monthResult.innerText = "- -"    
        console.error("Mes no valido");
    }


function cheackTimeOfLife(){
    let birthdate = new Date(`${year}-${month}-${day}`);
    const diff = today.getTime() - birthdate.getTime();
    const años = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    yearResult.innerText = años
    monthResult.innerText = meses
    dayResult.innerText = dias
    
}


cheackTimeOfLife();
