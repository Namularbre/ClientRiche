$.fn.trouverParcelle = function ({container, user, success, error}) {
    //Pour tester : couz1
    user[0].societe.parcelles.array.forEach(parcelle => {
        //cette fonction passée en paramètre doit creer un <li><h2>adresse de la parcelle</h2><p>produit de la parcelle</p>...
        success();
    });
}