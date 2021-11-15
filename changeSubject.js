const swichMode = document.getElementById('btn-change-subject');

swichMode.onclick = function (){
    const theme = document.getElementById('theme');

    if (theme.getAttribute('href') === 'style.css'){
        theme.href = 'yellow-mode.css';
    }else {
        theme.href = 'style.css';
    }
}