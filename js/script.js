/*

1. chiedere nome
2. chiedere cognome
3. chiedere colore
4. restituire pass


*/

let nome = prompt('enter you name');

let cognome = prompt('enter you surname');

let color = prompt('enter you favourite color');

let pass = nome + cognome + color + '22';

document.getElementById('pw-scarsa').innerHTML = 'ecco la tua password:' + '  ' + pass;


