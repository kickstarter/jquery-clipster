# Clipster

Copy without Flash

There is currently no way to place text onto a user's clipboard without
a plugin (normally Flash). Instead, this plugin creates an invisible input with the
text to target selected and then asks the user to press their 'copy' keyboard
shortcut.

## Getting Started

```
bower install jquery-clipster
```

or download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/kickstarter/jquery-clipster/master/dist/clipster.min.js
[max]: https://raw.github.com/kickstarter/jquery-clipster/master/dist/clipster.js

In your web page:

```html
<a class="clipster" data-text="1234">copy user id</a>

<script src="jquery.js"></script>
<script src="dist/clipster.min.js"></script>
<script>
jQuery(function($) {
  $('a.clipster').clipster();
});
</script>
```
