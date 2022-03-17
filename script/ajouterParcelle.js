$.fn.ajouterParcelle = function ({container, user , success, error}) {

    function ajouterAdresseAPI(){
        let rueNumero = $("#Numero").val()
        let nomRue = $("#Adresse").val()
        let codePostal = $("#Codepostal").val()
        let ville = $("#Ville").val()
     
         // ajouter l'adresse
         let url = `http://vps.e-mingo.net/coopagri/app/index.php?c=Adresse&a=enregistrer&entId=${user.id}&societeId=${user.societe.id}&rueNumero=${rueNumero}&rueNom=${nomRue}&codePostal=${codePostal}&ville=${ville}`
     
         $.ajax({
             url,
             crossDomain: true,
             success: function(json) {
               ajouterParcelleAPI(json.id)     
             },
             error: function(t,e, l) {
               error();
             },
         })
    }

    function ajouterParcelleAPI(idAdresse){
         // ajouter la parcelle
         let description = $("#Description").val()
         let libelle = $("#Libelle").val()
         let url = `http://vps.e-mingo.net/coopagri/app/index.php?c=Parcelle&a=enregistrer&entId=${user.id}&exploitantId=${null}&adresseId=${idAdresse}&libelle=${libelle}&description=${description}`
     
         $.ajax({
             url,
             crossDomain: true,
             success: function(json) {
                success() 
             },
             error: function(t,e, l) {
               error();
             },
         })
    }


    /*exploitant, adresse {num, addresse, code postal, ville}, libelle, description*/
    // http://vps.e-mingo.net/coopagri/app/index.php?c=Parcelle&a=enregistrer&entId=0&exploitantId=11&adress=9
    // http://vps.e-mingo.net/coopagri/app/index.php?c=Adresse&a=enregistrer&entId=0&societeId=11&rueNumero=100&rueNom=test&codePostal=87000&ville=limoges
    
}