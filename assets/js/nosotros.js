let datos=document.querySelector('aside');
let bien=document.getElementById('bien');
let imgtransi=document.getElementsByClassName('imgtransition');
let cuadro=document.querySelector('section');
let curioso=["El  árbol con más rápido crecimiento es el eucalipto. Puede alcanzar hasta 33 pies en un año.",
"El árbol del desierto llamado Baobab puede almacenar hasta 1000 litros de agua en su tronco.",
"Un meteorito que cayó en Ghana formó un enorme hueco que hoy se conoce como el lago Bosumtwi.",
"¿Sabías que la flor más grande del mundo es la Rafflesia Arnoldi con 1 metro de diámetro y hasta 11 Kg de peso?",
"Bajo el río Nilo existe un enorme río subterráneo, y su caudal es seis veces superior al que está arriba.",
"La luz del sol tarda 8 minutos y 17 segundos en llegar a la Tierra."
];
let num=Math.round(Math.random()*(curioso.length-1));
console.log(num);
if(num<curioso.length){
    let curiosity=document.createElement("div");
    curiosity.textContent=curioso[num];
    datos.appendChild(curiosity);
}

let boton1=document.getElementById('bien').querySelector('button');
boton1.addEventListener('click',()=>{
    bien.style.display = 'none';
});

let boton=document.querySelector("button");
boton.addEventListener('click',()=>{
    datos.style.display = 'none';
    cuadro.style.gridTemplateColumns = '0fr 1fr 1fr';
});

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'es,ja,ru,de,it,fr,pt,ar,hi,en,ko', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
        }

