(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojsDownloadButton = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

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
downloadButton.VERSION = '0.1.0';

exports['default'] = downloadButton;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWtoYXpvdi9wcm9qZWN0cy92aWRlb2pzLWRvd25sb2FkLWJ1dHRvbi9zcmMvcGx1Z2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O3VCQ0FvQixVQUFVOzs7O0FBQzlCLElBQU0sa0JBQWtCLEdBQUcscUJBQVEsWUFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUM7OztBQUd0RSxJQUFNLFFBQVEsR0FBRztBQUNmLE1BQUksRUFBRSxVQUFVO0NBQ2pCLENBQUM7Ozs7OztBQU1GLElBQU0sYUFBYSxHQUFHLFNBQWhCLGFBQWEsR0FBUztBQUMxQiwwQ0FBc0Msa0JBQWtCLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFHO0NBQ3RGLENBQUM7Ozs7Ozs7OztBQVNGLElBQU0sYUFBYSxHQUFHLFNBQWhCLGFBQWEsQ0FBSSxNQUFNLEVBQUUsT0FBTyxFQUFLO0FBQ3pDLFFBQU0sQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7QUFFdkMsTUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0FBQ3ZFLFFBQUksU0FBUyxHQUFHO0FBQ2QsZUFBUyxFQUFFLGFBQWEsRUFBRTtBQUMxQixVQUFJLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRTtBQUN6QixXQUFLLEVBQUUsT0FBTyxDQUFDLElBQUk7QUFDbkIsY0FBUSxFQUFFLEVBQUU7S0FDYixDQUFDO0FBQ0YsUUFBSSxTQUFTLEdBQUc7QUFDZCxpQkFBVyxFQUFFLFFBQVE7QUFDckIsa0JBQVksRUFBRSxPQUFPLENBQUMsSUFBSTtLQUMzQixDQUFDOztBQUVGLFVBQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLFlBQU87QUFDdEQsUUFBRSxFQUFFLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7S0FDckUsQ0FBQyxDQUFDLENBQUM7R0FDTDtDQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBY0YsSUFBTSxjQUFjLEdBQUcsU0FBakIsY0FBYyxDQUFZLE9BQU8sRUFBRTs7O0FBQ3ZDLE1BQUksQ0FBQyxLQUFLLENBQUMsWUFBTTtBQUNmLGlCQUFhLFFBQU8scUJBQVEsWUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0dBQzlELENBQUMsQ0FBQztDQUNKLENBQUM7OztBQUdGLHFCQUFRLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQzs7O0FBR2pELGNBQWMsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDOztxQkFFeEIsY0FBYyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgdmlkZW9qcyBmcm9tICd2aWRlby5qcyc7XG5jb25zdCBDbGlja2FibGVDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ2xpY2thYmxlQ29tcG9uZW50Jyk7XG5cbi8vIERlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIHBsdWdpbi5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICB0ZXh0OiAnRG93bmxvYWQnXG59O1xuXG4vKipcbiAqIFN0YWNrIENTUyBjbGFzcyBuYW1lcy5cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuY29uc3QgYnVpbGRDU1NDbGFzcyA9ICgpID0+IHtcbiAgcmV0dXJuIGB2anMtZG93bmxvYWQtYnV0dG9uLWNvbnRyb2wgJHtDbGlja2FibGVDb21wb25lbnQucHJvdG90eXBlLmJ1aWxkQ1NTQ2xhc3MoKX1gO1xufTtcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgcGxheWVyIGlzIHJlYWR5LlxuICpcbiAqIEBmdW5jdGlvbiBvblBsYXllclJlYWR5XG4gKiBAcGFyYW0gICAge1BsYXllcn0gcGxheWVyXG4gKiBAcGFyYW0gICAge09iamVjdH0gW29wdGlvbnM9e31dXG4gKi9cbmNvbnN0IG9uUGxheWVyUmVhZHkgPSAocGxheWVyLCBvcHRpb25zKSA9PiB7XG4gIHBsYXllci5hZGRDbGFzcygndmpzLWRvd25sb2FkLWJ1dHRvbicpO1xuXG4gIGlmICghcGxheWVyLmNvbnRyb2xCYXIuY2hpbGROYW1lSW5kZXhfLmhhc093blByb3BlcnR5KCdEb3dubG9hZEJ1dHRvbicpKSB7XG4gICAgbGV0IGxpbmtQcm9wcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogYnVpbGRDU1NDbGFzcygpLFxuICAgICAgaHJlZjogcGxheWVyLmN1cnJlbnRTcmMoKSxcbiAgICAgIHRpdGxlOiBvcHRpb25zLnRleHQsXG4gICAgICBkb3dubG9hZDogJydcbiAgICB9O1xuICAgIGxldCBsaW5rQXR0cnMgPSB7XG4gICAgICAnYXJpYS1saXZlJzogJ3BvbGl0ZScsXG4gICAgICAnYXJpYS1sYWJlbCc6IG9wdGlvbnMudGV4dFxuICAgIH07XG5cbiAgICBwbGF5ZXIuY29udHJvbEJhci5hZGRDaGlsZChuZXcgQ2xpY2thYmxlQ29tcG9uZW50KHRoaXMsIHtcbiAgICAgIGVsOiBDbGlja2FibGVDb21wb25lbnQucHJvdG90eXBlLmNyZWF0ZUVsKCdhJywgbGlua1Byb3BzLCBsaW5rQXR0cnMpXG4gICAgfSkpO1xuICB9XG59O1xuXG4vKipcbiAqIEEgdmlkZW8uanMgcGx1Z2luLlxuICpcbiAqIEluIHRoZSBwbHVnaW4gZnVuY3Rpb24sIHRoZSB2YWx1ZSBvZiBgdGhpc2AgaXMgYSB2aWRlby5qcyBgUGxheWVyYFxuICogaW5zdGFuY2UuIFlvdSBjYW5ub3QgcmVseSBvbiB0aGUgcGxheWVyIGJlaW5nIGluIGEgXCJyZWFkeVwiIHN0YXRlIGhlcmUsXG4gKiBkZXBlbmRpbmcgb24gaG93IHRoZSBwbHVnaW4gaXMgaW52b2tlZC4gVGhpcyBtYXkgb3IgbWF5IG5vdCBiZSBpbXBvcnRhbnRcbiAqIHRvIHlvdTsgaWYgbm90LCByZW1vdmUgdGhlIHdhaXQgZm9yIFwicmVhZHlcIiFcbiAqXG4gKiBAZnVuY3Rpb24gZG93bmxvYWRCdXR0b25cbiAqIEBwYXJhbSAgICB7T2JqZWN0fSBbb3B0aW9ucz17fV1cbiAqICAgICAgICAgICBBbiBvYmplY3Qgb2Ygb3B0aW9ucyBsZWZ0IHRvIHRoZSBwbHVnaW4gYXV0aG9yIHRvIGRlZmluZS5cbiAqL1xuY29uc3QgZG93bmxvYWRCdXR0b24gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHRoaXMucmVhZHkoKCkgPT4ge1xuICAgIG9uUGxheWVyUmVhZHkodGhpcywgdmlkZW9qcy5tZXJnZU9wdGlvbnMoZGVmYXVsdHMsIG9wdGlvbnMpKTtcbiAgfSk7XG59O1xuXG4vLyBSZWdpc3RlciB0aGUgcGx1Z2luIHdpdGggdmlkZW8uanMuXG52aWRlb2pzLnBsdWdpbignZG93bmxvYWRCdXR0b24nLCBkb3dubG9hZEJ1dHRvbik7XG5cbi8vIEluY2x1ZGUgdGhlIHZlcnNpb24gbnVtYmVyLlxuZG93bmxvYWRCdXR0b24uVkVSU0lPTiA9ICdfX1ZFUlNJT05fXyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRvd25sb2FkQnV0dG9uO1xuIl19
