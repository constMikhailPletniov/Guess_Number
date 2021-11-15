

ElementsDom.swichMode.onclick = function () {


    if (ElementsDom.theme.getAttribute('href') === 'style.css') {
        ElementsDom.theme.href = 'yellow-mode.css';
    } else {
        ElementsDom.theme.href = 'style.css';
    }
}