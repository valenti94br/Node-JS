const logplease = require('logplease');
const numeros = require('./numeros');

const numerosParaVerificar = [2, 3, 101, 201, 202, 100];

numerosParaVerificar.forEach(num => {
  if (numeros.esPar(num)) {
    logplease.info(`El número ${num} es par`);
  } else {
    logplease.error(`El número ${num} no es par`);
  }
});
