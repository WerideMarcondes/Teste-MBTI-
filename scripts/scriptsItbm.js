//função carregar modal informaçoes iniciais
$(document).ready(function () {
  $('#myModal').modal('show');



//função fechar modal informaçoes iniciais
$("#cadastro").click(function () {
  $('#myModal').modal('hide');

});

});









/*function cadastra() {

  const input = document.querySelectorAll(".form-control")

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


function resultado() {

  /* variavies para de controle de impressão*/
    let resultAaux1
 
  
  /* variavies para varrer os inputs*/
    let EE = $("input[type=radio][value=E]:checked").length;
    let II = $("input[type=radio][value=I]:checked").length;
  
  
  
    /* regras */
    if (EE < II) {
      resultAaux1 = "I"
      Swal.fire(
        'Perfil da cetgoria I continue responda o proximo questionario!',
        '',
        'success'
      )
    } else if (EE > II) {
      resultAaux1 = "E"
      Swal.fire(
        'Perfil da cetgoria E responda o proximo questionario!',
        '',
        'success'
      )
    } else if (EE == II) {
      resultAaux1 = "?"
      Swal.fire(
        'Você precisa determInar um lado predominante para esse questionário ',
        '',
        'error'
      )
    
    }
  
   
  