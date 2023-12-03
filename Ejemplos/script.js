// console.log("hola mundo")

// //AMBITO DE LAS VARIABLES 

// const kilometros = 100;
// console.log(kilometros)

// // if (1==1){
// //     const kilometros = 300;
// //     console.log(kilometros)
// // }

// // kilometros = 50;
// // console.log(kilometros)

// // ARREGLOS

// const arreglonumereros=[10,20,30];
// arreglonumereros.push(40);

// console.log(arreglonumereros)

// //  OBJETOS 

// const persona = {
//     nombre: "Juan", 
//     apellido:"Diaz", 
//     edad: 40
// }

// console.log(persona)
// persona.apellido = "Aux"
// console.log(persona)


// //CLASES 

// class Animales {
//     constructor(patas, tamanio, ){
//         this.patas= patas;
//         this.tamanio=tamanio;
//     }
// }

// class Gato extends Animales {
//     constructor(patas, tamanio, pelaje ){
//         super(patas, tamanio)
//         this.pelaje = pelaje
//     }
// }
// const perro = new Animales(4, "Mediana")
// console.log (perro)

// const felix=new Gato(4 ,"pequeño", "liso")
// console.log (felix)

// //Funciones 

// // function mensaje (nombre){
// //     console.log ("Hola el nombre es "+nombre)
// // }
// // mensaje("Anita")

// //FUNCIONES DE FLECHA  / FUNCTION ARROW

// // const mensaje = (nombre, edad ) => {
// //     console.log ("Hola el nombre es " + nombre + "y tiene" + edad) 
// //     const saludo = "Hola el nombre es " + nombre + "y tiene" + edad
// //     return saludo 
// // }




// const suma =(op1,op2)=>{
//     const resultado = op1+op2
//     return resultado
// }




// console.log(suma(5,4))


// //TEMPLATE STRING ALT+96

// const mensaje = (nombre, edad ) => {
//     console.log (`Hola el nombre es ${nombre} y tiene ${edad} años `) 
//     const saludo = `Hola el nombre es ${nombre} y tiene ${edad} `
//     return saludo 
// }
// const resultado = mensaje("Anita",30);
// console.log(resultado);


// //  DESTRUCTURACION DE OBJETOS 

// const web = {
//     nombre: "Udenar",
//     links: {
//       sitio: "www.udenar.edu.co"
//     },
//     redesSociales: {
//       youtube: {
//         enlace: "www.youtube.com/udenar",
//         nombre: "Youtube Udenar"
//       },
//       facebook:{
//         enlace: "www.facebook.com/udenar",
//         nombre: "Facebook Udenar"
//       },
//       instagram:{
//         enlace: "www.instagram.com/udenar",
//         nombre: "Instagram Udenar"
//       }
//     }
//   }

// console.log (web);
// const{instagram}=web.redesSociales;
// console.log (instagram)


// // OPERADOR DE PROPAGACION 

// const frutas=["manzana","pera","mango","fresa"];
// const dulces=["mermelada","manjar","halado"];
// //const postres=[frutas,dulces]

// console.log(dulces);
// const postres = [...frutas, ...dulces];
// console.log(postres);



//TIPO MODULO 

import { PI,suma } from "./modulo.js";

console.log(PI);

suma(5,6);

//promesas
//