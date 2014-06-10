/*
 * clipster
 * https://github.com/kickstarter/jquery-clipster
 *
 * Copyright (c) 2014 Samuel Cole
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.clipster = function(options) {
    return this.each(function() {
      var $this = $(this),
        clipster = $this.data('clipster');
      if (!clipster) {
        clipster = new Clipster($this, options);
        $this.data('clipster', clipster);
      }
    });
  };

  function Clipster ($elem, options) {
    var _this = this;

    if (!options) {
      options = {};
    }

    this.text = options.text || $elem.data('text') || $elem.text();

    $elem.on('click', function (e) {
      var $input = $('<input type="text" value="' + _this.text + '">'),
        bubbling = true;
      $elem.after($input);
      $input.focus();

      $(document).on('copy click', function () {
        if (bubbling) {
          bubbling = false;
        } else {
          if ($input && $input.length) {
            $input.remove();
          }
        }
      });

      e.preventDefault();
    });
  }

}(jQuery));
