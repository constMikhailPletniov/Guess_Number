function changeLanguage() {
    const selectLang = ElementsDom.selectLang.value;
    if(selectLang === 'ru'){
        ElementsDom.html.lang = 'ru';
    }
    for (const key in languageArray) {
        document.querySelector(key).textContent = languageArray[key][selectLang];
    }
    for (const key in placeholderArray) {
        document.querySelector(key).placeholder = placeholderArray[key][selectLang];
    }
    for (const key in objectTitleArray) {
        document.querySelector(key).title = objectTitleArray[key][selectLang];
    }
    for (const key in languageArray) {
        document.querySelector(key).value = languageArray[key][selectLang];
    }

}
