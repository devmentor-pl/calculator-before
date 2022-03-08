document.addEventListener('DOMContentLoaded', isDOMContentLoaded);

function isDOMContentLoaded() {
    const calculatorForm = document.querySelector('.calculatorForm');

    calculatorForm.addEventListener('submit', e => getResult(e));

    function getResult(e) {
        e.preventDefault();
        const number1 = Number(e.target.elements.number1.value);
        const number2 = Number(e.target.elements.number2.value);
        const operationType = e.target.elements.operation.value;

        let result;

        if (operationType === '+') {
            result = number1 + number2;
        }
        if (operationType === '-') {
            result = number1 - number2;
        }
        if (operationType === '*') {
            result = number1 * number2;
        }
        if (operationType === '/') {
            result = number1 / number2;
        }

        const resultEl = document.querySelector('.result');
        resultEl.innerText = result;
    }
}
