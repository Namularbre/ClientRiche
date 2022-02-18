const connectUser = ({
    container : "form",
    success : function (exploitant){
        console.log(exploitant);    
    },
    error : function (){
        throw Error("Identifiant non valide");
    },
})