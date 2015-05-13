/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from list.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.List.
 * @hassoydeltemplate {List}
 * @hassoydeltemplate {List.rows}
 * @hassoydelcall {List}
 * @hassoydelcall {List.rows}
 */

if (typeof Templates.List == 'undefined') { Templates.List = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('List.rows'), '', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.List.content.soyTemplateName = 'Templates.List.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.rows = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var itemList5 = opt_data.items;
  var itemListLen5 = itemList5.length;
  for (var itemIndex5 = 0; itemIndex5 < itemListLen5; itemIndex5++) {
    var itemData5 = itemList5[itemIndex5];
    output += '<div class="row" data-onclick="handleClick"><div class="col-md-12"><span>' + soy.$$escapeHtml(itemData5) + '</span></div></div>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.List.rows.soyTemplateName = 'Templates.List.rows';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.__deltemplate_s10_88d36183 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('List'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.List.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.List.__deltemplate_s10_88d36183.soyTemplateName = 'Templates.List.__deltemplate_s10_88d36183';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('List'), '', 0, Templates.List.__deltemplate_s10_88d36183);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.__deltemplate_s16_4ac84340 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="list component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.List.__deltemplate_s16_4ac84340.soyTemplateName = 'Templates.List.__deltemplate_s16_4ac84340';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('List'), 'element', 0, Templates.List.__deltemplate_s16_4ac84340);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.__deltemplate_s24_cb520c3e = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var elementId__soy25 = opt_data.id + '-' + (opt_data.surfaceId ? opt_data.surfaceId : 'rows');
  output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy25) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.List.__deltemplate_s24_cb520c3e.soyTemplateName = 'Templates.List.__deltemplate_s24_cb520c3e';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('List.rows'), 'element', 0, Templates.List.__deltemplate_s24_cb520c3e);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.List.__deltemplate_s31_24a7c50c = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('List.rows'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.List.rows(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.List.__deltemplate_s31_24a7c50c.soyTemplateName = 'Templates.List.__deltemplate_s31_24a7c50c';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('List.rows'), '', 0, Templates.List.__deltemplate_s31_24a7c50c);

Templates.List.rows.params = ["items"];
/* jshint ignore:end */
