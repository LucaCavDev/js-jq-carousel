// Descrizione:
// Bonus:
// i pallini si evidenziano in accordo alla img corrispondente
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// altro esempio: Generiamo i pallini con JS (ma quello che volete liberamente)


$(document).ready(function () {

  $(".next").click(nextImg);
  function nextImg() {
    console.log("hai cliccato su next!!");

    var imgAttiva = $("img.active");
    imgAttiva.removeClass("active");

    if (imgAttiva.hasClass("last")){
      $("img.first").addClass("active");
    } else {
      imgAttiva.next("img").addClass("active");
    }
    //sposto la classe active sulle icone nel nav
    var pallinoAttivo = $("i.active");
    pallinoAttivo.removeClass("active");

    if (pallinoAttivo.hasClass("last")){
      $("i.first").addClass("active");
    } else {
      pallinoAttivo.next("i").addClass("active");
    }
  }

  //-------------------------


  $(".fa-circle").click(globoBlu);

  function globoBlu() {
    console.log("hai cliccato un globo, se è bianco lo trasformi blu se è blu resta blu!");

    var globoAttivo = $("i.active");
    // creo variabile globoAttivo

    globoAttivo.removeClass("active");
    //rimuovo la classe attiva

    var imgAttiva = $("img.active");
    imgAttiva.click("i").addClass("active");

  }

  //-----------------------------------------------








  $(".prev").click(prevImg);
  function prevImg() {
    console.log("hai cliccato su prev!!");
    var imgAttiva = $("img.active");
    imgAttiva.removeClass("active");
    if (imgAttiva.hasClass("first")){
      $("img.last").addClass("active");
    } else {
      imgAttiva.prev("img").addClass("active");
    }

    //sposto la classe active sulle icone nel nav
    var pallinoAttivo = $("i.active");
    pallinoAttivo.removeClass("active");

    if (pallinoAttivo.hasClass("first")){
      $("i.last").addClass("active");
    } else {
      pallinoAttivo.prev("i").addClass("active");
    }

  }




  //funzione sulla tastiera. non tocchiamola
  $(document).keydown(function (schiacciaFrecce){
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
