export const Translate=()=>{
    let GoogleTranslate=()=>{
        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            autoDisplay:true,
        },"translate")
    }
    var data=document.createElement("script");
    data.setAttribute("src","//translate.google.com/translate_a/element.js?cb=GoogleTranslate");
    document.body.appendChild(data);
    window.GoogleTranslate=GoogleTranslate;
    return <div id="translate"></div>
}