// const data = JSON.parse(arraysPrincipales);
console.log(res);

// ---------color de pagina inicio---
const style = document.documentElement.style;
console.log(res[3][1].colorPrincipalPagina);
style.setProperty("--color-primario", res[3][1].colorPrincipalPagina);

// ---------color de pagina fin---

document.getElementById("textNombre11").innerHTML = textNombre11;
document.getElementById("precio22").innerHTML = textHijoNextHermano;
document.getElementById("nombrePrincipal").innerHTML = textNombre11;
document.getElementById("precioPrincipal").innerHTML = textHijoNextHermano;
document.getElementById("precioPrincipal1").innerHTML = textHijoNextHermano;
document.getElementById("precioPrincipal2").innerHTML = textHijoNextHermano;
imagencita = document.getElementById("gatoncio");
console.log(imagenPrincipal2);
imagencita.src = `${imagenPrincipal2}`;


window.addEventListener("click", function(e){
		console.log(e.target);
		let select33 = e.target;
		const classSelect33 = select33.classList.item(0);
		console.log(classSelect33);
		if (classSelect33 == "volver" || classSelect33 == "cerraros" || classSelect33 == "volver111") {
			location.href = "index.html";
		}

		if(e.target == modalC){

			modalC.style.opacity = "0";
			setTimeout(function(){
			modalC.style.visibility = "hidden";
			modal.classList.toggle("modal-close");
			},900)
		
		}
})



console.log(imagenPrincipal);
console.log(imagenPrincipal.length);

let a= "";
let b= "";

if (imagenPrincipal.length<=2) {
	a = imagenPrincipal.substr(0,1);
	q = imagenPrincipal.substr(-1);
	v=parseInt(q);
	}else if (imagenPrincipal.length>2) {
		a = imagenPrincipal.substr(0,1);
		q = imagenPrincipal.substr(-2);
		v=parseInt(q);
		}

console.log(a);
console.log(v);

// console.log(productos[a][v].imagen1);

	const imagenGrande = document.getElementById("galeria");
	imagenGrande.innerHTML += 
			`<div class="img-container11">
				<img class="foto-descripcion" src="img/${res[0][v+1].imagen1}" id="foto-descripcion">
			</div>
				<div class="mini-galeria" id="mini-galeria">					
				</div>`;
				const imagenesChicas = document.getElementById("mini-galeria");
				// for (var i = 0; i < 4; i++) {
				const imagen1 = `<div><img class="item1" src="img/${res[0][v+1].imagen1}" id="foto-descripcion-mini"></div>`;
				const imagen2 = `<div><img class="item1" src="img/${res[0][v+1].imagen2}" id="foto-descripcion-mini"></div>`;
				const imagen3 = `<div><img class="item1" src="img/${res[0][v+1].imagen3}" id="foto-descripcion-mini"></div>`;
				const imagen4 = `<div><img class="item1" src="img/${res[0][v+1].imagen4}" id="foto-descripcion-mini"></div>`;
				const imagen5 = `<div><img class="item1" src="img/${res[0][v+1].imagen5}" id="foto-descripcion-mini"></div>`;
				if (res[0][v+1].imagen5 != "q") {
					imagenesChicas.innerHTML = 
						 `${imagen1}
						 ${imagen2}
						 ${imagen3}
						 ${imagen4}
						 ${imagen5}`;
						}else if (res[0][v+1].imagen4 != "q") {
							imagenesChicas.innerHTML = 
								 `${imagen1}
								 ${imagen2}
								 ${imagen3}
								 ${imagen4}`;
						}else if (res[0][v+1].imagen3 != "q") {
							imagenesChicas.innerHTML = 
								 `${imagen1}
								 ${imagen2}
								 ${imagen3}`;
						}else if (res[0][v+1].imagen2 != "q") {
							imagenesChicas.innerHTML = 
								 `${imagen1}
								 ${imagen2}`;
						}else if (res[0][v+1].imagen1 != "q") {
							imagenesChicas.innerHTML = 
								 `${imagen1}`;
						}

const imagenDesc1 = `<div class="descrip vista2"></div>${res[0][v+1].descripcion1}<img src="img/${res[0][v+1].imgDescripcion1}" class="imggg descrip2"></img>`;
const imagenDesc2 = `<div class="descrip vista2"></div>${res[0][v+1].descripcion2}<img src="img/${res[0][v+1].imgDescripcion2}" class="imggg descrip2"></img>`;
const imagenDesc3 = `<div class="descrip vista2"></div>${res[0][v+1].descripcion3}<img src="img/${res[0][v+1].imgDescripcion3}" class="imggg descrip2"></img>`;
const imagenDesc4 = `<div class="descrip vista2"></div>${res[0][v+1].descripcion4}<img src="img/${res[0][v+1].imgDescripcion4}" class="imggg descrip2"></img>`;
const imagenDesc5 = `<div class="descrip vista2"></div>${res[0][v+1].descripcion5}<img src="img/${res[0][v+1].imgDescripcion5}" class="imggg descrip2"></img>`;	

const DescripcionImagenes = document.getElementById("descripcion-detallada-especifica");

if (res[0][v+1].descripcion5 != "q" || res[0][v+1].imgDescripcion5 != "q") {
					DescripcionImagenes.innerHTML = 
						 `${imagenDesc1}
						 ${imagenDesc2}
						 ${imagenDesc3}
						 ${imagenDesc4}
						 ${imagenDesc5}`;
						}else if (res[0][v+1].descripcion4 != "q" && res[0][v+1].imgDescripcion4 != "q") {
							DescripcionImagenes.innerHTML = 
								 `${imagenDesc1}
								 ${imagenDesc2}
								 ${imagenDesc3}
								 ${imagenDesc4}`;
						}else if (res[0][v+1].descripcion3 != "q" && res[0][v+1].imgDescripcion3 != "q") {
							DescripcionImagenes.innerHTML = 
								 `${imagenDesc1}
								 ${imagenDesc2}
								 ${imagenDesc3}`;
						}else if (res[0][v+1].descripcion2 != "q" && res[0][v+1].imgDescripcion2 != "q") {
							DescripcionImagenes.innerHTML = 
								 `${imagenDesc1}
								 ${imagenDesc2}`;
						}else if (res[0][v+1].descripcion1 != "q" && res[0][v+1].imgDescripcion1 != "q") {
							DescripcionImagenes.innerHTML = 
								 `${imagenDesc1}`;
						}

// 				<div class="descrip vista1">¿Sabías que tener un mal olor en tu espacio de trabajo, cuarto, auto, hogar, etc.. causa negatividad en tu estado emocional y provoca estrés?</div>
// 				<img src="img/img-cajas1.jpg" class="imggg descrip1"></img>

// 				<div class="descrip vista2">Por eso te presentamos el humidificador H2O
// Experimenta la verdadera relajación, como nunca antes lo habías hecho</div>
// 				<img src="img/img-cajas2.gif" class="imggg descrip2"></img>

// 				<div class="descrip vista3">Simplemente agrega un poco de agua y la esencia de tu preferencia
// Puedes utilizarlo en cualquier parte! Solo necesitas un conector USB
// Puedes utilizarlo en el carro, en tu cuarto, en tu oficina</div>
// 				<img src="img/img-cajas3.gif" class="imggg descrip3"></img>

// 				<div class="descrip vista4">ESTO ES PARA TI SI:<br>

// - Trabajas desde casa o en tu cuarto
// Eres gamer
// Eres desarrollador gráfico, web
// Trabajas todo el día frente a una computadora
// Tienes problemas de respiración.</div>
// 				<img src="img/img-cajas4.gif" class="imggg descrip4"></img>


					
				// }


// ------------------------FORMULARIO ESTILOS Y APARICION INICIO-------------------

let cerrar = document.querySelectorAll(".cerrar-modal")[0];
let abrir = document.querySelectorAll(".boton")[0];
let abrir2 = document.querySelectorAll(".boton-formulario")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
let btnEnviar = document.getElementById("btn-enviar11");
console.log(btnEnviar);


abrir.addEventListener("click", function(e){
	e.preventDefault();
	modalC.style.opacity = "1";
	modalC.style.visibility = "visible";
	modal.classList.toggle("modal-close");
})

abrir2.addEventListener("click", function(e){
	e.preventDefault();
	modalC.style.opacity = "1";
	modalC.style.visibility = "visible";
	modal.classList.toggle("modal-close");
})

cerrar.addEventListener("click", function(e){
	e.preventDefault();
	modalC.style.opacity = "0";
	modalC.style.visibility = "hidden";
	modal.classList.toggle("modal-close");
})


				//------------------validacion de formulario--------

const resultado = document.querySelector(".resultado");
			const nombre = document.getElementById("nombre");
			const celular = document.getElementById("celular");
			const distrito = document.getElementById("distrito");
			const direccion = document.getElementById("direccion");
			const referencia = document.getElementById("referencia");

btnEnviar.addEventListener("click",(e)=>{

	const validarCampos = ()=>{
				let error = [];
				if (nombre.value.length < 2) {
					error[0] = true;
					error[1] = "El nombre es invalido";
					return error;
				} else if (celular.value.length != 9 ||
			               celular.value[0] != 9){
					error[0] = true;
					error[1] = "El numero es invalido";
					return error;
				} else if (direccion.value.length < 3) {
					error[0] = true;
					error[1] = "La direccion es invalida";
					return error;
				} else if (distrito.value.length < 3) {
					error[0] = true;
					error[1] = "El distrito es invalido";
					return error;
				} else if (referencia.value.length < 3) {
					error[0] = true;
					error[1] = "La referencia es invalida";
					return error;
				}

			error[0] = false;
			return error;

			}
				e.preventDefault();
				console.log("btnEnviar")
				let error = validarCampos();
				if (error[0]) {
					resultado.innerHTML = error[1];
					resultado.classList.add("red");
					resultado.classList.remove("green");
					
				} else {
					resultado.classList.add("green");
					resultado.classList.remove("red");
					

						if (data[0][v].descuento != "q") {
							fetch("https://sheet.best/api/sheets/49477a9c-8881-439a-9df7-71a0abc79d78", {
            		method: "POST",
            		mode: "cors",
            		headers: {"Content-Type": "application/json"},
            		body: JSON.stringify({
            			"Nombre": nombre.value,
            			"Celular": celular.value,
            			"Distrito": distrito.value,
            			"Direccion": direccion.value,
            			"Referencia": referencia.value,
            			"Producto": textNombre11,
            			"Precio": Math.round(u),
            			"Estado": "NEW",
            			"EstadoMedio": "NO ENVIADO"
            		})
            
            	});
						}else if (data[0][v].descuento == "q") {
							fetch("https://sheet.best/api/sheets/49477a9c-8881-439a-9df7-71a0abc79d78", {
            		method: "POST",
            		mode: "cors",
            		headers: {"Content-Type": "application/json"},
            		body: JSON.stringify({
            			"Nombre": nombre.value,
            			"Celular": celular.value,
            			"Distrito": distrito.value,
            			"Direccion": direccion.value,
            			"Referencia": referencia.value,
            			"Producto": textNombre11,
            			"Precio": textHijoNextHermano.substr(3),
            			"Estado": "NEW",
            			"EstadoMedio": "NO ENVIADO"
            		})
            
            	});
						}
            		
					
					setTimeout (function(){
						location.href = ("https://api.whatsapp.com/send?phone=+51992830820&text=Hola! 👋 %20Mi%20nombre%20es%20"+`${nombre.value}`+"%20Vivo%20en%20"+`${direccion.value}`+"%20quiero%20el%20siguiente%20producto:\n\n                                                     *                                                               "+"✅"+`${textNombre11}`+", precio: "+`${textHijoNextHermano}`+"                                                  *");
					}, 500);

					console.log("btnEnviar22");resultado.innerHTML = "Solicitud enviada correctamente"


				}
			})

			
			//---------------------------------------------------


// ------------------------FORMULARIO ESTILOS Y APARICION FIN-------------------

//-----Estilos miniaturas de galeria-I-----
const mainImg = document.querySelector(".foto-descripcion");
const thumbnails = document.querySelectorAll(".item1");

thumbnails.forEach(thumb =>{
	thumb.addEventListener("click", function(){
		mainImg.src = thumb.src;
	})
})

const parrafo = document.getElementById("descripcion-detallada-especifica");

const zeros = n => {
	if (n.toString().length <2) return "0".concat(n);
	return n;
}
//-----Estilos miniaturas de galeria-FIN-----


// --------reloj--------------inicio

const getRemainingTime = deadline => {
  let now = new Date(),
      remainTime = (new Date(deadline) - now + 1000) / 1000;
      remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
      remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
      remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainTime
  }
};

const countdown = (deadline, hora, min, seg, finalMessage) => {
  const hora1 = document.getElementById("hora");
  const min1 = document.getElementById("min");
  const seg1 = document.getElementById("seg");
  const reloj1 = document.getElementById("reloj");

  const timerUpdate = setInterval( () => {
    let t = getRemainingTime(deadline);
    hora1.innerHTML = `${t.remainHours}h`;
    min1.innerHTML = `${t.remainMinutes}m`;
    seg1.innerHTML = `${t.remainSeconds}s`;

    if(t.remainTime <= 1) {
      clearInterval(timerUpdate);
      reloj1.innerHTML = finalMessage;
    }

  }, 1000)
};


countdown(horacio[0], 'hora', "min", "seg", '¡Terminó la oferta!');

// -------------reloj--------------fin

// ------------inicio descuentos----

const estrellas = document.getElementById("estrellas");
const precio222 = document.getElementById("precio22");
const textNombre111 = document.getElementById("textNombre11");
const descuento = document.getElementById("descuento");
const diferencia = document.getElementById("diferencia");


estrellas.style.borderBottom = "4px solid #aaa";
estrellas.style.width = "100%";
estrellas.style.padding = "0";
estrellas.style.paddingBottom = "6px";
precio222.style.paddingLeft  = "0";
precio222.style.paddingTop  = "5px";
textNombre111.style.padding = "0 0 0 0";
// textNombre111.style.margin = "-11px 0 0 0";

const h = data[0][v].precio;
console.log(data[0][v].precio);
console.log(data[0][v].descuento);

let f = parseInt(h);

let u = f - data[0][v].descuento * f;

console.log(parseInt(f));
descuento.innerHTML = `S/. ${Math.round(u)}.00`;

descuento.style.paddingLeft  = "0";

let r = f-u;
diferencia.innerHTML = `AHORRAS S/. ${Math.round(r)}.00`;
// diferencia.style.paddingLeft  = "0";
diferencia.style.marginTop  = "-2px";
descuento.style.paddingRight = "10px";
precio222.style.paddingRight = "10px";
// precio222.style.color = "#48ac98";

const personasMirando = document.querySelector(".personas-mirando-cambiante");

personasMirando.innerHTML = `👁️ ${Math.round(Math.random()*(20-10)+10)} están mirando este producto<br>🚚 Envío gratis de 24 a 48 horas`;

setInterval( () => {
personasMirando.innerHTML = `👁️ ${Math.round(Math.random()*(20-10)+10)} están mirando este producto<br>🚚 Envío gratis de 24 a 48 horas`;
},10000);

  const hora1 = document.getElementById("hora");
  const min1 = document.getElementById("min");
  const seg1 = document.getElementById("seg");
  const reloj1 = document.getElementById("reloj");
  const reloj0 = document.getElementById("relojeando");

if ( data[0][v].descuento == 0 || data[0][v].descuento == "q") {
	precio222.style.opacity = "0";
	diferencia.style.opacity = "0";
	descuento.innerHTML = `S/. ${Math.round(f)}.00`;
	descuento.style.marginLeft  = "-90px";

	reloj0.remove();
	reloj1.remove();
	hora1.remove();
	min1.remove();
	seg1.remove();

	// reloj1.style.display = "";
	// hora1.style.display = "";
	// min1.style.display = "";
	// seg1.style.display = "";
	// reloj1.style.transform = "translateY(-900000%)";
	// hora1.style.transform = "translateY(-900000%)";
	// min1.style.transform = "translateY(-900000%)";
	// seg1.style.transform = "translateY(-900000%)";
}

console.log(a);
console.log(v);
// ------------fin descuentos----






