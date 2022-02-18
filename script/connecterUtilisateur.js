(function($){
    $fn.connectUser = function ({container,user,success,error}) {
        //1. chopper info user
        //2. Verifier info dans "BDD"
        //3. Si existe => on redirige (http.get(mapage)) Sinon => Msg d'erreur
        let nom = $(this + ">#nom");
        let prenom = $(this + ">#prenom");
        let code = $(this + ">#code");

        //chercher dans données
        if (islogin) {
            return success;
        }
        return error;
    }
})