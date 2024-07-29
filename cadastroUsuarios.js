document.getElementById('formulario-cadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let confirmarSenha = document.getElementById('confirmarSenha').value;
    
    if (!validarCPF(cpf)) {
        alert('CPF inválido!');
        return;
    }
    
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }
    
    alert('Cadastro realizado com sucesso!');
    
});

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || 
        cpf === "00000000000" || 
        cpf === "11111111111" || 
        cpf === "22222222222" || 
        cpf === "33333333333" || 
        cpf === "44444444444" || 
        cpf === "55555555555" || 
        cpf === "66666666666" || 
        cpf === "77777777777" || 
        cpf === "88888888888" || 
        cpf === "99999999999") {
        return false;
    }
    let add = 0;
    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digVerificador = 11 - (add % 11);
    if (digVerificador === 10 || digVerificador === 11) {
        digVerificador = 0;
    }
    if (digVerificador !== parseInt(cpf.charAt(9))) {
        return false;
    }
    add = 0;
    for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    digVerificador = 11 - (add % 11);
    if (digVerificador === 10 || digVerificador === 11) {
        digVerificador = 0;
    }
    if (digVerificador !== parseInt(cpf.charAt(10))) {
        return false;
    }
    return true;
}
