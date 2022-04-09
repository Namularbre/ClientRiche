$.fn.trouverChamp = function ({user, content, sucess, error}) {
    if (!user?.societe?.parcelle.champs) {
        return error("Il n'y a pas de champs dans la parcelle");
    }

    user.societe.parcelles.champs.forEach(champ => {
        champ?.libelle && sucess(champ);
    });
}