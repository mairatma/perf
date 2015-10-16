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
  var itemList32 = opt_data.items;
  var itemListLen32 = itemList32.length;
  for (var itemIndex32 = 0; itemIndex32 < itemListLen32; itemIndex32++) {
    var itemData32 = itemList32[itemIndex32];
    output += Templates.NestedListItem.content({id: opt_data.id + '-item' + itemIndex32, text: itemData32}, null, opt_ijData);
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
