$(document).ready(function(){
   var xml;
  $('#b1').click(function(){
       $.get('xml/users.xml', null, function (data, textStatus) {

           xml=data;
            $(xml).find('details').each( function(){
                var item = $(this);

                if(item.find('username').text()==$('#userid').val() && item.find('password').text()==$('#pwd').val())
                {

                    alert("Has iniciado sesión correctamente");
                    document.getElementById("login").innerHTML = "Bienvenido a YourEvent, user. Esperemos que disfrutes tu visita a nuestra web. :)";

                }
           });
        });
    });
});