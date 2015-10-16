/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from List.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.List.
 */

if (typeof Templates.List == 'undefined') { Templates.List = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="component">' + Templates.List.items(opt_data, null, opt_ijData) + '</div>');
};
if (goog.DEBUG) {
  Templates.List.content.soyTemplateName = 'Templates.List.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.items = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-items">';
  var itemList12 = opt_data.items;
  var itemListLen12 = itemList12.length;
  for (var itemIndex12 = 0; itemIndex12 < itemListLen12; itemIndex12++) {
    var itemData12 = itemList12[itemIndex12];
    output += '<div class="row"><div class="col-md-12">' + Templates.List.item({id: opt_data.id, surfaceElementId: opt_data.id + '-item' + itemIndex12, text: itemData12}, null, opt_ijData) + '</div></div>';
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.List.items.soyTemplateName = 'Templates.List.items';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.item = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<span id="' + soy.$$escapeHtmlAttribute(opt_data.surfaceElementId) + '">' + soy.$$escapeHtml(opt_data.text) + '</span>');
};
if (goog.DEBUG) {
  Templates.List.item.soyTemplateName = 'Templates.List.item';
}

Templates.List.content.params = ["id"];
Templates.List.items.params = ["id","items"];
Templates.List.item.params = ["surfaceElementId","text"];
export default Templates.List;
/* jshint ignore:end */
