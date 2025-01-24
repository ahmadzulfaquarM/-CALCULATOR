const resultDisplay = document.getElementById('result');

function appendNumber(number) {
  resultDisplay.value += number;
}

function appendOperator(operator) {
  if (resultDisplay.value === '') return;
  const lastChar = resultDisplay.value.slice(-1);
  if (['+', '-', '*', '/', '%'].includes(lastChar)) return;
  resultDisplay.value += operator;
}

function clearDisplay() {
  resultDisplay.value = '';
}

function deleteLast() {
  resultDisplay.value = resultDisplay.value.slice(0, -1);
}

function calculateResult() {
  try {
    resultDisplay.value = eval(resultDisplay.value.replace('÷', '/').replace('×', '*'));
  } catch {
    resultDisplay.value = 'Error';
  }
}