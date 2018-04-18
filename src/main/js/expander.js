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
