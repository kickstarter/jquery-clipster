(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#clipster', {
    setup: function() {
      this.$elems = $('#qunit-fixture .clipster');
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.$elems.clipster(), this.$elems, 'should be chainable');
  });

  module('plain', {
    setup: function () {
      this.$plain = $('#plain').clipster();
      this.$overlay = $('#jquery-clipster-overlay');
      this.$input = this.$overlay.find('input');
    }
  });

  test('on click: opens overlay', function () {
    expect(1);
    this.$plain.click();
    ok(this.$overlay.is(':visible'));
  });

  test('on click: input is focused', function () {
    expect(1);
    this.$plain.click();
    strictEqual(this.$input[0], document.activeElement);
  });

  test('on click: default is prevented', function () {
    /*global _$*/
    expect(1);
    var e = _$.Event('click');
    this.$plain.trigger(e);
    strictEqual(e.isDefaultPrevented(), true);
  });

  asyncTest('on copy: overlay is hidden', function () {
    var _this = this;
    expect(1);
    this.$plain.click();
    $(document).trigger('copy');
    setTimeout(function () {
      ok(!_this.$overlay.is(':visible'));
      start();
    });
  });

  asyncTest('on document click: overlay is hidden', function () {
    var _this = this;
    expect(1);
    this.$plain.click();
    $(document).click();
    setTimeout(function () {
      ok(!_this.$overlay.is(':visible'));
      start();
    });
  });

  test('copy can be defined by: $elem\'s text()', function () {
    expect(1);
    this.$plain.click();
    strictEqual(this.$input.val(), 'copy');
  });

  module('data-text', {
    setup: function () {
      this.$datatext = $('#datatext').clipster();
      this.$input = $('#jquery-clipster-overlay input');
    }
  });

  test('copy can be defined by: data-text', function () {
    expect(1);
    this.$datatext.click();
    strictEqual(this.$input.val(), 'foo');
  });

  module('options', {
    setup: function () {
      this.$elem = $('#link');
      this.$input = $('#jquery-clipster-overlay input');
    }
  });

  test('copy can be defined by: options', function () {
    expect(1);
    this.$elem.clipster({
      text: 'bar'
    });
    this.$elem.click();
    strictEqual(this.$input.val(), 'bar');
  });

  module('delegation', {
    setup: function () {
      $.clipster('#link');
      this.$input = $('#jquery-clipster-overlay input');
    }
  });

  test('can be initiated on click', function () {
    expect(1);
    $('#link').click();
    strictEqual(this.$input.val(), 'link');
  });

}(jQuery));
