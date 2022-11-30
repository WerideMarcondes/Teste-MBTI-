//função carregar modal informaçoes iniciais
$(document).ready(function () {
  $('#myModal').modal('show');

});

//função chamar modal primeiro questionario
function questionatio1() {
  $("#quiz1").click();

}

//função fechar modal informaçoes iniciais
$("#quiz1").click(function () {
  $('#myModal').modal('hide');

});


function cadastra() {

  const input = document.querySelectorAll(".input")

  if (input.value != "") {
    Swal.fire(
      'Cadastro realizado com sucesso!',
      '',
      'success'
    )
  } else if (input.value == "") {
    Swal.fire(
      'Voçê precissa preecher seus dados!',
      '',
      'error'
    )

  }
}