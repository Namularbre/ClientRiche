$.fn.connecterUtilisateur = function ({ container, user, success, error }) {
    $(container + " input[type=button]").on("click", login);

    function login() {
      let isLogin = false;
      //1. chopper info user
      //2. Verifier info dans "BDD"
      //3. Si existe => on redirige (http.get(mapage)) Sinon => Msg d'erreur
      let nom = $(container + ">#nom");
      let code = $(container + ">#code");
      //On va chercher l'utilisateur dans l'API
      let data = $.getJSON('http://vps.e-mingo.net/coopagri/app/index.php?c=api&x=1&n=CompteIndividu&where=login|' + nom, (json) => {
        console.log(json)
      });
      console.log(data);
      return isLogin;
    }

};