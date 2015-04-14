/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from deeplyNestedListItem.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.DeeplyNestedListItem.
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
Templates.DeeplyNestedListItem.__deltemplate_s92_97c5d38d = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), 'content', true)(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s92_97c5d38d.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s92_97c5d38d';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), '', 0, Templates.DeeplyNestedListItem.__deltemplate_s92_97c5d38d);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItem.__deltemplate_s98_2eefa4ff = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Templates.DeeplyNestedListItem.content(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s98_2eefa4ff.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s98_2eefa4ff';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), 'content', 0, Templates.DeeplyNestedListItem.__deltemplate_s98_2eefa4ff);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItem.__deltemplate_s100_011b2482 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="deeplynestedlistitem component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s100_011b2482.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s100_011b2482';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), 'element', 0, Templates.DeeplyNestedListItem.__deltemplate_s100_011b2482);

/* jshint ignore:end */
