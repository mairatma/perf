/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from deeplyNestedListItem.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.DeeplyNestedListItem.
 * @hassoydeltemplate {ComponentElement}
 * @hassoydeltemplate {ComponentTemplate}
 * @hassoydeltemplate {DeeplyNestedListItem}
 * @hassoydelcall {Component}
 * @hassoydelcall {ComponentChildren}
 * @hassoydelcall {ComponentElement}
 * @hassoydelcall {DeeplyNestedListItem}
 */

if (typeof Templates.DeeplyNestedListItem == 'undefined') { Templates.DeeplyNestedListItem = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItem.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="row"><div class="col-md-12">' + soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('ComponentChildren'), '', true)(opt_data, null, opt_ijData)) + '</div></div>');
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.content.soyTemplateName = 'Templates.DeeplyNestedListItem.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItem.__deltemplate_s94_97c5d38d = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Component'), '', true)(soy.$$augmentMap(opt_data, {componentName: 'DeeplyNestedListItem'}), null, opt_ijData)));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s94_97c5d38d.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s94_97c5d38d';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), '', 0, Templates.DeeplyNestedListItem.__deltemplate_s94_97c5d38d);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItem.__deltemplate_s97_397653ff = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('ComponentElement'), 'DeeplyNestedListItem', true)(soy.$$augmentMap(opt_data, {elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.DeeplyNestedListItem.content(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s97_397653ff.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s97_397653ff';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentTemplate'), 'DeeplyNestedListItem', 0, Templates.DeeplyNestedListItem.__deltemplate_s97_397653ff);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItem.__deltemplate_s101_95722504 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), 'element', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s101_95722504.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s101_95722504';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentElement'), 'DeeplyNestedListItem', 0, Templates.DeeplyNestedListItem.__deltemplate_s101_95722504);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItem.__deltemplate_s103_011b2482 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="deeplynestedlistitem component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s103_011b2482.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s103_011b2482';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), 'element', 0, Templates.DeeplyNestedListItem.__deltemplate_s103_011b2482);

/* jshint ignore:end */
