let buttonsTypeAction = document.querySelectorAll('.bt-standard-select');
let buttons = document.querySelectorAll('.bt-action-select');

//pega os elementos HTML responsáveis pelos analógicos
let analogRead = document.querySelector('.analogRead');
let analogWrite = document.querySelector('.analogWrite');
let analogReadWrite = document.querySelector('.analogReadWrite');

//pega os elementos HTML responsáveis digitais
let digitalRead = document.querySelector('.digitalRead');
let digitalWrite = document.querySelector('.digitalWrite');
let digitalReadWrite = document.querySelector('.digitalReadWrite');

let hiddenRender;
let typeAction;

//pega qual foi a escolha do usuário (analógico ou digital)
buttonsTypeAction.forEach(element => {
    element.addEventListener('click', () => {
        typeAction = element.getAttribute('typeAction');
        console.log(typeAction);
    });
});

//de acordo com o que o usuário escolher (ação), é renderizado diferentes opções
//de configurações
buttons.forEach(buttom => {
    buttom.addEventListener('click', () => {
        hiddenRender = buttom.getAttribute('option');

        console.log(hiddenRender);

        //se for analógico, vai desabilitar todas as telas de configurações digitais
        //e vai habilitando as telas de configurações analógicas de acordo com a escolha do usuário
        if (typeAction == 'analogico') {
            digitalRead.style.display = 'none';
            digitalWrite.style.display = 'none';
            digitalReadWrite.style.display = 'none';
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
            } else if (hiddenRender == 'plot') {
                //configurações para fazer animações enquanto os dados são plotados
                console.log('plotando os dados');
            } else {
                alert('Erro ao selecionar a ação para execução');
            }
        } else if (typeAction == 'digital') {
            analogRead.style.display = 'none';
            analogWrite.style.display = 'none';
            analogReadWrite.style.display = 'none';
            if (hiddenRender == 'read') {
                digitalWrite.style.display = 'none';
                digitalReadWrite.style.display = 'none';
                digitalRead.style.display = 'block';
            } else if (hiddenRender == 'write') {
                digitalRead.style.display = 'none';
                digitalReadWrite.style.display = 'none';
                digitalWrite.style.display = 'block';
            } else if (hiddenRender == 'readAndWrite') {
                digitalRead.style.display = 'none';
                digitalWrite.style.display = 'none';
                digitalReadWrite.style.display = 'block';
            } else if (hiddenRender == 'plot') {
                //configurações para fazer animações enquanto os dados são plotados
                console.log('plotando os dados');
            } else {
                alert('Erro ao selecionar a ação para execução');
            }
        } else {
            alert('Erro ao selectionar o tipo (analógico/digital)');
        }
    });
});