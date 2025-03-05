let numbers = [];

function insert() {
    const num1 = document.getElementById('num1').value;
    if (num1 !== '') {
        const number = parseFloat(num1);
        if (!isNaN(number)) {
            numbers.push(number);
            updateDisplay();
        } else {
            alert('Please enter a valid number');
        }
    } else {
        alert('Please enter a number');
    }
}

function deleteAll() {
    numbers = [];
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('elements').innerText = numbers.join(', ');
    document.getElementById('sum').innerText = numbers.reduce((a, b) => a + b, 0);
    document.getElementById('highest').innerText = Math.max(...numbers);
    document.getElementById('lowest').innerText = Math.min(...numbers);

    document.getElementById('sum').style.color = 'blue';
    document.getElementById('highest').style.color = 'green';
    document.getElementById('lowest').style.color = 'red';
}
