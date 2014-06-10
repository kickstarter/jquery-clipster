/*! Clipster - v0.1.0 - 2014-06-10
* https://github.com/kickstarter/jquery-clipster
* Copyright (c) 2014 Samuel Cole; Licensed MIT */
(function($) {
  var $overlay =
    $('<div id="jquery-clipster-overlay"><span>cmd-c</span><input></div>'),
    $input = $overlay.find('input');
  $overlay.hide();

  $(function () {
    $('body').append($overlay);
  });

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
    this.$elem = $elem;
    this.is_on = false;

    this.$elem.on('click', function (e) {
      _this.on();
      e.preventDefault();
    });

    $(document).on('copy click', function (e) {
      if ($(e.target).closest(_this.$elem).length){
        return;
      }
      _this.off();
    });

  }

  Clipster.prototype.on = function () {
    if (this.is_on) {
      return;
    }

    $overlay.show();

    $input.val(this.text);
    $input[0].select();
    $input.focus();

    this.is_on = true;
  };

  Clipster.prototype.off = function () {
    if (this.is_on) {
      setTimeout(function () {
        $overlay.hide();
      });
      this.is_on = false;
    }
  };

}(jQuery));
