function gerarJson(){
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value    
    var telefone = document.getElementById('telefone').value    
    var endereco = document.getElementById('endereco').value     

    var servicoEscolhido = document.getElementById('servico')
    var servico = servicoEscolhido.options[servicoEscolhido.selectedIndex].text

    var dados = {
        nome: nome,
        email: email,
        telefone: telefone,
        endereco: endereco,
        servico: servico
    }

    localStorage.setItem('dados', JSON.stringify(dados))
    window.location.href = 'Envio.html'
}

function mostrarDados(){
    var dados = JSON.parse(localStorage.getItem('dados'))

    var dadosDiv = document.getElementById('dadosDiv')
    dadosDiv.innerHTML = `
    <p><b>Nome:</b> ${dados.nome}</p>
    <p><b>E-mail:</b> ${dados.email}</p>
    <p><b>Telefone:</b> ${dados.telefone}</p>
    <p><b>Endereço:</b> ${dados.endereco}</p>
    <p><b>Serviço:</b> ${dados.servico}</p>
    `
}

function inputNome(){
    var nomeRegex =  /^[a-zA-Z\s]+$/;
    var nome = document.getElementById('nome').value

    if (!nomeRegex.test(nome)) {
        document.getElementById('nome').style.border = '0.1vw solid #ff0000'
        document.getElementById('avisoNome').style.display = 'block';
        return false
    }
    else if(nomeRegex.test(nome)){
        document.getElementById('avisoNome').style.display = 'none';
        document.getElementById('nome').style.border = '0.1vw solid #FFFFFF'
        return true
    }
}

function inputEmail() {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    if (!emailRegex.test(document.getElementById('email').value)) {
        document.getElementById('email').style.border = '0.1vw solid #ff0000'
        document.getElementById('avisoEmail').style.display = 'block'
        return false
    }
    else{
        document.getElementById('email').style.border = '0.1vw solid #FFFFFF'
        document.getElementById('avisoEmail').style.display = 'none'
        return true
    }
}

function inputTelefone() {
    var telRegex = /^[-+]?\d+$/
    if (!telRegex.test(document.getElementById('telefone').value)){
        document.getElementById('telefone').style.border = '0.1vw solid #ff0000'
        document.getElementById('avisoTelefone').style.display = 'block'
        return false
    }
    else{
        document.getElementById('telefone').style.border = '0.1vw solid #FFFFFF'
        document.getElementById('avisoTelefone').style.display = 'none'
        return true
    }
}