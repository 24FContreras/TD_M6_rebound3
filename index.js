//Crear tres variables, una con cada palabra clave: var, let, const; y construir una porción
//de código donde la ejecución tenga un error por el alcance de cada una de éstas, ya sea
//porque la definición es al interior de una función, de un bloque o fuera de ellos

const bloqueUno = () => {
  var variableVar = "esto es una variable con var";
  const variableConst = "esto es una variable con const";
};

const bloqueDos = () => {
  let variableLet = "esto es una variable con let";

  //error de scope para const
  console.log(variableConst);
};

//error de scope para let
console.log(variableLet);

//comportamiento de var no es lo esperable, redeclara una variable interna y aplica console.log
variableVar = "Redeclarando var";
console.log(variableVar);

//Crear una función utilizando el formato tradicional con la palabra clave function, y luego
//volver a escribirla utilizando la sintaxis de función de flecha, y guardando la declaración
//dentro de una variable. La función debe recibir, al menos, dos argumentos.

function declaracionRegular(textoUno, textoDos) {
  return `${textoUno} ${textoDos}`;
}

const declaracionFlecha = (textoUno, textoDos) => `${textoUno} ${textoDos}`;

//Crear una función similar a la del ejercicio, utilizando esta vez un objeto con
//características de algún animal, que contenga, al menos, cinco pares de llave - valor.
//Utilizar template literals para escribir un texto empleando los valores del objeto, y
//Destructuring para definir los valores del objeto dentro de la función.

const blueJay = {
  articulo: "la",
  nombre: "Chara azul",
  clase: "ave",
  color: "azul",
  continente: "América del Norte",
  alimentacion: "omnívora",
};

const describirAnimal = (animal) => {
  const { articulo, nombre, clase, color, continente, alimentacion } = animal;
  console.log(
    `${articulo} ${nombre} es un animal de la clase ${clase}. Su color es ${color}, vive en ${continente} y su alimentación es ${alimentacion}`
  );
};

describirAnimal(blueJay);

//Tomar el objeto creado con anterioridad, y crear una copia actualizada usando el spread
//operator; actualizar dos campos, y añadir dos nuevos.

const blueJayActualizado = {
  ...blueJay,
  clase: "Ave",
  color: "azul, negro y blanco",
  comportamiento: "agresivo",
  puesta: "cuatro o cinco huevos",
};

//Obtener las propiedades del objeto en un Array, utilizando el método Object.values(), y
//luego usar un ciclo for of para mostrar por pantalla todos los ítems del Array.

const propiedadesBlueJay = Object.values(blueJayActualizado);

for (const propiedad of propiedadesBlueJay) {
  console.log(propiedad);
}
