$.fn.supprimerParcelle = function ({user, container, success, error}) {
    $($(this)[0]).on("click", "#supprimerParcelle", function () {
        supprimerAdresseAPI();
    });
    //on détruit l'adresse de la parcelle (à faire en deuxième pour le coup !)
    function supprimerAdresseAPI() {
        let rueNumero = $("#Numero").val();
        let nomRue = $("#Adresse").val();
        let rueType = $("#typeRue").val();
        let codePostal = $("#Codepostal").val();
        let ville = $("#Ville").val();
    
        // encode URI pour remplacer les espaces par des %20 par exemple
        let url = encodeURI(
          `http://vps.e-mingo.net/coopagri/app/index.php?c=Adresse&x=1&a=supprimer&entId=0&rueNumero=${rueNumero}&rueTypeId=${rueType}&rueNom=${nomRue}&codePostal=${codePostal}&ville=${ville}`
        );
    
        $.ajax({
          url,
          crossDomain: true,
          success: function (json) {
            console.log(JSON.parse(json))
            supprimerParcelleAPI(JSON.parse(json).id);
          },
          error: function (t, e, l) {
            error();
          },
        });
      }
      //On supprime la parcelle de l'API
      function supprimerParcelleAPI(idAdresse) {
        // supprimer la parcelle
        let description = $("#Description").val() || "desc";
        let libelle = $("#Libelle").val() || "titre";
    
        console.log(idAdresse)
    
        let url = encodeURI(`http://vps.e-mingo.net/coopagri/app/index.php?c=Parcelle&x=1&a=supprimer&entId=0&exploitantId=${user.societe.id}&adresseId=${idAdresse}&libelle=${libelle}&description=${description}`);
    
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
}