$(function() { //diese Methode umfasst alle p's und kann so auf jedes p angewendet werden
  $('.section').each(function() {
      var $section = $(this);

      $section.click(function() {
        var $clickTarget = $(this);
        var $toggleText = $clickTarget.next('.masking');

        $toggleText.slideToggle();
      })
  })
})

$(function(){//die methode ist dafür die größe des
  $('.message').keyup(function(){
    var max = $(this).attr("maxlength");
    var length = $(this).val().length;

    if (length === max) {
      length.val()=length.val().substr(0,500);
    } else {
        var char = max - length;
        $('#char_count').text('Uebrige Zeichen: ' + char);
    }
  })
})

$(function(){
  $('.name').keyup(function(){
    var max = $(this).attr("maxlength");
    var length = $(this).val().length;

    if (length === max) {
      length.val()=length.val().substr(0,40);
    }
  })
})

$(function(){
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
