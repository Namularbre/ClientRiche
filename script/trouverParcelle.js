$.fn.trouverParcelle = function ({container, user, success, error}) {
    //Pour tester : couz1
    user[0].societe.parcelles.array.forEach(parcelle => {
        success();
    });
}