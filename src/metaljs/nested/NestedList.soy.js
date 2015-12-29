/* jshint ignore:start */
import Component from 'bower:metal/src/component/Component';
import SoyAop from 'bower:metal/src/soy/SoyAop';
import SoyRenderer from 'bower:metal/src/soy/SoyRenderer';
import SoyTemplates from 'bower:metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
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
Templates.NestedList.render = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '">';
  var itemList32 = opt_data.items;
  var itemListLen32 = itemList32.length;
  for (var itemIndex32 = 0; itemIndex32 < itemListLen32; itemIndex32++) {
    var itemData32 = itemList32[itemIndex32];
    output += Templates.NestedListItem.render({id: opt_data.id + '-item' + itemIndex32, text: itemData32}, null, opt_ijData);
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.NestedList.render.soyTemplateName = 'Templates.NestedList.render';
}

Templates.NestedList.render.params = ["id","items"];

class NestedList extends Component {}
NestedList.RENDERER = SoyRenderer;
SoyAop.registerTemplates('NestedList');
export default NestedList;
/* jshint ignore:end */
