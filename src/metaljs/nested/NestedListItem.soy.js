/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from NestedListItem.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.NestedListItem.
 */

if (typeof Templates.NestedListItem == 'undefined') { Templates.NestedListItem = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedListItem.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="row"><div class="col-md-12">' + Templates.NestedListItem.text(opt_data, null, opt_ijData) + '</div></div>');
};
if (goog.DEBUG) {
  Templates.NestedListItem.content.soyTemplateName = 'Templates.NestedListItem.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedListItem.text = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<span id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-text">' + soy.$$escapeHtml(opt_data.text) + '</span>');
};
if (goog.DEBUG) {
  Templates.NestedListItem.text.soyTemplateName = 'Templates.NestedListItem.text';
}

Templates.NestedListItem.content.params = ["id","text"];
Templates.NestedListItem.text.params = ["id","text"];
export default Templates.NestedListItem;
/* jshint ignore:end */
