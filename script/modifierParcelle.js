$.fn.modifierParcelle = function ({container, user, sucess, error}) {
    
    $($(this)[0]).on('click', ()=> {
        modifierParcelleAPI();
    });

    function modifierParcelleAPI() {
        let rueNumero = $("#Numero").val();
        let nomRue = $("#Adresse").val();
        let rueType = $("#typeRue").val();
        let codePostal = $("#Codepostal").val();
        let ville = $("#Ville").val();

        let urlAPI = encodeURI(
            `http://vps.e-mingo.net/coopagri/app/index.php?c=Adresse&x=1&a=changer&entId=0&rueNumero=${rueNumero}&rueTypeId=${rueType}&rueNom=${nomRue}&codePostal=${codePostal}&ville=${ville}`
        );

        $.ajax({
            urlAPI,
            crossDomain : true,
            sucess : function (json) {
                console.log(JSON.parse(json));
            },
            error : function() {
                error();
            },
        });
    }
}