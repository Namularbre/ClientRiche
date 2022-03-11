$.fn.connecterUtilisateur = function ({ container, user, success, error }) {
  $(container + " input[type=button]").on("click", login);

  function login() {
    //1. chopper info user
    //2. Verifier info dans "BDD"
    //3. Si existe => on redirige (http.get(mapage)) Sinon => Msg d'erreur
    let nom = $(container + ">#nom");
    let code = $(container + ">#code");
    //On va chercher l'utilisateur dans l'API
    let url = `http://vps.e-mingo.net/coopagri/app/index.php?c=api&x=1&n=CompteIndividu&where=login|${nom}&where=pass|${code}`;

    let data = $.ajax({
      dataType: "jsonp",
      url: url,
      success: function (json) {
        console.debug(json);
        json.length != 0 ? success() : error();
      },
    });
  }
};
