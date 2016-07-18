/**
 * videojs-download-button
 * @version 0.1.0
 * @copyright 2016 Mikhail Khazov mikhail.khazov@gmail.com
 * @license MIT
 */
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