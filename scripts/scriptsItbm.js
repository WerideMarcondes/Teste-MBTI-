
//função carregar modal informaçoes iniciais
$(document).ready(function () {
  $('#myModal').modal('show');

  //função fechar modal informaçoes iniciais
  $("#cadastro").click(function () {
    $('#myModal').modal('hide');

  });

});



/* cadastro e inicio dos questionarios*/
function cadastra() {

  const input = document.querySelector(".form-control")
  if (input.value != "") {

    Swal.fire(
      'Cadastro realizado com sucesso!',
      '',
      'success'

    )
    $(document).ready(function () {
      $('#quiz01').modal('show');

      $('#myModal').modal('hide');

    });
  } else if (input.value == "") {

    Swal.fire(
      'Para Saber mais sobre o seu Tipo de Personalidade voçê precissa preecher seus dados!',
      '',
      'error'
    )
    $(document).ready(function () {
      $('#myModal').modal('show');

    });

  }
}



/* 1º questionario*/
function resultado() {

  /*quantidade minima de escolhas*/
  let escolhas =  document.querySelectorAll(".quiz01[type=radio]:checked").length;
  if (escolhas > 9) {

    /* variavies para varrer os radios quiz01*/
    var E =  document.querySelectorAll("input[type=radio][value=E]:checked").length;
    var I =  document.querySelectorAll("input[type=radio][value=I]:checked").length;

    /* regras */
    if (E < I) {
      resultQuiz1 = "I"
      result1 = I

      /*atualização do estatus numericos*/
      let Numero = document.querySelectorAll('.StatusQuis2')
      Numero[0].setAttribute('class', 'numero')


      Swal.fire(
        resultQuiz1,
        '',
        'success'
      )
      $(document).ready(function () {
        $('#quiz02').modal('show');

        $('#quiz01').modal('hide');

      });

    } else if (E > I) {
      resultQuiz1 = "E"
      result1 = E

      /*atualização do estatus numericos*/
      let Numero = document.querySelectorAll('.StatusQuis2')
      Numero[0].setAttribute('class', 'numero')


      Swal.fire(
        resultQuiz1,
        '',
        'success'
      )
      $(document).ready(function () {
        $('#quiz02').modal('show');


        $('#quiz01').modal('hide');

      });

    } else if (E == I) {
      empate = "?"
      $(document).ready(function () {
        $('#quiz01').modal('show');

      });
      Swal.fire(
        'Ouver um empate voce precisa desempatar para Avançar para o 2º questionario!',
        '',
        'error'
      )
    }
  } else if (escolhas <= 9) {
    Swal.fire(
      'Ao menos escolha 9 campos para avancar para o 2º questionario!',
      '',
      'error'
    )

  }
}
/* final 1º questionario*/




/* 2º questionario*/
function resultado2() {

  /*quantidade minima de escolhas*/
  let escolhas2 = document.querySelectorAll(".quiz02[type=radio]:checked").length;
  if (escolhas2 > 9) {

    /* variavies para varrer os radios quiz01*/
    var S = document.querySelectorAll("input[type=radio][value=S]:checked").length;
    var N = document.querySelectorAll("input[type=radio][value=N]:checked").length;

    /* regras */
    if (S < N) {
      resultQuiz2 = "N"
      result2 = N

      /*atualização do estatus numericos*/
      let Numero = document.querySelectorAll('.StatusQuis3')
      Numero[0].setAttribute('class', 'numero')
      Numero[1].setAttribute('class', 'numero')


      Swal.fire(
        resultQuiz1 + " - " + resultQuiz2,
        '',
        'success'
      )
      $(document).ready(function () {
        $('#quiz03').modal('show');

        $('#quiz02').modal('hide');

      });
    } else if (S > N) {
      resultQuiz2 = "S"
      result2 = S

      /*atualização do estatus numericos*/
      let Numero = document.querySelectorAll('.StatusQuis3')
      Numero[0].setAttribute('class', 'numero')
      Numero[1].setAttribute('class', 'numero')

      Swal.fire(
        resultQuiz1 + " - " + resultQuiz2,
        '',
        'success'
      )
      $(document).ready(function () {
        $('#quiz03').modal('show');

        $('#quiz02').modal('hide');

      });

    } else if (S == N) {
      empate = "?"
      $(document).ready(function () {
        $('#quiz02').modal('show');

      });
      Swal.fire(
        'Ouver um empate voce precisa desempatar para Avançar para o 3º questionario!',
        '',
        'error'
      )

    }
  } else if (escolhas2 <= 9) {
    Swal.fire(
      'Ao menos escolha 9 campos para avancar para o 3º questionario!',
      '',
      'error'
    )

  }
}
/* final 2º questionario*/



/* 3º questionario*/
function resultado3() {

  /*quantidade minima de escolhas*/
  let escolhas = document.querySelectorAll(".quiz03[type=radio]:checked").length;
  if (escolhas > 9) {

    /* variavies para varrer os radios quiz*/
    var T = document.querySelectorAll("input[type=radio][value=T]:checked").length;
    var F = document.querySelectorAll("input[type=radio][value=F]:checked").length;

    /* regras */
    if (T < F) {
      resultQuiz3 = "F"
      result3 = F

      /*atualização do estatus numerico*/
      let Numero = document.querySelectorAll('.StatusQuis4')
      Numero[0].setAttribute('class', 'numero')
      Numero[1].setAttribute('class', 'numero')
      Numero[2].setAttribute('class', 'numero')

      Swal.fire(
        resultQuiz1 + " - " + resultQuiz2 + " - " + resultQuiz3,
        '',
        'success'
      )

      $(document).ready(function () {
        $('#quiz04').modal('show');

        $('#quiz03').modal('hide');

      });

    } else if (T > F) {
      resultQuiz3 = "T"
      result3 = T

      /*atualização do estatus numericos*/
      let Numero = document.querySelectorAll('.StatusQuis4')
      Numero[0].setAttribute('class', 'numero')
      Numero[1].setAttribute('class', 'numero')
      Numero[2].setAttribute('class', 'numero')

      Swal.fire(
        resultQuiz1 + " - " + resultQuiz2 + " - " + resultQuiz3,
        '',
        'success'
      )
      $(document).ready(function () {
        $('#quiz04').modal('show');

        $('#quiz03').modal('hide');

      });
    } else if (T == F) {
      empate = "?"
      $(document).ready(function () {
        $('#quiz03').modal('show');

      });
      Swal.fire(
        'Ouver um empate voce precisa desempatar para Avançar para o 4º questionario!',
        '',
        'error'
      )

    }
  } else if (escolhas <= 9) {
    Swal.fire(
      'Ao menos escolha 9 campos para avancar para o 4º questionario!',
      '',
      'error'
    )

  }
}/* final 3º questionario*/


/* 4º questionario*/
function resultado4() {

  /*quantidade minima de escolhas*/
  let escolhas = document.querySelectorAll(".quiz04[type=radio]:checked").length;
  if (escolhas > 9) {
    /* variavies para varrer os radios quiz01*/
    var J = document.querySelectorAll("input[type=radio][value=J]:checked").length;
    var P = document.querySelectorAll("input[type=radio][value=P]:checked").length;
    var E = document.querySelectorAll("input[type=radio][value=E]:checked").length;
    var I = document.querySelectorAll("input[type=radio][value=I]:checked").length;
    var S = document.querySelectorAll("input[type=radio][value=S]:checked").length;
    var N = document.querySelectorAll("input[type=radio][value=N]:checked").length;
    var T = document.querySelectorAll("input[type=radio][value=T]:checked").length;
    var F = document.querySelectorAll("input[type=radio][value=F]:checked").length;

    /* regras */
    if (J < P) {
      resultQuiz4 = "P"
      result4 = P
      /*atualização do estatus numericos*/
      let Numero = document.querySelectorAll('.StatusQuisFinal')
      Numero[0].setAttribute('class', 'numero')

      Swal.fire(
        resultQuiz1 + " - " + resultQuiz2 + " - " + resultQuiz3 + " - " + resultQuiz4,
        '',
        'success'
      )
      $(document).ready(function () {
        $('#qui').modal('show');

        $('#quiz03').modal('hide');

      });
    } else if (J > P) {
      resultQuiz4 = "J"
      result4 = J

      /*atualização do estatus numericos*/
      let Numero = document.querySelectorAll('.StatusQuisFinal')
      Numero[0].setAttribute('class', 'numero')

      Swal.fire(
        resultQuiz1 + " - " + resultQuiz2 + " - " + resultQuiz3 + " - " + resultQuiz4,
        '',
        'success'
      )
    } else if (J == P) {
      empate = "?"
      $(document).ready(function () {
        $('#quiz04').modal('show');

      });
      Swal.fire(
        'Ouver um empate voce precisa desempatar para OBTER O RESULTADO FINAL!',
        '',
        'error'
      )

    } if (E > I && S > N && T > F && J > P) {
      var resultFinal1 = "E - S - T - J <br><br>" + "(Extrovertido, Sensorial, Racional, Julgador) <br><br>" +

        "Energético, amigável e sincero; produtivo, organizado e eficiente; realista" + "e sensível, mas frequentemente cético sobre idéias novas ou não validadas; honesto e vai direto ao ponto; toma decisões rapidamente, expressivo, tradicional, sério, e responsável."

      Swal.fire({
        title: resultFinal1,
        width: 1800,

      })
    }
  } else if (escolhas <= 9) {
    Swal.fire(
      'Ao menos escolha 9 campos para avancar para OBTER O RESULTADO FINAL!',
      '',
      'error'
    )
  }
}/* final 4º questionario*/




