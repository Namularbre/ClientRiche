$.fn.connecterUtilisateur = function ({ container, user, success, error }) {
  $(container + " input[type=button]").on("click", login);


  let sessionLogin = sessionStorage.getItem("login")
  let sessionPass = sessionStorage.getItem("password")

  if(sessionLogin && sessionPass){ 
    $.ajax({
      url: `http://vps.e-mingo.net/coopagri/app/index.php?c=api&o=auth&name=${sessionLogin}&val=${sessionPass}`,
      crossDomain: true,
      success: function(json) {
        json?.data.length != 0 ? success() : error();
      },
      error: function(t,e, l) {
        error()
      },
    })
  }

  function login() {
    let login = $(container + ">#nom").val();
    let pass = $(container + ">#code").val();

    let url = `http://vps.e-mingo.net/coopagri/app/index.php?c=api&o=auth&name=${login}&val=${pass}`

    let data = $.ajax({
      url: url,
      crossDomain: true,
      success: function(json) {
        sessionStorage.setItem("login", login)
        sessionStorage.setItem("password", pass)
          json?.data.length != 0 ? success() : error();
      },
      error: function(t,e, l) {
          error()
      },
    });
  }
};
