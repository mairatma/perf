/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from NestedList.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.NestedList.
 */

if (typeof Templates.NestedList == 'undefined') { Templates.NestedList = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.content = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '">';
  var itemList34 = opt_data.items;
  var itemListLen34 = itemList34.length;
  for (var itemIndex34 = 0; itemIndex34 < itemListLen34; itemIndex34++) {
    var itemData34 = itemList34[itemIndex34];
    output += Templates.NestedListItem.content({id: opt_data.id + '-item' + itemIndex34, text: itemData34}, null, opt_ijData);
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.NestedList.content.soyTemplateName = 'Templates.NestedList.content';
}

Templates.NestedList.content.params = ["id","items"];
export default Templates.NestedList;
/* jshint ignore:end */
