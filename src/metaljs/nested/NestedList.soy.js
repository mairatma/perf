/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from NestedList.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace NestedList.
 * @public
 */

goog.module('NestedList.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('NestedListItem.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div');
    var itemList18 = opt_data.items;
    var itemListLen18 = itemList18.length;
    for (var itemIndex18 = 0; itemIndex18 < itemListLen18; itemIndex18++) {
      var itemData18 = itemList18[itemIndex18];
      $templateAlias1({key: 'item' + itemIndex18, text: itemData18}, null, opt_ijData);
    }
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'NestedList.render';
}

exports.render.params = ["items"];
templates = exports;
return exports;

});

class NestedList extends Component {}
Soy.register(NestedList, templates);
export default templates;
export { NestedList, templates };
/* jshint ignore:end */
