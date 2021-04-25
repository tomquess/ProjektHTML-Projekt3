

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
