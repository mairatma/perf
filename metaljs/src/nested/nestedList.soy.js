/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from nestedList.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.NestedList.
 * @hassoydeltemplate {NestedList}
 * @hassoydeltemplate {NestedList.rows}
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
  var indexLimit144 = opt_data.items.length;
  for (var index144 = 0; index144 < indexLimit144; index144++) {
    var itemIndex__soy145 = opt_data.inverted ? opt_data.items.length - index144 - 1 : index144;
    output += soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedListItem'), '', true)({id: opt_data.id + '-item' + itemIndex__soy145, label: opt_data.items[itemIndex__soy145].label}, null, opt_ijData);
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
Templates.NestedList.__deltemplate_s149_53d5ac21 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedList'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.NestedList.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s149_53d5ac21.soyTemplateName = 'Templates.NestedList.__deltemplate_s149_53d5ac21';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList'), '', 0, Templates.NestedList.__deltemplate_s149_53d5ac21);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s155_473fc56f = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="nestedlist component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s155_473fc56f.soyTemplateName = 'Templates.NestedList.__deltemplate_s155_473fc56f';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList'), 'element', 0, Templates.NestedList.__deltemplate_s155_473fc56f);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s163_71fca2ab = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var elementId__soy164 = opt_data.id + '-' + (opt_data.surfaceId ? opt_data.surfaceId : 'rows');
  output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy164) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s163_71fca2ab.soyTemplateName = 'Templates.NestedList.__deltemplate_s163_71fca2ab';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), 'element', 0, Templates.NestedList.__deltemplate_s163_71fca2ab);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s170_f2f6b9c5 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.NestedList.rows(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s170_f2f6b9c5.soyTemplateName = 'Templates.NestedList.__deltemplate_s170_f2f6b9c5';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), '', 0, Templates.NestedList.__deltemplate_s170_f2f6b9c5);

Templates.NestedList.rows.params = ["id","items","inverted"];
/* jshint ignore:end */
