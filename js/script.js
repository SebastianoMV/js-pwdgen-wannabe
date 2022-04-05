/*

1. chiedere nome
2. chiedere cognome
3. chiedere colore
4. restituire pass


*/

const nome = prompt('enter you name');

const cognome = prompt('enter you surname');

const color = prompt('enter you favourite color');

const passwordGen = 
`
La tua password è: <strong>${nome}${cognome}${color}22</strong>
`;

document.getElementById('pw-scarsa').innerHTML = passwordGen;


