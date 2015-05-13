/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from deeplyNestedListItemContent.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.DeeplyNestedListItemContent.
 * @hassoydeltemplate {DeeplyNestedListItemContent}
 * @hassoydeltemplate {DeeplyNestedListItemContent.text}
 * @hassoydelcall {DeeplyNestedListItemContent}
 * @hassoydelcall {DeeplyNestedListItemContent.text}
 */

if (typeof Templates.DeeplyNestedListItemContent == 'undefined') { Templates.DeeplyNestedListItemContent = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItemContent.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent.text'), '', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItemContent.content.soyTemplateName = 'Templates.DeeplyNestedListItemContent.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItemContent.text = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(opt_data.text));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItemContent.text.soyTemplateName = 'Templates.DeeplyNestedListItemContent.text';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItemContent.__deltemplate_s115_5ea078b6 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<span id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</span>');
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItemContent.__deltemplate_s115_5ea078b6.soyTemplateName = 'Templates.DeeplyNestedListItemContent.__deltemplate_s115_5ea078b6';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent'), 'element', 0, Templates.DeeplyNestedListItemContent.__deltemplate_s115_5ea078b6);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItemContent.__deltemplate_s123_09caa2a1 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<span id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-text">' + soy.$$escapeHtml(opt_data.elementContent) + '</span>');
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItemContent.__deltemplate_s123_09caa2a1.soyTemplateName = 'Templates.DeeplyNestedListItemContent.__deltemplate_s123_09caa2a1';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent.text'), 'element', 0, Templates.DeeplyNestedListItemContent.__deltemplate_s123_09caa2a1);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItemContent.__deltemplate_s129_597ae112 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.DeeplyNestedListItemContent.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItemContent.__deltemplate_s129_597ae112.soyTemplateName = 'Templates.DeeplyNestedListItemContent.__deltemplate_s129_597ae112';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent'), '', 0, Templates.DeeplyNestedListItemContent.__deltemplate_s129_597ae112);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItemContent.__deltemplate_s135_99f5bb76 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent.text'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.DeeplyNestedListItemContent.text(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItemContent.__deltemplate_s135_99f5bb76.soyTemplateName = 'Templates.DeeplyNestedListItemContent.__deltemplate_s135_99f5bb76';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent.text'), '', 0, Templates.DeeplyNestedListItemContent.__deltemplate_s135_99f5bb76);

/* jshint ignore:end */
