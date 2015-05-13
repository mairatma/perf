/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from nestedListItem.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.NestedListItem.
 * @hassoydeltemplate {NestedListItem}
 * @hassoydeltemplate {NestedListItem.label}
 * @hassoydelcall {NestedListItem}
 * @hassoydelcall {NestedListItem.label}
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
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="row"><div class="col-md-12"><span>' + soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedListItem.label'), '', true)(opt_data, null, opt_ijData) + '</span></div></div>');
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
Templates.NestedListItem.label = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(opt_data.label));
};
if (goog.DEBUG) {
  Templates.NestedListItem.label.soyTemplateName = 'Templates.NestedListItem.label';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedListItem.__deltemplate_s182_c07ea9a1 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedListItem'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.NestedListItem.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedListItem.__deltemplate_s182_c07ea9a1.soyTemplateName = 'Templates.NestedListItem.__deltemplate_s182_c07ea9a1';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedListItem'), '', 0, Templates.NestedListItem.__deltemplate_s182_c07ea9a1);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedListItem.__deltemplate_s188_01d1e9dd = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="nestedlistitem component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.NestedListItem.__deltemplate_s188_01d1e9dd.soyTemplateName = 'Templates.NestedListItem.__deltemplate_s188_01d1e9dd';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedListItem'), 'element', 0, Templates.NestedListItem.__deltemplate_s188_01d1e9dd);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedListItem.__deltemplate_s196_ac1d7149 = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var elementId__soy197 = opt_data.id + '-' + (opt_data.surfaceId ? opt_data.surfaceId : 'label');
  output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy197) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.NestedListItem.__deltemplate_s196_ac1d7149.soyTemplateName = 'Templates.NestedListItem.__deltemplate_s196_ac1d7149';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedListItem.label'), 'element', 0, Templates.NestedListItem.__deltemplate_s196_ac1d7149);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedListItem.__deltemplate_s203_ac2cc419 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedListItem.label'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.NestedListItem.label(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedListItem.__deltemplate_s203_ac2cc419.soyTemplateName = 'Templates.NestedListItem.__deltemplate_s203_ac2cc419';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedListItem.label'), '', 0, Templates.NestedListItem.__deltemplate_s203_ac2cc419);

Templates.NestedListItem.label.params = ["label"];
/* jshint ignore:end */
