function validarCPF(cpf) {

    const resultado = document.getElementById("resultado");

    cpf = cpf.replace(/\D/g, "");

    if (cpf.length < 11) {
        resultado.innerHTML = "Digite um CPF completo";
        resultado.style.background = "#f1f1f1";
        resultado.style.color = "#333";
        return;
    }

    if (cpf.length !== 11) {
        exibirFalso();
        return;
    }

    if (/^(\d)\1+$/.test(cpf)) {
        exibirFalso();
        return;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let primeiroDigito = (soma * 10) % 11;

    if (primeiroDigito === 10) {
        primeiroDigito = 0;
    }

    if (primeiroDigito !== Number(cpf[9])) {
        exibirFalso();
        return;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    let segundoDigito = (soma * 10) % 11;

    if (segundoDigito === 10) {
        segundoDigito = 0;
    }

    if (segundoDigito !== Number(cpf[10])) {
        exibirFalso();
        return;
    }

    resultado.innerHTML = "✅ CPF VERDADEIRO";
    resultado.style.background = "#d1fae5";
    resultado.style.color = "#065f46";
}

function exibirFalso() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "❌ CPF FALSO";
    resultado.style.background = "#fee2e2";
    resultado.style.color = "#991b1b";
}