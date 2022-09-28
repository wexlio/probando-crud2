var horacio = ["Dec 31 2029 23:59:59 GMT-0500"];

var textNombre11 = localStorage.getItem("producto");
var textHijoNextHermano = localStorage.getItem("precio");

var imagenPrincipal  = localStorage.getItem("imagenPrincipal");
var imagenPrincipal2  = localStorage.getItem("imagenPrincipal2");

var arregloMadre = localStorage.getItem("arregloMadre");

res = JSON.parse(arregloMadre);

var descount = 0.5;

var arraysPrincipales  = localStorage.getItem("arrays11");

// import {exportado} from"./codigo3.js";

// var portada = [
// 	"img-portada0", 
// 	"img-portada1", 
// 	"img-portada2", 
// 	"img-portada3"
// ];

// var fraseBienvenida = [
// 	"BIENVENIDOS...",
// 	"JOYAS DE CALIDAD",
// 	"REGALA ALGO SORPRENDENTE",
// 	"PERSONALIZA TU JOYA"
// ];

// var logo = ["img-logo"];

// var nombreTienda = ["Mandala Joyería"];

// var slogan = ["Tienda Whatsapp, todo lo que buscas está..."];


// // ------------color principal de pagina --inicio---
// var colorPrincipalPagina = ["#0ca"]

// // const style = document.documentElement.style;

// // style.setProperty("--color-primario", productos777[4][0].colorPrincipalPagina);
// // #48ac98
// // #0ca

// // ------------color principal de pagina --fin---


// var productos = [

// 	productos1 = [
//     {
//         "nombre": "Corona princesa",
//         "precio": "S/. 65.00",
//         "imagen1": "coronaPrincesa1",
//         "imagen2": "coronaPrincesa2",
//         "imagen3": "",
//         "imagen4": "",
//         "imagen5": "",
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Corona corazones",
//         "precio": "S/. 80.00",
//         "imagen": "coronaCorazones1",
//         "imagenes":["coronaCorazones1","coronaCorazones2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Corona inglesa",
//         "precio": "S/. 90.00",
//         "imagen": "coronaInglesa2",
//         "imagenes":["coronaInglesa1","coronaInglesa2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Anillo entrelazado",
//         "precio": "S/. 60.00",
//         "imagen": "anilloEntrelazado1",
//         "imagenes":["anilloEntrelazado1","anilloEntrelazado2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Anillo real",
//         "precio": "S/. 80.00",
//         "imagen": "anilloReal1",
//         "imagenes":["anilloreal1","anilloreal2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Anillo cruzado",
//         "precio": "S/. 75.00",
//         "imagen": "anilloCruzado1",
//         "imagenes":["anilloCruzado1","anilloCruzado2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Anillo naturaleza",
//         "precio": "S/. 65.00",
//         "imagen": "anilloNaturaleza2",
//         "imagenes":["anilloNaturaleza1","anilloNaturaleza2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Anillo Olas",
//         "precio": "S/. 50.00",
//         "imagen": "anilloOlas1",
//         "imagenes":["anilloOlas1","anilloOlas2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Coronita",
//         "precio": "S/. 55.00",
//         "imagen": "coronita1",
//         "imagenes":["coronita1","coronita2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Corona Queen",
//         "precio": "S/. 80.00",
//         "imagen": "coronaQueen2",
//         "imagenes":["coronaQueen1","coronaQueen2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "corazón platino",
//         "precio": "S/. 60.00",
//         "imagen": "corazonPlatino2",
//         "imagenes":["corazonPlatino1","corazonPlatino2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Corona Alicia",
//         "precio": "S/. 95.00",
//         "imagen": "coronaAlicia2",
//         "imagenes":["coronaAlicia1", "coronaAlicia2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Andrómeda",
//         "precio": "S/. 60.00",
//         "imagen": "andromeda1",
//         "imagenes":["andromeda1", "andromeda2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Punto de luz",
//         "precio": "S/. 60.00",
//         "imagen": "puntoDeLuz1",
//         "imagenes":["puntoDeLuz1", "puntoDeLuz2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Tres",
//         "precio": "S/. 100.00",
//         "imagen": "tres1",
//         "imagenes":["tres1","tres2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Solitario",
//         "precio": "S/. 70.00",
//         "imagen": "solitario1",
//         "imagenes":["solitario1","solitario2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Trepador",
//         "precio": "S/. 75.00",
//         "imagen": "trepador1",
//         "imagenes":["trepador1","trepador2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Infinito",
//         "precio": "S/. 60.00",
//         "imagen": "infinito1",
//         "imagenes":["infinito1","infinito2"],
//         "descripcion": "Hecho de plata con pureza 925"
//     },
//     {
//         "nombre": "Halley",
//         "precio": "S/. 65.00",
//         "imagen": "halley1",
//         "imagenes ":["halley1","halley2"],
//         "descripcion": "Hecho ade plata con pureza 925"
//     }
// ],


// 	productos2 = [
// 		{
// 			nombre : "Costradores",
// 			precio : "S/. 555.00",
// 			imagen : "Corona-Reina",
// 			imagenes : ["Corazones-unidos", "Corona-Reina", "Corazon-de-Plata-Personalizado"],
// 			descripcion : "Hermoso detalle para regalar a esa persona tan querida..."
// 		},
// 		{
// 			nombre : "Vegeta",
// 			precio : "S/. 777.00",
// 			imagen : "Corazon-de-Plata-Personalizado",
// 			imagenes : ["Corazones-unidos", "Corona-Reina", "Corazon-de-Plata-Personalizado"],
// 			descripcion : "Hermoso detalle para regalar a esa persona tan querida..."
// 		},
// 		{
// 			nombre : "Goku",
// 			precio : "S/. 9999.00",
// 			imagen : "Corona-Reina",
// 			imagenes : ["Corazones-unidos", "Corona-Reina", "Corazon-de-Plata-Personalizado"],
// 			descripcion : "Hermoso detalle para regalar a esa persona tan querida..."
// 		},
// 		{
// 			nombre : "Ostras",
// 			precio : "S/. 444.00",
// 			imagen : "Corazones-unidos",
// 			imagenes : ["Corazones-unidos", "Corona-Reina", "Corazon-de-Plata-Personalizado"],
// 			descripcion : "Hermoso detalle para regalar a esa persona tan querida..."
// 		},
// 		{
// 			nombre : "Ostras",
// 			precio : "S/. 444.00",
// 			imagen : "Corazones-unidos",
// 			imagenes : ["Corazones-unidos", "Corona-Reina", "Corazon-de-Plata-Personalizado"],
// 			descripcion : "Hermoso detalle para regalar a esa persona tan querida..."
// 		}

// 	],

// 	productos3 = [
// 		{
// 			nombre : "Tu nombre hecho de Plata",
// 			precio : "S/. 777.00",
// 			imagen : "Corazones-unidos",
// 			imagenes : ["Corazon-de-Plata-Personalizado", "Corazon-de-Plata-Personalizado", "Corazon-de-Plata-Personalizado"],
// 			descripcion : "Hermoso detalle para regalar a esa persona tan querida..."
// 		},
// 		{
// 			nombre : "Collar de plata corazon",
// 			precio : "S/. 199.00",
// 			imagen : "Corona-Reina",
// 			imagenes : ["Corazones-unidos", "Corazones-unidos", "Corazones-unidos"],
// 			descripcion : "Hermoso detalle para regalar a esa persona tan querida..."
// 		},
// 		{
// 			nombre : "Collar de oro",
// 			precio : "S/. 599.00",
// 			imagen : "Corazon-de-Plata-Personalizado",
// 			imagenes : ["Corona-Reina", "Corona-Reina", "Corona-Reina"],
// 			descripcion : "Hermoso detalle para regalar a esa persona tan querida..."
// 		}
// 	],

// 	productos4 = [
// 		{
// 			nombre : "Costradores",
// 			precio : "S/. 555.00",
// 			imagen : "Corona-Reina",
// 			imagenes : ["Corazones-unidos", "Corona-Reina", "Corazon-de-Plata-Personalizado"],
// 			descripcion : "Hermoso detalle para regalar a esa persona tan querida..."
// 		},
// 		{
// 			nombre : "Vegeta",
// 			precio : "S/. 777.00",
// 			imagen : "Corazon-de-Plata-Personalizado",
// 			imagenes : ["Corazones-unidos", "Corona-Reina", "Corazon-de-Plata-Personalizado"],
// 			descripcion : "Hermoso detalle para regalar a esa persona tan querida..."
// 		},
// 		{
// 			nombre : "Goku",
// 			precio : "S/. 9999.00",
// 			imagen : "Corona-Reina",
// 			imagenes : ["Corazones-unidos", "Corona-Reina", "Corazon-de-Plata-Personalizado"],
// 			descripcion : "Hermoso detalle para regalar a esa persona tan querida..."
// 		},
// 		{
// 			nombre : "Ostras",
// 			precio : "S/. 444.00",
// 			imagen : "Corazones-unidos",
// 			imagenes : ["Corazones-unidos", "Corona-Reina", "Corazon-de-Plata-Personalizado"],
// 			descripcion : "Hermoso detalle para regalar a esa persona tan querida..."
// 		},
// 		{
// 			nombre : "Ostras",
// 			precio : "S/. 444.00",
// 			imagen : "Corazones-unidos",
// 			imagenes : ["Corazones-unidos", "Corona-Reina", "Corazon-de-Plata-Personalizado"],
// 			descripcion : "Hermoso detalle para regalar a esa persona tan querida..."
// 		}

// 	]
// ]


// var categorias = [
// 	{
// 		nombre : "ANILLOS",
// 		imagen : "anillos"
// 	},
// 	{
// 		nombre : "COLLARES",
// 		imagen : "collares"
// 	},
// 	{
// 		nombre : "PULSERAS",
// 		imagen : "pulseras"
// 	}
// ]




// // ------------------Cargar archivos excel-json

// let selectedFile;

// var productos777 = [];

// const inputCargar = document.getElementById("inputs1112");

// inputCargar.addEventListener("change", (event) =>{
// 	selectedFile = event.target.files[0];
// })

// const buttonCargar = document.getElementById("button-cargar-excel");

// buttonCargar.addEventListener("click", (event) =>{
//     // XLSX.utils.json_to_sheet(data, 'out.xlsx');
//     if(selectedFile){
//         let fileReader = new FileReader();
//         fileReader.readAsBinaryString(selectedFile);
//         fileReader.onload = (event)=>{
//          let data = event.target.result;
//          let workbook = XLSX.read(data,{type:"binary"});
//          console.log(workbook);
//          workbook.SheetNames.forEach(sheet => {
//               let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
//               console.log(rowObject);
//               document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
//               console.log(productos777);
//               const genial = productos777.push(rowObject);
//               console.log(genial);
//          });
//         }
//     }
// })

// const verPagina = document.getElementById("ver-pagina");

// verPagina.addEventListener("click", (event) =>{
// 	location.href = "index.html";
// })


// localStorage.setItem("arrays11", productos777);

// // console.log(arrays11);

// // setInterval( () => {
// // console.log(productos777)},5000);

// // const genial = productos777.push(rowObject);
// // console.log(genial);

