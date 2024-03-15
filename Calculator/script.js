let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

let acClickCount = 0;
let acClickTimer;

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            let result = eval(string);
            if (!Number.isInteger(result)) {
                let resultString = result.toString();
                let parts = resultString.split('.');
                if (parts[1]?.length > 5) {
                    result = parseFloat(parts[0] + '.' + parts[1].substring(0, 5));
                }
            }
            input.value = result;
            string = result.toString();
        } else if (e.target.innerHTML == 'AC') {
            acClickCount++;
            if (acClickCount === 1) {
                acClickTimer = setTimeout(() => {
                    acClickCount = 0;
                    input.style.backgroundColor = 'white';
                    string = "";
                    input.value = string;
                }, 300);
            } else if (acClickCount === 2) {
                clearTimeout(acClickTimer);
                acClickCount = 0;
                input.style.backgroundColor = '#000';
            }
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});
