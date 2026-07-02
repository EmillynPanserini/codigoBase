function mostrarDados() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let nascimento = document.getElementById("nascimento").value;
    let genero = document.getElementById("genero").value;

    let partes = DtNascimento.split("-");
    let data = new Date(partes[0],partes[1]-1,partes[2]);
    //converte para estrura de data br, dia, mês e ano
    let dataFormatada = data.toLocaleDateString("pt-BR")

    document.getElementById("saida").innerHTML = `

    <h3>Dados enviados</h3>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Idade:</strong> ${idade}</p>
    <p><strong>Data de nascimento:</strong> ${dataFormatada}</p>
    <p><strong>Gênero:</strong> ${genero}</p>

    `;

}

function limparDados() {

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("nascimento").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("saida").innerHTML = `
    <p>Os dados aparecerão aqui.</p>
    `;
}