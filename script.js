

const inputEmail = document.querySelector('#email');
const inputImienazwisko = document.querySelector('#imienazwisko');

function przyciskImienazwisko(){
        
    var value = inputImienazwisko.value;
    const reg = /^[A-ZĄĘŁŃÓŚŻŹ][a-zA-ZąĄęĘłŁńŃóÓśŚżźŻŹ ]{3,}$/g;
    
    if(!reg.test(value)) {
        alert("Imie i nazwisko może zawierać tylko polskie znaki!")
    } else {
        alert("Imie i nazwisko wprowadzone poprawnie. Nazywasz się " + value)
    }
};

function przyciskEmail(){
        
    var value = inputEmail.value;
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!reg.test(value)) {
        alert("Wpisany email nie jest poprawny")
    } else {
        alert("Email wpisany poprawnie. Twój email to " + value)
    }
};


var  max = [];
function maxOblicz(){
    max7Value = document.getElementById('max7').value;
    max = max7Value.split`,`.map(x=>+x);
    var maxMax = Math.max(...max);
    console.log(max);
    console.log(maxMax);
    document.getElementById("wynikMax").innerHTML = "Największa liczba z ciągu który podałeś to: " + maxMax;
}



function przyciskFibonacci()
{
    document.getElementById("wynikFibo").innerHTML = "Wartość elementu ciągu fibonacciego który podałeś to: " + fibo(document.getElementById("fiboPole").value);
}

function fibo(n)
{
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else if (n > 1) {
        return fibo(n - 1) + fibo(n - 2);
    }
};





