/* jshint ignore:start */
import ComponentRegistry from 'aui/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from nestedList.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.NestedList.
 * @hassoydeltemplate {ComponentElement}
 * @hassoydeltemplate {ComponentTemplate}
 * @hassoydeltemplate {NestedList}
 * @hassoydeltemplate {NestedList.rows}
 * @hassoydelcall {Component}
 * @hassoydelcall {ComponentElement}
 * @hassoydelcall {NestedList}
 * @hassoydelcall {NestedList.rows}
 * @hassoydelcall {NestedListItem}
 */

if (typeof Templates.NestedList == 'undefined') { Templates.NestedList = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), '', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedList.content.soyTemplateName = 'Templates.NestedList.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.rows = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var itemList45 = opt_data.items;
  var itemListLen45 = itemList45.length;
  for (var itemIndex45 = 0; itemIndex45 < itemListLen45; itemIndex45++) {
    var itemData45 = itemList45[itemIndex45];
    output += soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedListItem'), '', true)(soy.$$augmentMap(itemData45, {id: opt_data.id + '-item' + itemIndex45}), null, opt_ijData);
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.NestedList.rows.soyTemplateName = 'Templates.NestedList.rows';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s49_53d5ac21 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Component'), '', true)(soy.$$augmentMap(opt_data, {componentName: 'NestedList'}), null, opt_ijData)));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s49_53d5ac21.soyTemplateName = 'Templates.NestedList.__deltemplate_s49_53d5ac21';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList'), '', 0, Templates.NestedList.__deltemplate_s49_53d5ac21);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s52_7b42aa33 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('ComponentElement'), 'NestedList', true)(soy.$$augmentMap(opt_data, {elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ((opt_ijData.renderChildComponents) ? Templates.NestedList.content(opt_data, null, opt_ijData) : ''))}), null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s52_7b42aa33.soyTemplateName = 'Templates.NestedList.__deltemplate_s52_7b42aa33';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentTemplate'), 'NestedList', 0, Templates.NestedList.__deltemplate_s52_7b42aa33);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s58_473fc56f = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="nestedlist ' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s58_473fc56f.soyTemplateName = 'Templates.NestedList.__deltemplate_s58_473fc56f';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList'), 'element', 0, Templates.NestedList.__deltemplate_s58_473fc56f);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s66_def48899 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedList'), 'element', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s66_def48899.soyTemplateName = 'Templates.NestedList.__deltemplate_s66_def48899';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentElement'), 'NestedList', 0, Templates.NestedList.__deltemplate_s66_def48899);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s68_71fca2ab = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-rows">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s68_71fca2ab.soyTemplateName = 'Templates.NestedList.__deltemplate_s68_71fca2ab';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), 'element', 0, Templates.NestedList.__deltemplate_s68_71fca2ab);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s74_f2f6b9c5 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), 'element', true)(soy.$$augmentMap(opt_data, {elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ((opt_ijData.renderChildComponents) ? Templates.NestedList.rows(opt_data, null, opt_ijData) : ''))}), null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s74_f2f6b9c5.soyTemplateName = 'Templates.NestedList.__deltemplate_s74_f2f6b9c5';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), '', 0, Templates.NestedList.__deltemplate_s74_f2f6b9c5);

Templates.NestedList.rows.params = ["id","items"];
/* jshint ignore:end */
