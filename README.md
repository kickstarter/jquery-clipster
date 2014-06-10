# Clipster

Copy without Flash

## Getting Started
Download the [production version][min] or the [development version][max].

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
