var dados = [];
/*
var registro = {
registro.Nome = "Fernando"
registro.Sobrenome = "Andrade"
registro.DataNascimento = "08/03/1986"
registro.Formacao = "Superior"};

dados.push(registro);
*/

//função para criar "pessoas" e popular cada linha da tabela 
function populaTabela() {
    if(Array.isArray(dados)) {

        $("#tblDados tbody").html("")

        dados.forEach(function (item) {
            //template string
            $("#tblDados tbody").append(`<tr>
            <td>${item.ID}</td>
            <td>${item.Nome}</td>
            <td>${item.Sobrenome}</td>
            <td>${item.DtNascimento}</td>
            <td>${item.Formacao}</td>
            </tr>`)
        })
    }
}

$(function () {
    //executa ao carregar da tela

    dados = JSON.parse(localStorage.getItem("__dados__"))

    //se for diferente de nulo a sentença sera true entao vou trabalhar executar
    if (dados) {
        populaTabela()
    }

    $("#btnSalvar").click(function () {
        //evento click do botao

        let Nome = $("#txtNome").val()
        let Sobrenome = $("#txtSobrenome").val()
        let DtNascimento = $("#txtDtNascimento").val()
        let Formacao = $("#txtFormacao").val()

        let registro = {}

        registro.Nome
    })

});