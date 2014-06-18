/*
 * clipster
 * https://github.com/kickstarter/jquery-clipster
 *
 * Copyright (c) 2014 Samuel Cole
 * Licensed under the MIT license.
 */

(function($) {
  var $overlay =
    $('<div id="jquery-clipster-overlay"><span>Press ⌘C to copy:<input></span></div>'),
    $input = $overlay.find('input');
  $overlay.hide();

  $(function () {
    $('body').append($overlay);
  });

  $.clipster = function (selector, options) {
    $(document).on('click', selector, function (e) {
      var $this = $(this).clipster(options),
        clipster = $this.data('clipster');

      clipster.activate();
      e.preventDefault();
    });
  };

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
    if (!options) {
      options = {};
    }

    this.text = options.text || $elem.data('text') || $elem.text();
    this.$elem = $elem;
    this.is_on = false;

    this.bind();
  }

  Clipster.prototype.bind = function () {
    var _this = this;

    this.$elem.on('click', function (e) {
      _this.activate();
      e.preventDefault();
    });

    $(document).on('copy click', function (e) {
      if ($(e.target).closest(_this.$elem).length){
        return;
      }
      _this.deactivate();
    });
  };

  Clipster.prototype.activate = function () {
    if (this.active) {
      return;
    }

    $overlay.show();

    $input.val(this.text);
    $input[0].select();
    $input.focus();

    this.active = true;
  };

  Clipster.prototype.deactivate = function () {
    if (this.active) {
      setTimeout(function () {
        $overlay.hide();
      });
      this.active = false;
    }
  };

}(jQuery));
