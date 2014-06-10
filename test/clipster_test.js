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
    // This will run before each test in this module.
    setup: function() {
      this.$elems = $('#qunit-fixture .clipster');
      this.$elems.clipster();
      this.$plain = this.$elems.filter('#plain');
      this.$datatext = this.$elems.filter('#datatext');
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.$elems.clipster(), this.$elems, 'should be chainable');
  });

  test('on click: opens input', function () {
    expect(1);
    this.$plain.click();
    strictEqual(this.$plain.siblings('input').length, 1);
  });

  test('on click: input is focused', function () {
    expect(1);
    this.$plain.click();
    strictEqual(this.$plain.siblings('input')[0], document.activeElement);
  });

  test('on click: default is prevented', function () {
    /*global _$*/
    expect(1);
    var e = _$.Event('click');
    this.$plain.trigger(e);
    strictEqual(e.isDefaultPrevented(), true);
  });

  test('on copy: input is removed', function () {
    expect(1);
    this.$plain.click();
    $(document).trigger('copy');
    strictEqual(this.$plain.siblings('input').length, 0);
  });

  test('on document click: input is removed', function () {
    expect(1);
    this.$plain.click();
    $(document).click();
    strictEqual(this.$plain.siblings('input').length, 0);
  });

  test('copy can be defined by: $elem\'s text()', function () {
    expect(1);
    this.$plain.click();
    strictEqual(this.$plain.siblings('input').val(), 'copy');
  });

  test('copy can be defined by: data-text', function () {
    expect(1);
    this.$datatext.click();
    strictEqual(this.$datatext.siblings('input').val(), 'foo');
  });

  test('copy can be defined by: options', function () {
    expect(1);
    this.$datatext.click();
    strictEqual(this.$datatext.siblings('input').val(), 'foo');
  });

}(jQuery));
