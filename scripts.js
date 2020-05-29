$(document).ready(function() {

  $("#botao").click(function() {

    var name = $("#nome").val();
    var idade = $("#idade").val();
    var endereco = $("#endereco").val();
    var cpf = $("#cpf").val();
    var arma = $("#arma_sim").is(':checked');
    var veiculo = $("#veiculo_sim").is(':checked');
    var ets = $("#cont_ets_sim").is(':checked');
    var sangue = $("#tipo_sanguineo").val();

    $.post('https://bilu-back.herokuapp.com/cadastros',{
      "nome": name,
      "idade": idade,
      "endereco": endereco,
      "cpf": cpf,
      "armas": arma,
      "dirige": veiculo,
      "contato_com_ets": ets,
      "tipo_sanguineo": sangue

    },
    function(data, status){
      alert('Data: ' + data + ' Status: ' + status);
      
      
      if(status === "success"){

        alert(`Aprovado: ${nome}, obrigado por contribuir pela sobrevivência da humanidade. Em até 10 dias úteis você receberá em seu endereço o seu kit de combate a seres extraterrestres`);

      }
      else{
       alert(`Reprovado: ${nome}, desculpe, você não possui o perfil necessário para o combate com os seres extraterrestres`);
      }
    });
  });
});