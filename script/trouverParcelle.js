$.fn.trouverParcelle = function ({container, user, success, error}) {
    //Pour tester : couz1
    user.societe.parcelles.forEach(parcelle => {
        //cette fonction passée en paramètre doit creer un <li><h2>adresse de la parcelle</h2><p>produit de la parcelle</p>...
        success(parcelle);
    });
}