let datosvio=document.querySelector('aside');
let vio=["Los informes internacionales, a nivel latinoamericano, indican que Bolivia ocupa el primer lugar en violencia física contra la mujer y el segundo lugar en violencia sexual, en las edades de 15 a 49 años.",
"Al menos 7,5 de cada 10 mujeres sufren algún hecho de violencia a lo largo de su vida, mientras que más de 100 mujeres en promedio son asesinadas cada año por su condición de mujer.",
"Recuerda que si sufres de cualquier maltrato o abuso llama al 800 14 0348",
];

let num=Math.round(Math.random()*(vio.length-1));
console.log(num);
if(num<vio.length){
let vioanun=document.createElement("div");
    vioanun.textContent=vio[num];
    datosvio.appendChild(vioanun);
}

let boton=document.querySelector("button");
boton.addEventListener('click',()=>{
    datosvio.style.display = 'none';
});


function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'es,ja,ru,de,it,fr,pt,ar,hi,en,ko', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
        }

