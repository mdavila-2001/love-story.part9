const correctPassword = '171024';
let input = '';

function enterDigit(digit) {
  if (input.length < 6) {
    input += digit;
  }

  const display = document.getElementById('inputDisplay');
  display.textContent = input.padEnd(6, '•');

  if (input.length === 6) {
    if (input === correctPassword) {
      document.getElementById('passwordScreen').classList.remove('active');
      document.getElementById('notepadScreen').classList.add('active');
    } else {
      alert('Contraseña incorecta, intenta de nuevo');
      input = '';
      display.textContent = '••••••';
    }
  }
}
