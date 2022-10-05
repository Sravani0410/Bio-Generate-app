export const Translate=()=>{
    function googleTranslate() {
        new  window.google.translate.TranslateElement({pageLanguage: 'en'}, 'translate');
      }
    var data=document.createElement("script");
    data.setAttribute("src","//translate.google.com/translate_a/element.js?cb=googleTranslate");
    document.body.appendChild(data);
    window.googleTranslate=googleTranslate
    return <div id="translate"></div>
}