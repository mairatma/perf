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
Templates.NestedListItem.__deltemplate_s208_c07ea9a1 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedListItem'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedListItem'), 'content', true)(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedListItem.__deltemplate_s208_c07ea9a1.soyTemplateName = 'Templates.NestedListItem.__deltemplate_s208_c07ea9a1';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedListItem'), '', 0, Templates.NestedListItem.__deltemplate_s208_c07ea9a1);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedListItem.__deltemplate_s214_f6de8074 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Templates.NestedListItem.content(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedListItem.__deltemplate_s214_f6de8074.soyTemplateName = 'Templates.NestedListItem.__deltemplate_s214_f6de8074';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedListItem'), 'content', 0, Templates.NestedListItem.__deltemplate_s214_f6de8074);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedListItem.__deltemplate_s216_01d1e9dd = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="nestedlistitem component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.NestedListItem.__deltemplate_s216_01d1e9dd.soyTemplateName = 'Templates.NestedListItem.__deltemplate_s216_01d1e9dd';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedListItem'), 'element', 0, Templates.NestedListItem.__deltemplate_s216_01d1e9dd);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedListItem.__deltemplate_s224_ac1d7149 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-label">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.NestedListItem.__deltemplate_s224_ac1d7149.soyTemplateName = 'Templates.NestedListItem.__deltemplate_s224_ac1d7149';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedListItem.label'), 'element', 0, Templates.NestedListItem.__deltemplate_s224_ac1d7149);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedListItem.__deltemplate_s230_ac2cc419 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedListItem.label'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ((! opt_ijData.skipSurfaceContents) ? soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedListItem.label'), 'content', true)(opt_data, null, opt_ijData) : '')), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedListItem.__deltemplate_s230_ac2cc419.soyTemplateName = 'Templates.NestedListItem.__deltemplate_s230_ac2cc419';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedListItem.label'), '', 0, Templates.NestedListItem.__deltemplate_s230_ac2cc419);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedListItem.__deltemplate_s237_453b37a7 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Templates.NestedListItem.label(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedListItem.__deltemplate_s237_453b37a7.soyTemplateName = 'Templates.NestedListItem.__deltemplate_s237_453b37a7';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedListItem.label'), 'content', 0, Templates.NestedListItem.__deltemplate_s237_453b37a7);

Templates.NestedListItem.label.params = ["label"];
/* jshint ignore:end */
