const botoes = document.querySelectorAll('.window-body button');
const campo = document.querySelector('.window-body input');

function backspace(valor) {
    return valor.slice(0, -1);
}
function calcular(valor) {
    return String(eval(valor) || '');
}

/* adicionando eventos aos botões */
botoes.forEach((botao) => {
    botao.addEventListener('click', function(event) {
        let botao_valor = event.target.textContent;

        /* operadores especiais */
        switch (botao_valor) {
            case 'Backspace':
                campo.value = backspace(campo.value);
                break;
            case 'C':
                campo.value = '';
                break;
            case '=':
                campo.value = calcular(campo.value);
                break;
            default:
                campo.value += botao_valor;
                break;
        }
    })
});

/* validando caracteres permitidos */
campo.addEventListener('input', function(event) {
    let valor = event.target.value;

    event.target.value = valor.replace(/[^0-9+-/*]/g, '').replace(',', '.');
});

/* fixando foco ao campo */
document.addEventListener('click', function() {
    campo.focus();
});

/* adicionando evento no enter do teclado */
document.addEventListener('keypress', function(event) {
    if(event.key == 'Enter') {
        campo.value = calcular(campo.value);
    }
});