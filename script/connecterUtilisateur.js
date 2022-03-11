(function ($) {
  $fn.connecterUtilisateur = function ({ container, user, success, error }) {
    $(container + "input[type=submit]").on("click", login);

    function login() {
      //1. chopper info user
      //2. Verifier info dans "BDD"
      //3. Si existe => on redirige (http.get(mapage)) Sinon => Msg d'erreur
      let nom = $(container + ">#nom");
      let code = $(container + ">#code");

      let test = $.JSON(
        "http://vps.e-mingo.net/coopagri/app/index.php?c=api&n=CompteIndividu&a=get&x=1"
      );
      console.log(test);
      //chercher dans données
      return isLogin;
    }





  };
});
