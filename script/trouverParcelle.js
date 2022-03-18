$.fn.trouverParcelle = function ({container, user, success, error}) {
    if(!user?.societe?.parcelles) return error("parcelles indisponibles")

    user.societe.parcelles.forEach(parcelle => {
        parcelle?.libelle && success(parcelle)
    });
}