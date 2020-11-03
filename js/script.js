// Descrizione:
// 1======
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
//2========
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera



$(document).ready(function () {
  //1==========================
  //per andare avanti cliccando sulla freccia a destra
  $(".next").click(nextImg);

  // funzione per l'avanti
  function nextImg() {
    //si attiva con il click
    console.log("hai cliccato su next!!");

    var imgAttiva = $("img.active");
    // creo variabile imgAttiva

    imgAttiva.removeClass("active");
    //viene rimossa la classe active!


    if (imgAttiva.hasClass("last")){
      // se l'img attiva è l'ultima dell'elenco

      $("img.first").addClass("active");
      //con il click io do la classe attiva alla prima dell'elenco

    } else {// altrimenti
      //fai diventare attiva l'immagine successiva
      imgAttiva.next("img").addClass("active");
    }
  }

  //per andare indietro cliccando sulla freccia a sinistra
  $(".prev").click(prevImg);


  // funzione per l'indietro
  function prevImg() {
    console.log("hai cliccato su prev!!");
    //si attiva con il click

    var imgAttiva = $("img.active");
    // creo variabile imgAttiva

    imgAttiva.removeClass("active");
    //viene rimossa la classe active!

    if (imgAttiva.hasClass("first")){
      // se l'img attiva è la prima dell'elenco
      $("img.last").addClass("active");
      //con il click io do la classe attiva all'ultima' dell'elenco

    } else {// altrimenti
      //fai diventare attiva l'immagine precedente
      imgAttiva.prev("img").addClass("active");
    }
  }

  //2==============

  //provo a concatenare l'azione di premere il tasto tastiera con la corrispettiva funzione di quando clicco sulle freccette della slide

  //https://www.geeksforgeeks.org/jquery-keydown-with-examples/ da rivedere nel ripasso

  $(document).keydown(function (schiacciaFrecce){
    //$(document)[sintassi normale]
    // .keydown[parte quando si schiaccia un pulsante]
    // (function ([qua creo una funzione che si attiva tra le graffe]))
    if (schiacciaFrecce.keyCode == 37) {
      prevImg();
      console.log('hai premuto la freccia sinistra');
    }

    if (schiacciaFrecce.keyCode == 39) {
      nextImg();
      console.log('hai premuto la freccia destra');
    }
  });


});
