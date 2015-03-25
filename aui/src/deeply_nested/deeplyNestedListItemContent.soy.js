/* jshint ignore:start */
import ComponentRegistry from 'aui/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from deeplyNestedListItemContent.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.DeeplyNestedListItemContent.
 * @hassoydeltemplate {ComponentElement}
 * @hassoydeltemplate {ComponentTemplate}
 * @hassoydeltemplate {DeeplyNestedListItemContent}
 * @hassoydeltemplate {DeeplyNestedListItemContent.text}
 * @hassoydelcall {Component}
 * @hassoydelcall {ComponentElement}
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
Templates.DeeplyNestedListItemContent.__deltemplate_s110_5ea078b6 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<span id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</span>');
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItemContent.__deltemplate_s110_5ea078b6.soyTemplateName = 'Templates.DeeplyNestedListItemContent.__deltemplate_s110_5ea078b6';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent'), 'element', 0, Templates.DeeplyNestedListItemContent.__deltemplate_s110_5ea078b6);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItemContent.__deltemplate_s118_09caa2a1 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<span id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-text">' + soy.$$escapeHtml(opt_data.elementContent) + '</span>');
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItemContent.__deltemplate_s118_09caa2a1.soyTemplateName = 'Templates.DeeplyNestedListItemContent.__deltemplate_s118_09caa2a1';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent.text'), 'element', 0, Templates.DeeplyNestedListItemContent.__deltemplate_s118_09caa2a1);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItemContent.__deltemplate_s124_597ae112 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Component'), '', true)(soy.$$augmentMap(opt_data, {componentName: 'DeeplyNestedListItemContent'}), null, opt_ijData)));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItemContent.__deltemplate_s124_597ae112.soyTemplateName = 'Templates.DeeplyNestedListItemContent.__deltemplate_s124_597ae112';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent'), '', 0, Templates.DeeplyNestedListItemContent.__deltemplate_s124_597ae112);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItemContent.__deltemplate_s127_49d81640 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('ComponentElement'), 'DeeplyNestedListItemContent', true)(soy.$$augmentMap(opt_data, {elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.DeeplyNestedListItemContent.content(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItemContent.__deltemplate_s127_49d81640.soyTemplateName = 'Templates.DeeplyNestedListItemContent.__deltemplate_s127_49d81640';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentTemplate'), 'DeeplyNestedListItemContent', 0, Templates.DeeplyNestedListItemContent.__deltemplate_s127_49d81640);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItemContent.__deltemplate_s131_eb247147 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent'), 'element', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItemContent.__deltemplate_s131_eb247147.soyTemplateName = 'Templates.DeeplyNestedListItemContent.__deltemplate_s131_eb247147';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentElement'), 'DeeplyNestedListItemContent', 0, Templates.DeeplyNestedListItemContent.__deltemplate_s131_eb247147);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItemContent.__deltemplate_s133_99f5bb76 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent.text'), 'element', true)(soy.$$augmentMap(opt_data, {elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ((! opt_ijData.skipSurfaceContents) ? Templates.DeeplyNestedListItemContent.text(opt_data, null, opt_ijData) : ''))}), null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItemContent.__deltemplate_s133_99f5bb76.soyTemplateName = 'Templates.DeeplyNestedListItemContent.__deltemplate_s133_99f5bb76';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent.text'), '', 0, Templates.DeeplyNestedListItemContent.__deltemplate_s133_99f5bb76);

Templates.DeeplyNestedListItemContent.text.params = ["text"];
/* jshint ignore:end */
