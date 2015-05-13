/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from deeplyNestedListItem.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.DeeplyNestedListItem.
 * @hassoydeltemplate {DeeplyNestedListItem}
 * @hassoydeltemplate {DeeplyNestedListItem.children}
 * @hassoydelcall {DeeplyNestedListItem}
 * @hassoydelcall {DeeplyNestedListItem.children}
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
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="row"><div class="col-md-12">' + soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem.children'), '', true)(opt_data, null, opt_ijData) + '</div></div>');
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
Templates.DeeplyNestedListItem.children = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(opt_data.children));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.children.soyTemplateName = 'Templates.DeeplyNestedListItem.children';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItem.__deltemplate_s84_97c5d38d = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.DeeplyNestedListItem.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s84_97c5d38d.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s84_97c5d38d';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), '', 0, Templates.DeeplyNestedListItem.__deltemplate_s84_97c5d38d);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItem.__deltemplate_s90_011b2482 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="deeplynestedlistitem component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s90_011b2482.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s90_011b2482';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), 'element', 0, Templates.DeeplyNestedListItem.__deltemplate_s90_011b2482);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItem.__deltemplate_s98_ab62cb9b = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var elementId__soy99 = opt_data.id + '-' + (opt_data.surfaceId ? opt_data.surfaceId : 'children');
  output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy99) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s98_ab62cb9b.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s98_ab62cb9b';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem.children'), 'element', 0, Templates.DeeplyNestedListItem.__deltemplate_s98_ab62cb9b);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedListItem.__deltemplate_s105_ce5ef047 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem.children'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.DeeplyNestedListItem.children(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedListItem.__deltemplate_s105_ce5ef047.soyTemplateName = 'Templates.DeeplyNestedListItem.__deltemplate_s105_ce5ef047';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem.children'), '', 0, Templates.DeeplyNestedListItem.__deltemplate_s105_ce5ef047);

/* jshint ignore:end */
