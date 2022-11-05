swal("¿Cuál es tu nombre?", {
    icon: "warning",
    content: "input",
 })

 .then((nombre) => {
   swal("Bienvenido", nombre,{
        icon: "success",
        button: "Hola",
    }
    );
});

let comienzo=0;
let prod=document.getElementById("produc");
let caja=prod.querySelector("div");
let productostotales=document.getElementById("productos");

//Rosa verde//

let pro1="Rosa Verde";
let boton1=document.getElementById('rosa').querySelector('button');
boton1.addEventListener('click',()=>{
  comienzo=comienzo+10;
  let precio1=document.querySelector('h4');
  precio1.textContent="total: " + comienzo + "bs";
  let venta=document.createElement("p");
    venta.textContent=pro1;
    productostotales.appendChild(venta);
});

//Amaryllis//

let pro2="Amaryllis";
let boton2=document.getElementById('ama').querySelector('button');
boton2.addEventListener('click',()=>{
  comienzo=comienzo+6;
  let precio1=document.querySelector('h4');
  precio1.textContent="total: " + comienzo + "bs";
  let venta=document.createElement("p");
    venta.textContent=pro2;
    productostotales.appendChild(venta);
});

//Zebra Haworthie//

let pro3="Zebra Haworthie";
let boton3=document.getElementById('zebra').querySelector('button');
boton3.addEventListener('click',()=>{
  comienzo=comienzo+7;
  let precio1=document.querySelector('h4');
  precio1.textContent="total: " + comienzo + "bs";
  let venta=document.createElement("p");
  venta.textContent=pro3;
  productostotales.appendChild(venta);
});

//Ecolapiceros//

let pro4="Ecolapiceros";
let boton4=document.getElementById('eco').querySelector('button');
boton4.addEventListener('click',()=>{
  comienzo=comienzo+2;
  let precio1=document.querySelector('h4');
  precio1.textContent="total: " + comienzo + "bs";
  let venta=document.createElement("p");
  venta.textContent=pro4;
  productostotales.appendChild(venta);
});

//Tomatodo//

let pro5="Tomatodo";
let boton5=document.getElementById('toma').querySelector('button');
boton5.addEventListener('click',()=>{
  comienzo=comienzo+25;
  let precio1=document.querySelector('h4');
  precio1.textContent="total: " + comienzo + "bs";
  let venta=document.createElement("p");
  venta.textContent=pro5;
  productostotales.appendChild(venta);
});

//Tarro Pequeño//

let pro6="Tarro Pequeño";
let boton6=document.getElementById('peque').querySelector('button');
boton6.addEventListener('click',()=>{
  comienzo=comienzo+5;
  let precio1=document.querySelector('h4');
  precio1.textContent="total: " + comienzo + "bs";
  let venta=document.createElement("p");
  venta.textContent=pro6;
  productostotales.appendChild(venta);
});

//Tarro Grande//

let pro7="Tarro Grande";
let boton7=document.getElementById('grande').querySelector('button');
boton7.addEventListener('click',()=>{
  comienzo=comienzo+10;
  let precio1=document.querySelector('h4');
  precio1.textContent="total: " + comienzo + "bs";
  let venta=document.createElement("p");
  venta.textContent=pro7;
  productostotales.appendChild(venta);
});

//Total//

//reinicio//

let reinicio=document.getElementById('rei').querySelector('button');
reinicio.addEventListener('click',()=>{
  comienzo=0;
  let precio1=document.querySelector('h4');
  precio1.textContent= "";
  productostotales.style.display = "none";
});

//compra//

let menu=document.getElementById('menu');
let compra=document.getElementById('com').querySelector('button');
compra.addEventListener('click',()=>{
    menu.style.visibility = "visible";
});

let cerrar=document.getElementById('menu').querySelector('button');
cerrar.addEventListener('click',()=>{
    menu.style.visibility = 'hidden';
    comienzo=0;
  let precio1=document.querySelector('h4');
  precio1.textContent= "";
  productostotales.style.display = "none";
});

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'es,ja,ru,de,it,fr,pt,ar,hi,en,ko', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
        };