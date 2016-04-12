/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from NestedListItem.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace NestedListItem.
 * @public
 */

goog.module('NestedListItem.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'row');
    ie_open('div', null, null,
        'class', 'col-md-12');
      ie_open('span');
        itext((goog.asserts.assert((opt_data.text) != null), opt_data.text));
      ie_close('span');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'NestedListItem.render';
}

exports.render.params = ["text"];
exports.render.types = {"text":"any"};
templates = exports;
return exports;

});

class NestedListItem extends Component {}
Soy.register(NestedListItem, templates);
export default templates;
export { NestedListItem, templates };
/* jshint ignore:end */
