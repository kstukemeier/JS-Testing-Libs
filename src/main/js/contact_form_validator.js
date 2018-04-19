$(function() {

  //die methode ist dafür die größe des
  $('.message').keyup(function(){
    var max = $(this).attr("maxlength");
    var length = $(this).val().length;
    var $messageField = $(this);

    if (length === max) {
      $messageField.val($messageField.val().substr(0,500));
    } else {
      var char = max - length;
      $('#char_count').text('Uebrige Zeichen: ' + char);
    }
  })


  $('.name').keyup(function(){
    var max = $(this).attr("maxlength");
    var length = $(this).val().length;
    var $messageField = $(this);

    if (length === max) {
      $messageField.val($messageField.val().substr(0,40));
    }
  })

  var senden =$('#senden');
  var email = $('#email');
  senden.click(function(){

    var regularExpretion = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/g;
    var exam = regularExpretion.test(email.val());

    if(exam){
      $('#not-accepted').text("richtig");
    }else if (exam===false) {
      $('#not-accepted').text("falsch");
    }
  })

})