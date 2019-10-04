$(document).ready(() => {
  //logout
  $("#logout").click(event => {
    event.preventDefault();
    if (gapi.auth2) {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        localStorage.removeItem("token");
        hideAll();
        $("#landing-page").show();
      });
      $("#content-mangas-detail").hide();
      $("#content-mangas-dash").show();
    } else {
      localStorage.removeItem("token");
      hideAll();
      $("#landing-page").show();
      $("#content-mangas-detail").hide();
      $("#content-mangas-dash").show();
    }
  });

  //register form
  $("#register-form").submit(function(event) {
    event.preventDefault();

    $.ajax({
      method: "post",
      url: "http://localhost:3000/users/register",
      data: {
        name: $("#reg-name").val(),
        email: $("#reg-email").val(),
        password: $("#reg-password").val()
      }
    })
      .done(data => {
        resetRegister();
        localStorage.setItem("token", data.token);
        hideAll();
        $("#home-page").show();
        fetchAllMangas();
      })
      .fail(err => {
        resetRegister();
        Swal.fire({
          type: "error",
          text: err.responseJSON.message
        });
      });
  });

  //login form
  $("#login-form").submit(function(event) {
    event.preventDefault();

    $.ajax({
      method: "post",
      url: "http://localhost:3000/users/login",
      data: {
        email: $("#login-email").val(),
        password: $("#login-password").val()
      }
    })
      .done(data => {
        resetLogin();
        localStorage.setItem("token", data.token);
        hideAll();
        $("#home-page").show();
        fetchAllMangas();
      })
      .fail(err => {
        resetLogin();
        Swal.fire({
          type: "error",
          text: err.responseJSON.message
        });
      });
  });
});
