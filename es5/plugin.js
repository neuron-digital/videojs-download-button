'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _videoJs = require('video.js');

var _videoJs2 = _interopRequireDefault(_videoJs);

var ClickableComponent = _videoJs2['default'].getComponent('ClickableComponent');

// Default options for the plugin.
var defaults = {
  text: 'Download'
};

/**
 * Stack CSS class names.
 * @return {String}
 */
var buildCSSClass = function buildCSSClass() {
  return 'vjs-download-button-control ' + ClickableComponent.prototype.buildCSSClass();
};

/**
 * Function to invoke when the player is ready.
 *
 * @function onPlayerReady
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
var onPlayerReady = function onPlayerReady(player, options) {
  player.addClass('vjs-download-button');

  if (!player.controlBar.childNameIndex_.hasOwnProperty('DownloadButton')) {
    var linkProps = {
      className: buildCSSClass(),
      href: player.currentSrc(),
      title: options.text,
      download: ''
    };
    var linkAttrs = {
      'aria-live': 'polite',
      'aria-label': options.text
    };

    player.controlBar.addChild(new ClickableComponent(undefined, {
      el: ClickableComponent.prototype.createEl('a', linkProps, linkAttrs)
    }));
  }
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function downloadButton
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
var downloadButton = function downloadButton(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady(_this, _videoJs2['default'].mergeOptions(defaults, options));
  });
};

// Register the plugin with video.js.
_videoJs2['default'].plugin('downloadButton', downloadButton);

// Include the version number.
downloadButton.VERSION = '__VERSION__';

exports['default'] = downloadButton;
module.exports = exports['default'];