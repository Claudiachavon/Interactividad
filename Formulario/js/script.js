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
      name: "<br />COMPLETA EL CAMPO",
      name2: "COMPLETA EL CAMPO",
      id: "<br />COMPLETA EL CAMPO",
      phone: "<br />COMPLETA EL CAMPO",
      message: "<br />COMPLETA EL CAMPO",
      activity: {
        required: "COMPLETA EL CAMPO"
      },
      email: {
        required: "<br />COMPLETA EL CAMPO",
        email: "COMPLETA EL CAMPO CON E-MAIL REAL"
      },
    }
  });
});

jQuery(function($){
   $("#phone_number").mask("(999) 999-9999");
});

