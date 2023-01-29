const suma = (numero1, numero2) => {
    return new Promise ( (resolve, reject) => {
      if (numero1===0) reject ("Operación innecesaria");
      if (numero2===0) reject ("Operación innecesaria");
      if ((numero1 + numero2) < 0) reject ("La calculadora solo devuelve valores positivos");
      resolve (numero1 + numero2);
    }); 
}
  
const resta = (numero1, numero2) => {
    return new Promise ( (resolve, reject) => {
      if (numero1 === 0) reject ("Operación innecesaria");
      if (numero2 === 0) reject ("Operación innecesaria");
      if ((numero1 - numero2) < 0) reject ("La calculadora solo devuelve valores positivos");
      resolve (numero1 - numero2);
    })  
}
  
const multiplicacion = (numero1, numero2) => {
    return new Promise ( (resolve, reject) => {
      if (numero1 < 0) reject ("La calculadora solo devuelve valores positivos");
      if (numero2 < 0) reject ("La calculadora solo devuelve valores positivos");
      resolve (numero1 * numero2);
    })  
}
  
const division = (numero1, numero2) => {
    return new Promise ( (resolve, reject) => {
      if (numero2 === 0) reject ("No se puede dividir por cero");
      resolve (numero1 / numero2);
    })  
}
  
const calculos = async () => {
    try {
      const numero1 = 5;
      const numero2 = 4;
  
      const resultadoSuma = await suma (numero1, numero2)
      console.log (resultadoSuma)
  
      const resultadoResta = await resta (numero1, numero2)
      console.log (resultadoResta)
  
      const resultadoMultiplicacion = await multiplicacion (numero1, numero2)
      console.log (resultadoMultiplicacion)
  
      const resultadoDivision = await division (numero1, numero2)
      console.log (resultadoDivision)
    } 
    catch (error) {
      console.log (error)
    }
}
  
calculos ();