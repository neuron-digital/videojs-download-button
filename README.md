# videojs-download-button

Adds a download button to control bar

## Installation

```sh
npm install --save videojs-download-button
```

The npm installation is preferred, but Bower works, too.

```sh
bower install  --save videojs-download-button
```

## Usage

To include videojs-download-button on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-download-button.min.js"></script>
<script>
  var player = videojs('my-video');

  player.downloadButton();
</script>
```

### Browserify

When using with Browserify, install videojs-download-button via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-download-button');

var player = videojs('my-video');

player.downloadButton();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-download-button'], function(videojs) {
  var player = videojs('my-video');

  player.downloadButton();
});
```

## License

MIT. Copyright (c) Mikhail Khazov mikhail.khazov@gmail.com


[videojs]: http://videojs.com/
