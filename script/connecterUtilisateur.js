$.fn.connecterUtilisateur = function ({ container, user, success, error }) {
  $(container + " input[type=button]").on("click", login);

  function login() {
    //1. chopper info user
    //2. Verifier info dans "BDD"
    //3. Si existe => on redirige (http.get(mapage)) Sinon => Msg d'erreur
    let login = $(container + ">#nom").val();
    let pass = $(container + ">#code").val();
    //On va chercher l'utilisateur dans l'API
    let url = `http://vps.e-mingo.net/coopagri/app/index.php?c=api&o=auth&name=${login}&val=${pass}`
    
    
    
    
    
    //let url = 'http://vps.e-mingo.net/coopagri/app/index.php?c=api&n=Commande&x=1'
    let data = $.ajax({
      dataType: "jsonp",
      url: url,
      crossDomain: true,
      success: function(json) {
        console.log(json);
        json != 0 ? success() : error();
      },
      error: function(t,e, l) {
          console.log(t,e,l)
          // error()
      },
    });
  }
};
