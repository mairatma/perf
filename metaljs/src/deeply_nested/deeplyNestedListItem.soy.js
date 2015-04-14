/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from deeplyNestedListItem.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.DeeplyNestedListItem.
 * @hassoydeltemplate {ComponentTemplate}
 * @hassoydeltemplate {DeeplyNestedListItem}
 * @hassoydelcall {ComponentChildren}
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
Templates.DeeplyNestedListItem.__deltemplate_s96_97c5d38d = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(Templates.SoyComponent.component(soy.$$augmentMap(opt_data, {componentName: 'DeeplyNestedListItem'}), null, opt_ijData)));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s96_97c5d38d.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s96_97c5d38d';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), '', 0, Templates.DeeplyNestedListItem.__deltemplate_s96_97c5d38d);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItem.__deltemplate_s99_397653ff = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.DeeplyNestedListItem.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s99_397653ff.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s99_397653ff';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentTemplate'), 'DeeplyNestedListItem', 0, Templates.DeeplyNestedListItem.__deltemplate_s99_397653ff);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItem.__deltemplate_s105_011b2482 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="deeplynestedlistitem component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s105_011b2482.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s105_011b2482';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), 'element', 0, Templates.DeeplyNestedListItem.__deltemplate_s105_011b2482);

/* jshint ignore:end */
