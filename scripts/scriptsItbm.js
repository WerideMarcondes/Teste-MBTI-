
/*Sair a qualquer momneto dos questionarios */
function Sair() {
  window.location.reload();

}



/*Voltar quiestionario 1*/
function voltarQuiz1() {

  $('#quiz02').modal('hide');

  $('#quiz01').modal('show');

  let number1 = document.querySelector('.voltarStatusQuiz1')
  let number2 = document.querySelector('.voltarStatusQuiz2')
  let number3 = document.querySelector('.voltarStatusQuiz3')
  let number4 = document.querySelector('.voltarStatusQuiz4')


  number1.style.cssText = "text-align: center; border-radius: 50%; width: 100px;" +
    "height: 100px; font-size: 70px; color:black; margin-right: 80px;"

  number2.style.cssText = "text-align: center; border-radius: 50%; width: 100px;" +
    "height: 100px; font-size: 70px; color:black; margin-right: 80px;"

  number3.style.cssText = "text-align: center; border-radius: 50%; width: 100px;" +
    "height: 100px; font-size: 70px; color:black; margin-right: 80px;"

  number4.style.cssText = "text-align: center; border-radius: 50%; width: 100px;" +
    "height: 100px; font-size: 70px; color:black; margin-right: 80px;"


}

/*Voltar quiestionario 2*/
function voltarQuiz2() {

  $('#quiz03').modal('hide');

  $('#quiz02').modal('show');

  let number3 = document.querySelector('.voltarStatusQuiz03')
  let number4 = document.querySelector('.voltarStatusQuiz04')

  number3.style.cssText = "text-align: center; border-radius: 50%; width: 100px;" +
    "height: 100px; font-size: 70px; color:black; margin-right: 80px;"

  number4.style.cssText = "text-align: center; border-radius: 50%; width: 100px;" +
    "height: 100px; font-size: 70px; color:black; margin-right: 80px;"

}

/*Voltar quiestionario 3*/
function voltarQuiz3() {

  var quiz04 = document.querySelectorAll(".quiz04[type=radio]")
  quiz04.checked = false;
  
  $('#quiz04').modal('hide');
 
  $('#quiz03').modal('show');
  
  let number4 = document.querySelector('.voltarStatusQuiz04')

  number4.style.cssText = "text-align: center; border-radius: 50%; width: 100px;" +
    "height: 100px; font-size: 70px; color:black; margin-right: 80px;"


}


//fun????o carregar modal informa??oes iniciais
$(document).ready(function () {
  $('#myModal').modal('show');

  //fun????o fechar modal informa??oes iniciais
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
      'Para Saber mais sobre o seu Tipo de Personalidade vo???? precissa preecher seus dados!',
      '',
      'error'
    )
    $(document).ready(function () {
      $('#myModal').modal('show');

    });

  }
}


/* 1?? questionario*/
function resultado() {

  /*quantidade minima de escolhas*/
  let escolhas = document.querySelectorAll(".quiz01[type=radio]:checked").length;
  if (escolhas > 1) {

    /* variavies para varrer os radios quiz01*/
    var E = document.querySelectorAll("input[type=radio][value=E]:checked").length;
    var I = document.querySelectorAll("input[type=radio][value=I]:checked").length;

    /* regras */
    if (E < I) {
      resultQuiz1 = "I"

      /*atualiza????o do estatus numericos*/
      let Numero = document.querySelector('.StatusQuiz2')

      Numero.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"



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

      /*atualiza????o do estatus numericos*/
      let Numero = document.querySelector('.StatusQuiz2')

      Numero.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


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
        'Ouver um empate voce precisa desempatar para Avan??ar para o 2?? questionario!',
        '',
        'error'
      )
    }
  } else if (escolhas <= 8) {
    Swal.fire(
      'Ao menos escolha 9 campos para avancar para o 2?? questionario!',
      '',
      'error'
    )

  }
}
/* final 1?? questionario*/




/* 2?? questionario*/
function resultado2() {

  /*quantidade minima de escolhas*/
  let escolhas2 = document.querySelectorAll(".quiz02[type=radio]:checked").length;
  if (escolhas2 > 1) {

    /* variavies para varrer os radios quiz01*/
    var S = document.querySelectorAll("input[type=radio][value=S]:checked").length;
    var N = document.querySelectorAll("input[type=radio][value=N]:checked").length;

    /* regras */
    if (S < N) {
      resultQuiz2 = "N"

      /*atualiza????o do estatus numericos*/
      let Numero1 = document.querySelector('.StatusQuiz3')
      let Numero2 = document.querySelector('.StatusQuiz4')

      Numero1.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


      Numero2.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


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

      /*atualiza????o do estatus numericos*/
      let Numero1 = document.querySelector('.StatusQuiz3')
      let Numero2 = document.querySelector('.StatusQuiz4')

      Numero1.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


      Numero2.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"

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
        'Ouver um empate voce precisa desempatar para Avan??ar para o 3?? questionario!',
        '',
        'error'
      )

    }
  } else if (escolhas2 <= 8) {
    Swal.fire(
      'Ao menos escolha 9 campos para avancar para o 3?? questionario!',
      '',
      'error'
    )

  }
}
/* final 2?? questionario*/



/* 3?? questionario*/
function resultado3() {

  /*quantidade minima de escolhas*/
  let escolhas = document.querySelectorAll(".quiz03[type=radio]:checked").length;
  if (escolhas > 1) {

    /* variavies para varrer os radios quiz*/
    var T = document.querySelectorAll("input[type=radio][value=T]:checked").length;
    var F = document.querySelectorAll("input[type=radio][value=F]:checked").length;

    /* regras */
    if (T < F) {
      resultQuiz3 = "F"

      /*atualiza????o do estatus numerico*/
      let Numero1 = document.querySelector('.StatusQuiz01')
      let Numero2 = document.querySelector('.StatusQuiz02')
      let Numero3 = document.querySelector('.StatusQuiz03')

      Numero1.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"

      Numero2.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


      Numero3.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"



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

      /*atualiza????o do estatus numerico*/
      let Numero1 = document.querySelector('.StatusQuiz01')
      let Numero2 = document.querySelector('.StatusQuiz02')
      let Numero3 = document.querySelector('.StatusQuiz03')

      Numero1.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"

      Numero2.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


      Numero3.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


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
        'Ouver um empate voce precisa desempatar para Avan??ar para o 4?? questionario!',
        '',
        'error'
      )

    }
  } else if (escolhas <= 8) {
    Swal.fire(
      'Ao menos escolha 9 campos para avancar para o 4?? questionario!',
      '',
      'error'
    )

  }
}/* final 3?? questionario*/


/* 4?? questionario*/
function resultado4() {

  /*quantidade minima de escolhas*/
  let escolhas = document.querySelectorAll(".quiz04[type=radio]:checked").length;
  if (escolhas > 1) {
    /* variavies para varrer os radios quiz01*/
    var J = document.querySelectorAll("input[type=radio][value=J]:checked").length;
    var P = document.querySelectorAll("input[type=radio][value=P]:checked").length;

    /* regras */
    if (J < P) {
      resultQuiz4 = "P"

      /*atualiza????o do estatus numericos*/
      let Numero = document.querySelector('.StatusQuisFinal')

      Numero.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


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

      /*atualiza????o do estatus numericos*/
      let Numero = document.querySelector('.StatusQuisFinal')

      Numero.style.cssText = " text-align: center; border-radius: 50%; width: 100px; height: 100px;" +
        "font-size: 70px; color:black; margin-right: 100px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"

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

    } if (resultQuiz1 === "E" && resultQuiz2 === "S" && resultQuiz3 === "T" && resultQuiz4 === "J") {

      var resultFinal1 = "E - S - T - J <br><br>" + "(Extrovertido, Sensorial, Racional, Julgador)<br><br>" +

        "Segundo os resultados voce ?? Energ??tico, amig??vel e sincero; produtivo, organizado e eficiente; realista"
        + "e sens??vel, mas frequentemente c??tico sobre id??ias novas ou n??o validadas; honesto e vai direto ao ponto;"
        + " toma decis??es rapidamente, expressivo, tradicional, s??rio, e respons??vel."

      Swal.fire({

        title: resultFinal1,
        width: 1000,

      })


    } else if (resultQuiz1 === "I" && resultQuiz2 === "S" && resultQuiz3 === "T" && resultQuiz4 === "J") {

      var resultFinal2 = "I - S - T - J <br><br>" + "(Introvertido, Sensorial, Racional, Julgador)<br><br>" + "Segundo os resultados voce ?? "
        + "Cauteloso, conservador e quieto; literal, realista e pr??tico; cuidadoso e preciso; l??gico, honestoe objetivo; resistente ?? mudan??a e confort??vel com rotina; trabalha duro e ?? respons??vel." + "O mais importante para o ISTJ ?? estar em servi??o, trabalhar duro, e ser respons??vel. Para se comunicar com este tipo: esteja preparado e apresente as id??ias sequencialmente; d?? a ele um pouco de tempo para se adaptar ??s mudan??as; realce os benef??cios pr??ticos. Contribui????es para a Organiza????o: Realiza tarefas rapidamente e dentro do prazo; trabalha bem dentro das estruturas organizacionais."

      Swal.fire({

        title: resultFinal2,
        width: 1000,


      })

    } else if (resultQuiz1 === "E" && resultQuiz2 === "S" && resultQuiz3 === "F" && resultQuiz4 === "P") {

      var resultFinal3 = "E - S - F - P <br><br>" + " (Extrovertido, Sensorial, Sentimental, Perceptivo)<br><br>" + "Segundo os resultados voce ?? Caloroso, soci??vel e divertido; impulsivo, curioso e conversador; sensitivo, cuidadoso e gentil;" + "soci??vel e imprediz??vel com um grande zelo pela vida; ativo, sens??vel, e altamente ciente do mundo f??sico."
      Swal.fire({
        title: resultFinal3,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "S" && resultQuiz3 === "F" && resultQuiz4 === "P") {

      var resultFinal4 = "I - S - F - P <br><br>" + " (Introvertido, Sensorial, Sentimental, Perceptivo)<br><br>" + "Segundo os resultados voce ?? Am??vel, humilde, e altamente emp??tico; pensativo, fiel, e bondoso com aqueles que ele conhece bem; sens??vel ?? cr??ticas e ?? ferido facilmente; quieto, fala macia e gentil; adapt??vel," + "sens??vel, e curioso; realista e p??s no ch??o. O mais importante para o ISFP ?? sentir paz e harmonia com as pessoas e lugares que mais importam para ele. Para se comunicar com este tipo: evite confrontos, seja cooperativo e gentil; insista em formas pr??ticas. Contribui????es para a Organiza????o: Atende ??s necessidades das pessoas dentro da organiza????o conforme estas surjam; traz alegria ao trabalho."

      Swal.fire({
        title: resultFinal4,
        width: 1000,

      })

    } else if (resultQuiz1 === "E" && resultQuiz2 === "N" && resultQuiz3 === "T" && resultQuiz4 === "J") {

      var resultFina5 = "E - N - T - J <br><br>" + "(Extrovertido, Sensorial, Racional, Perceptivo)<br><br>" + "Segundo os resultados voce ?? Amig??vel, fortemente querido e sincero; honesto, l??gico e exigente de si pr??prio e dos outros; dirigido para demonstrar compet??ncia; imaginativo com uma perspectiva global; decisivo, organizado e eficiente. <br><br>" + " O mais importante para o ENTJ ?? demonstrar sua compet??ncia e fazer que coisas importantes aconte??am. Para se comunicar com este tipo: v?? direto ao ponto, seja organizado; enfatize aspectos de criatividade e inova????o de id??ias; esteja preparado para defender sua posi????o com l??gica. Contribui????es para a Organiza????o: Desenvolve planos bem estruturados; cria estrat??gias que funcionam na dire????o de objetivos amplos."

      Swal.fire({
        title: resultFina5,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "N" && resultQuiz3 === "T" && resultQuiz4 === "J") {

      var resultFinal6 = "I - N- T - J <br><br>" + "(Introvertido, Intuitivo, Racional, Julgador)<br><br>" + "Segundo os resultados voce ?? Aut??nomo, reservado e intelectual; criativo, inovador e original; cr??tico, anal??tico e l??gico; intelectualmente curioso, dirigido ao aprendizado e a aumentar sua compet??ncia e conhecimento; sociavelmente cauteloso e reservado; organizado e definitivo. <br><br>" + " O mais importante para o INTJ ?? sua independ??ncia e poder viver de acordo com seus pr??prios padr??es. Para se comunicar com este tipo: apele para a criatividade e inova????o; baseie os argumentos em raz??es l??gicas; seja organizado e evite cometer erros que afetem a compet??ncia do INTJ. Contribui????es para a Organiza????o: Organiza id??ias em planos de a????o; trabalha a fim de remover todos os obst??culos para que os objetivos sejam atendidos"

      Swal.fire({
        title: resultFinal6,
        width: 1000,

      })

    } else if (resultQuiz1 === "E" && resultQuiz2 === "N" && resultQuiz3 === "F" && resultQuiz4 === "J") {

      var resultFinal7 = "E - N - F - J <br><br>" + "(Extrovertido, Intuitivo, Sentimental, Julgador)<br><br>" + "Segundo os resultados voce ?? Amig??vel, aberto e entusi??stico; bondoso, comunicativo e discreto; altamente emp??tico mas ferido facilmente; criativo e original; decisivo e apaixonado, expressivo, produtivo, organizado e respons??vel. <br><br>" + "O mais importante para o ENFJ s??o seus relacionamentos e a oportunidade de comunicar e se conectar com os outros. Para se comunicar com este tipo: expresse aprecia????o por suas contribui????es; evite confrontos, seja diplom??tico e tente manter a harmonia; respeite os sentimentos, necessidades e valores do ENFJ. Contribui????es para a Organiza????o: Comunica valores organizacionais; traz novas id??ias sobre como as organiza????es deveriam tratar as pessoas."

      Swal.fire({
        title: resultFinal7,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "N" && resultQuiz3 === "F" && resultQuiz4 === "J") {

      var resultFinal8 = "I - S - T - J <br><br>" + "(Introvertido, Intuitivo, Sentimental, Julgador)<br><br>" + "Segundo os resultados voce ?? Criativo, original e independente; pensativo, caloroso e sens??vel; pensamentos globais com grande paix??o para sua vis??o original; cauteloso, deliberado e planejado; organizado, produtivo e decisivo; reservado e educado. <br><br>" + "O mais importante para o INFJ s??o suas id??ias e ser fiel a sua vis??o. Para se comunicar com este tipo: apresente suas id??ias, vis??o, com ??nfase em objetivos amplos; apele para a criatividade; espere por aten????o do INFJ sobre o assunto, para somente depois aprofundar. Contribui????es para a Organiza????o: Proporciona vis??es orientadas para o futuro sobre como servir as necessidades humanas; cumpre com seus compromissos."

      Swal.fire({
        title: resultFinal8,
        width: 1000,

      })
    } else if (resultQuiz1 === "E" && resultQuiz2 === "N" && resultQuiz3 === "F" && resultQuiz4 === "P") {

      var resultFinal9 = "E - N - F - P <br><br>" + "(Extrovertido, Intuitivo, Sentimental, Perceptivo)<br><br>" + "Segundo os resultados voce ?? Entusi??stico, conversador, e aberto; inteligente, curioso e divertido; importa-se profundamente, sens??vel e gentil; altamente inovador, criativo, otimista e original; adapt??vel e desembara??ado mas desorganizado algumas vezes. <br><br>" + "O mais importante para o ENFP ?? a liberdade para ver possibilidades, fazer conex??es, e estarcom uma variedade de pessoas. Para se comunicar com este tipo: foque em possibilidades de inova????o e interesse, e em novas formas de resolver problemas; n??o oprima o ENFP com fatos e detalhes; seja flex??vel, relaxe. Contribui????es para a Organiza????o: Inicia mudan??as; origina projetos e a????es."

      Swal.fire({
        title: resultFinal9,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "N" && resultQuiz3 === "F" && resultQuiz4 === "P") {


      var resultFinal10 = "I - N - F - P <br><br>" + "(Introvertido, Intuitivo, Sentimental, Perceptivo)<br><br>" + "Segundo os resultados voce ?? Quieto, reservado e gentil; profundamente apaixonado, sens??vel e ferido facilmente; amante ededicado aos que est??o perto dele; criativo, original e imaginativo; curioso e flex??vel em pequenas tarefas; inconformado." + "O mais importante para o INFP ?? sua cren??a e vida presas profundamente em harmonia com seus valores. Para se comunicar com este tipo: compartilhe da opini??o e de valores genu??nos do INFP; respeite seu tempo de resposta e sua privacidade; enfatize a maneira que as id??ias beneficiar??o outras id??ias. Contribui????es para a Organiza????o: ?? persuasivo sobre seus ideais; trabalha a fim de encontrar um lugar para cada pessoa dentro da organiza????o."

      Swal.fire({
        title: resultFinal10,
        width: 1000,

      })

    } else if (resultQuiz1 === "E" && resultQuiz2 === "S" && resultQuiz3 === "T" && resultQuiz4 === "P") {

      var resultFinal11 = "E - S - T - P <br><br>" + "(Extrovertido, Sensorial, Racional, Perceptivo) <br><br>" + "Segundo os resultados voce ??  Ativo, aventureiro e impulsivo; conversador e curioso; casual, adaptativo e esperto; l??gico e calmo mas capaz de grande humor, divertido e charmoso; observador e totalmente presente no momento, literal e pr??tico." + "O mais importante para o ESTP ?? a liberdade para ter o divertimento e para experimentar inteiramente aqui e agora a vida. Para se comunicar com este tipo: seja divertido, n??o leve tudo a s??rio, mas seja espec??fico e direto; forne??a resultados pr??ticos e pragm??ticos. Contribui????es para a Organiza????o: Faz as coisas acontecerem, mantem tudo vivo; negocia e se compromete com o andamento das coisas."

      Swal.fire({
        title: resultFinal11,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "S" && resultQuiz3 === "T" && resultQuiz4 === "P") {


      var resultFinal12 = "I - S - T - P <br><br>" + "(Introvertido, Sensorial, Racional, Perceptivo) <br><br>" + "Segundo os resultados voce ?? L??gico, pragm??tico e objetivo; quieto, modesto e aut??nomo; real??stico e reservado; impulsivo e curioso sobre o mundo f??sico; flex??vel e engenhoso; objetivo e n??o emocional. " + "O mais importante para o ESTP ?? a liberdade de agir independentemente e seguir seusimpulsos. Para se comunicar com este tipo: evite apelos emocionais, use l??gicas claras; respeite sua privacidade e nunca intimide; ou??a-o cuidadosamente e d?? ao ISTP um tempo para pensar no que fazer. Contribui????es para a Organiza????o: Age como solucionador de problemas, buscando atender ??s necessidades e aos problemas do momento; funciona como um comp??ndio ambulante de informa????o."

      Swal.fire({
        title: resultFinal12,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "S" && resultQuiz3 === "F" && resultQuiz4 === "J") {


      var resultFinal13 = "I - S - F - J <br><br>" + "(Introvertido, Sensorial, Sentimental, Julgador)<br><br>" + "Segundo os resultados voce ?? Cauteloso, gentil e pensativo; hesitante at?? conhecer as pessoas, tornando-se bondoso e cuidadoso; muito literal e ciente do mundo f??sico; descompromissado sobre padr??es pessoais e ofendido facilmente; aplicado e consciente, organizado e decisivo." + "O mais importante para o ISFJ ?? viver uma vida est??vel e ajudar pessoas de forma real. Para se comunicar com este tipo: fale de forma clara e devagar, respeite sua privacidade; seja expl??cito e mapeie os passos de suas id??ias; honre seus compromissos com o ISFJ, fique atento. Contribui????es para a Organiza????o: ?? cuidadoso e respons??vel com detalhes e rotinas; n??o mede esfor??os para servir as pessoas."

      Swal.fire({
        title: resultFinal13,
        width: 1000,

      })
    } else if (resultQuiz1 === "E" && resultQuiz2 === "S" && resultQuiz3 === "F" && resultQuiz4 === "J") {


      var resultFinal14 = "E - S - F - J <br><br>" + "(Extrovertido, Sensorial, Sentimental, Julgador) <br><br>" + "Segundo os resultados voce ?? Ativo, amig??vel, e energ??tico; aberto, bondoso e conversador; preocupado com os outros e cuidadoso para ser educado e cooperativo; real??stico, literal e consciencioso, altamente sens??vel e ferido facilmente, organizado, respons??vel, e convencional." + "O mais importante para o ESFJ s??o seus relacionamentos e ajudar pessoas na realidade e de forma pr??tica. Para se comunicar com este tipo: respeite seus pensamentos, olhe nos olhos quando falar com eles; mencione pontos de acordo primeiro; seja claro e espec??fico, modele os passos se poss??vel. Contribui????es para a Organiza????o: Trabalha bem com as pessoas, especialmente em equipe; completa as tarefas dentro do prazo e de maneira precisa."

      Swal.fire({
        title: resultFinal14,
        width: 1000,

      })

    } else if (resultQuiz1 === "E" && resultQuiz2 === "N" && resultQuiz3 === "T" && resultQuiz4 === "P") {

      var resultFinal15 = "E - N - T - P <br><br>" + "(Extrovertido, Intuitivo, Sentimental, Perceptivo)<br><br>" + "Segundo os resultados voce ?? Amig??vel, simp??tico e aberto; perspicaz, energ??tico e irrevente; engenhoso, imaginativo e criativo; curioso, flex??vel e imprediz??vel; l??gico e anal??tico." + "O mais importante para o ENTP ?? ser criativo, est?? vendo possibilidades e est?? tendo sempre novos desafios. Para se comunicar com este tipo: foque em possibilidades de criatividade; espere muitos questionamentos e n??o force um retorno r??pido; esteja flex??vel e aberto para sugest??es e melhorias. Contribui????es para a Organiza????o: Encara limita????es como desafios a serem vencidos; apresenta novas maneiras de fazer as coisas."

      Swal.fire({
        title: resultFinal15,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "N" && resultQuiz3 === "T" && resultQuiz4 === "P") {

      var resultFinal16 = "I - N - T - P <br><br>" + "(Introvertido, Intuitivo, Sentimental, Perceptivo) <br><br>" + "Segundo os resultados voce ?? Quieto, independente, e confidencial; l??gico e n??o emocional; criativo, engenhoso e inovador, pensadores globais; curioso e dirigido para aumentar sua compet??ncia, casual e adapt??vel; inconformado e imprevis??vel. " + "O mais importante para o INTP ?? sua privacidade e a oportunidade de resolver problemas complexos de maneiras originais. Para se comunicar com este tipo: respeite sua compet??ncia e experi??ncia; d?? a ele um tempo para pensar sobre novas coisas; desafie sua criatividade para resolver problemas complexos. Contribui????es para a Organiza????o: planeja sistemas l??gicos e complexos; demonstrm habilidades para resolver problemas complexos."

      Swal.fire({
        title: resultFinal16,
        width: 1000,

      })
    }

  } else if (escolhas <= 8) {
    Swal.fire(
      'Ao menos escolha 9 campos para avancar para OBTER O RESULTADO FINAL!',
      '',
      'error'
    )
  }
}/* final 4?? questionario*/




