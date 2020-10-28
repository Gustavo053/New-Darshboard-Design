let buttons = document.querySelectorAll('.bt-action-select');
let analogRead = document.querySelector('.analogRead');
let analogWrite = document.querySelector('.analogWrite');
let analogReadWrite = document.querySelector('.analogReadWrite');

let hiddenRender;

buttons.forEach(buttom => {
    buttom.addEventListener('click', () => {
        hiddenRender = buttom.getAttribute('option');

        console.log(hiddenRender);

        if (hiddenRender == 'read') {
            analogWrite.style.display = 'none';
            analogReadWrite.style.display = 'none';
            analogRead.style.display = 'block';
        } else if (hiddenRender == 'write') {
            analogRead.style.display = 'none';
            analogReadWrite.style.display = 'none';
            analogWrite.style.display = 'block';
        } else if (hiddenRender == 'readAndWrite') {
            analogRead.style.display = 'none';
            analogWrite.style.display = 'none';
            analogReadWrite.style.display = 'block';
        } else {
            alert('Erro ao selecionar a ação para execução');
        }
    });
});