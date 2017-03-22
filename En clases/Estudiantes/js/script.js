$().ready(function() {
  
  $("#myform").validate({
    rules: {
      name: "required",
      name2: "required",
      message: "required",
      id: "required",
      phone: "required",
      activity: {
      	required: true
      },
      email: {
      required: true,
      email: true
      },
    },
    messages: {
      name: "<br />Nombre porfavor",
      name2: "Por favor introduzca su nombre y apellido",
      id: "<br />Coloca lo que se te pide",
      phone: "<br />Te falta este campo",
      message: "<br />¿No tienes ni idea?",
      activity: {
        required: "Por favor selecciona una actividad"
      },
      email: {
        required: "<br />Por favor introduzca su e-mail",
        email: "Por favor introduzca un e-mail válido"
      },
    }
  });
});

jQuery(function($){
   $("#phone_number").mask("(999) 999-9999");
});