let $botao = document.getElementById('enviar');
$botao.addEventListener("click", validaCampos);

function validaCampos(){
    let $campo = document.getElementById('busca').value;
    if($campo == ''){
        alert('Obrigatório informar o que deseja localizar');
        document.getElementById('busca').focus();
        return false;
    }

    else if($campo.length < 3){
        alert("Caracteres inválidos para realizar pesquisa");
        document.getElementById('busca').focus();
        return false;
    }

    else{
        document.frmBusca.action="dados.php";
        document.frmBusca.submit();
    }
}