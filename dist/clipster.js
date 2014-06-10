/*! Clipster - v0.1.0 - 2014-06-10
* https://github.com/kickstarter/jquery-clipster
* Copyright (c) 2014 Samuel Cole; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.clipster = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.clipster = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.clipster.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.clipster.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].clipster = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
