let darkThemeColor = '#010922';
let lightThemeColor = '#3056c9c0';

let indicator = 0;
let color;

let text;

function changeText(indicator) {
    currentText = document.getElementById('change_color').innerHTML
    if (indicator == 0) {
        document.getElementById('change_color').innerHTML = 'Светлая тема'
    } else {
        document.getElementById('change_color').innerHTML = 'Тёмная тема'
    }
    console.log(currentText)
}

function changeColor(color) {
    if (indicator == 0) {
        color = lightThemeColor;
        indicator = 1;
    } else {
        color = darkThemeColor;
        indicator = 0;
    }
    document.body.style.backgroundColor = color
    changeText(indicator);
    console.log(indicator, color);
}


const form = document.getElementById('feedback-form');

form.addEventListener('submit', function (event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
        event.preventDefault();
        window.alert('Пожалуйста, заполните все формы!')
    }
});



function openModal() {
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }


    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



