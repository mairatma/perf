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
  var indexLimit43 = opt_data.items.length;
  for (var index43 = 0; index43 < indexLimit43; index43++) {
    var itemIndex__soy44 = opt_data.inverted ? opt_data.items.length - index43 - 1 : index43;
    output += soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedListItem'), '', true)(soy.$$augmentMap(opt_data.items[itemIndex__soy44], {id: opt_data.id + '-item' + itemIndex__soy44}), null, opt_ijData);
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
Templates.NestedList.__deltemplate_s47_53d5ac21 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('Component'), '', true)(soy.$$augmentMap(opt_data, {componentName: 'NestedList'}), null, opt_ijData)));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s47_53d5ac21.soyTemplateName = 'Templates.NestedList.__deltemplate_s47_53d5ac21';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList'), '', 0, Templates.NestedList.__deltemplate_s47_53d5ac21);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s50_7b42aa33 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('ComponentElement'), 'NestedList', true)(soy.$$augmentMap(opt_data, {elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.NestedList.content(opt_data, null, opt_ijData))}), null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s50_7b42aa33.soyTemplateName = 'Templates.NestedList.__deltemplate_s50_7b42aa33';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentTemplate'), 'NestedList', 0, Templates.NestedList.__deltemplate_s50_7b42aa33);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s54_473fc56f = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="nestedlist' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s54_473fc56f.soyTemplateName = 'Templates.NestedList.__deltemplate_s54_473fc56f';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList'), 'element', 0, Templates.NestedList.__deltemplate_s54_473fc56f);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s62_def48899 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedList'), 'element', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s62_def48899.soyTemplateName = 'Templates.NestedList.__deltemplate_s62_def48899';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('ComponentElement'), 'NestedList', 0, Templates.NestedList.__deltemplate_s62_def48899);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s64_71fca2ab = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-rows">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s64_71fca2ab.soyTemplateName = 'Templates.NestedList.__deltemplate_s64_71fca2ab';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), 'element', 0, Templates.NestedList.__deltemplate_s64_71fca2ab);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s70_f2f6b9c5 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), 'element', true)(soy.$$augmentMap(opt_data, {elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ((! opt_ijData.skipSurfaceContents) ? Templates.NestedList.rows(opt_data, null, opt_ijData) : ''))}), null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s70_f2f6b9c5.soyTemplateName = 'Templates.NestedList.__deltemplate_s70_f2f6b9c5';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), '', 0, Templates.NestedList.__deltemplate_s70_f2f6b9c5);

Templates.NestedList.rows.params = ["id","items","inverted"];
/* jshint ignore:end */
