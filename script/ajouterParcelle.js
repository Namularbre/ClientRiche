$.fn.ajouterParcelle = function ({ container, user, success, error }) {
  $($(this)[0]).on("click", "#ajouterParcelle", function () {
    ajouterAdresseAPI();
  });

  function ajouterAdresseAPI() {
    let rueNumero = $("#Numero").val();
    let nomRue = $("#Adresse").val();
    let rueType = $("#typeRue").val();
    let codePostal = $("#Codepostal").val();
    let ville = $("#Ville").val();

    // encode URI pour remplacer les espaces par des %20 par exemple
    let url = encodeURI(
      `http://vps.e-mingo.net/coopagri/app/index.php?c=Adresse&x=1&a=enregistrer&entId=${user.id}&rueNumero=${rueNumero}&rueTypeId=${rueType}&rueNom=${nomRue}&codePostal=${codePostal}&ville=${ville}`
    );

    $.ajax({
      url,
      crossDomain: true,
      success: function (json) {
        
        ajouterParcelleAPI(JSON.parse(json).id);
      },
      error: function (t, e, l) {
        error();
      },
    });
  }

  function ajouterParcelleAPI(idAdresse) {
    // ajouter la parcelle
    let description = $("#Description").val() || "desc";
    let libelle = $("#Libelle").val() || "titre";

    let url = encodeURI(`http://vps.e-mingo.net/coopagri/app/index.php?c=Parcelle&x=1&a=enregistrer&entId=${user.id}&exploitantId=${user.societe.id}&adresseId=${idAdresse}&libelle=${libelle}&description=${description}`);

    $.ajax({
      url,
      crossDomain: true,
      success: function (json) {
        console.log(json)
        success();
      },
      error: function (t, e, l) {
        error();
      },
    });
  }

  /*exploitant, adresse {num, addresse, code postal, ville}, libelle, description*/
  // http://vps.e-mingo.net/coopagri/app/index.php?c=Parcelle&a=enregistrer&entId=0&exploitantId=11&adress=9
  // http://vps.e-mingo.net/coopagri/app/index.php?c=Adresse&a=enregistrer&entId=0&societeId=11&rueNumero=100&rueNom=test&codePostal=87000&ville=limoges
};
