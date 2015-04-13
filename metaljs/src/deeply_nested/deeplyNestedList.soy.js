/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from deeplyNestedList.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.DeeplyNestedList.
 * @hassoydeltemplate {ComponentTemplate}
 * @hassoydeltemplate {DeeplyNestedList}
 * @hassoydeltemplate {DeeplyNestedList.rows}
 * @hassoydelcall {DeeplyNestedList}
 * @hassoydelcall {DeeplyNestedList.rows}
 * @hassoydelcall {DeeplyNestedListItem}
 * @hassoydelcall {DeeplyNestedListItemContent}
 */

if (typeof Templates.DeeplyNestedList == 'undefined') { Templates.DeeplyNestedList = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedList.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedList.rows'), '', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedList.content.soyTemplateName = 'Templates.DeeplyNestedList.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedList.rows = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var indexLimit47 = opt_data.items.length;
  for (var index47 = 0; index47 < indexLimit47; index47++) {
    var itemIndex__soy48 = opt_data.inverted ? opt_data.items.length - index47 - 1 : index47;
    output += soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItem'), '', true)({children: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent'), '', true)({text: 'Item #', id: opt_data.id + '-itemPrefix' + itemIndex__soy48}, null, opt_ijData) + soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedListItemContent'), '', true)({text: opt_data.items[itemIndex__soy48], id: opt_data.id + '-itemLabel' + itemIndex__soy48}, null, opt_ijData)), id: opt_data.id + '-item' + itemIndex__soy48}, null, opt_ijData);
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.DeeplyNestedList.rows.soyTemplateName = 'Templates.DeeplyNestedList.rows';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedList.__deltemplate_s58_0f8b7ac8 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(Templates.SoyComponent.component(soy.$$augmentMap(opt_data, {componentName: 'DeeplyNestedList'}), null, opt_ijData)));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedList.__deltemplate_s58_0f8b7ac8.soyTemplateName = 'Templates.DeeplyNestedList.__deltemplate_s58_0f8b7ac8';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedList'), '', 0, Templates.DeeplyNestedList.__deltemplate_s58_0f8b7ac8);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedList.__deltemplate_s61_8c1e7708 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedList'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.DeeplyNestedList.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedList.__deltemplate_s61_8c1e7708.soyTemplateName = 'Templates.DeeplyNestedList.__deltemplate_s61_8c1e7708';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentTemplate'), 'DeeplyNestedList', 0, Templates.DeeplyNestedList.__deltemplate_s61_8c1e7708);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedList.__deltemplate_s67_18eefb75 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="deeplynestedlist component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.DeeplyNestedList.__deltemplate_s67_18eefb75.soyTemplateName = 'Templates.DeeplyNestedList.__deltemplate_s67_18eefb75';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedList'), 'element', 0, Templates.DeeplyNestedList.__deltemplate_s67_18eefb75);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedList.__deltemplate_s75_265b09b2 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-rows">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.DeeplyNestedList.__deltemplate_s75_265b09b2.soyTemplateName = 'Templates.DeeplyNestedList.__deltemplate_s75_265b09b2';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedList.rows'), 'element', 0, Templates.DeeplyNestedList.__deltemplate_s75_265b09b2);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.DeeplyNestedList.__deltemplate_s81_a7a9269d = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('DeeplyNestedList.rows'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ((! opt_ijData.skipSurfaceContents) ? soy.$$escapeHtml(Templates.SoyComponent.surface({content: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.DeeplyNestedList.rows(opt_data, null, opt_ijData)), id: opt_data.id + '-rows'}, null, opt_ijData)) : '')), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.DeeplyNestedList.__deltemplate_s81_a7a9269d.soyTemplateName = 'Templates.DeeplyNestedList.__deltemplate_s81_a7a9269d';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('DeeplyNestedList.rows'), '', 0, Templates.DeeplyNestedList.__deltemplate_s81_a7a9269d);

Templates.DeeplyNestedList.rows.params = ["id","items","inverted"];
/* jshint ignore:end */
