function comprarLucy() {
  event.preventDefault();
  if ($("#_endereco").val().length != 42) {
    $("#_endereco").focus();
    alert("Endereço inválido");
    return;
  }

  if (!$("#_endereco").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_endereco").focus();
    return;
  }

  if ($("#_nomeAdquirente").val().length < 5) {
    alert("Nome do adquirente inválido");
    $("#_nomeAdquirente").focus();
    return;
  }

  var numeroUnidades = $("#_numeroUnidades").val() * 1;
  if (numeroUnidades < 100) {
    alert("Número de unidades excedido");
    $("#_numeroUnidades").focus();
    return;
  }

  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .comprarLucy($("#_endereco").val(), $("#_nomeAdquirente").val(), $("#_numeroUnidades").val() * 1)
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("comprarLucy - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("comprarLucy - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("comprarLucy - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}