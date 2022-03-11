$.fn.connecterUtilisateur = function ({ container, user, success, error }) {
    $(container + " input[type=button]").on("click", login);

    function login() {
      let isLogin = false;
      //1. chopper info user
      //2. Verifier info dans "BDD"
      //3. Si existe => on redirige (http.get(mapage)) Sinon => Msg d'erreur
      let nom = $(container + ">#nom");
      let code = $(container + ">#code");
        console.log("test")
      let data = $.getJSON("http://vps.e-mingo.net/coopagri/app/index.php?c=api&n=CompteIndividu&a=get", (json) => {
        console.log(json)
      });

      console.log(data);


      //chercher dans données
      return isLogin;
    }

};