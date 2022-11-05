let vistazo=document.getElementById('bien');
let boton=document.querySelector("button");
boton.addEventListener('click',()=>{
    vistazo.style.display = 'none';
});

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'es,ja,ru,de,it,fr,pt,ar,hi,en,ko', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
        }