/* jshint ignore:start */
import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from nestedSurfaceList.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.NestedSurfaceList.
 * @hassoydeltemplate {NestedSurfaceList}
 * @hassoydeltemplate {NestedSurfaceList.item}
 * @hassoydeltemplate {NestedSurfaceList.rows}
 * @hassoydelcall {NestedSurfaceList}
 * @hassoydelcall {NestedSurfaceList.item}
 * @hassoydelcall {NestedSurfaceList.rows}
 */

if (typeof Templates.NestedSurfaceList == 'undefined') { Templates.NestedSurfaceList = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedSurfaceList.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedSurfaceList.rows'), '', true)(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedSurfaceList.content.soyTemplateName = 'Templates.NestedSurfaceList.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedSurfaceList.rows = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var itemList212 = opt_data.items;
  var itemListLen212 = itemList212.length;
  for (var itemIndex212 = 0; itemIndex212 < itemListLen212; itemIndex212++) {
    var itemData212 = itemList212[itemIndex212];
    output += '<div class="row"><div class="col-md-12"><span>' + soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedSurfaceList.item'), '', true)({id: opt_data.id, text: itemData212}, null, opt_ijData) + '</span></div></div>';
  }
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.NestedSurfaceList.rows.soyTemplateName = 'Templates.NestedSurfaceList.rows';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedSurfaceList.item = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(opt_data.text));
};
if (goog.DEBUG) {
  Templates.NestedSurfaceList.item.soyTemplateName = 'Templates.NestedSurfaceList.item';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedSurfaceList.__deltemplate_s221_04590e26 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedSurfaceList'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.NestedSurfaceList.content(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedSurfaceList.__deltemplate_s221_04590e26.soyTemplateName = 'Templates.NestedSurfaceList.__deltemplate_s221_04590e26';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedSurfaceList'), '', 0, Templates.NestedSurfaceList.__deltemplate_s221_04590e26);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedSurfaceList.__deltemplate_s227_9bbdf607 = function(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="nestedsurfacelist component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.NestedSurfaceList.__deltemplate_s227_9bbdf607.soyTemplateName = 'Templates.NestedSurfaceList.__deltemplate_s227_9bbdf607';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedSurfaceList'), 'element', 0, Templates.NestedSurfaceList.__deltemplate_s227_9bbdf607);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedSurfaceList.__deltemplate_s235_6deaaddd = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var elementId__soy236 = opt_data.id + '-' + (opt_data.surfaceId ? opt_data.surfaceId : 'rows');
  output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy236) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.NestedSurfaceList.__deltemplate_s235_6deaaddd.soyTemplateName = 'Templates.NestedSurfaceList.__deltemplate_s235_6deaaddd';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedSurfaceList.rows'), 'element', 0, Templates.NestedSurfaceList.__deltemplate_s235_6deaaddd);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedSurfaceList.__deltemplate_s242_53c838f1 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedSurfaceList.rows'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.NestedSurfaceList.rows(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedSurfaceList.__deltemplate_s242_53c838f1.soyTemplateName = 'Templates.NestedSurfaceList.__deltemplate_s242_53c838f1';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedSurfaceList.rows'), '', 0, Templates.NestedSurfaceList.__deltemplate_s242_53c838f1);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedSurfaceList.__deltemplate_s247_3cf10f33 = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var elementId__soy248 = opt_data.id + '-' + (opt_data.surfaceId ? opt_data.surfaceId : 'item');
  output += '<div id="' + soy.$$escapeHtmlAttribute(elementId__soy248) + '">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.NestedSurfaceList.__deltemplate_s247_3cf10f33.soyTemplateName = 'Templates.NestedSurfaceList.__deltemplate_s247_3cf10f33';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedSurfaceList.item'), 'element', 0, Templates.NestedSurfaceList.__deltemplate_s247_3cf10f33);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedSurfaceList.__deltemplate_s254_44572827 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedSurfaceList.item'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + Templates.NestedSurfaceList.item(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedSurfaceList.__deltemplate_s254_44572827.soyTemplateName = 'Templates.NestedSurfaceList.__deltemplate_s254_44572827';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedSurfaceList.item'), '', 0, Templates.NestedSurfaceList.__deltemplate_s254_44572827);

Templates.NestedSurfaceList.rows.params = ["id","items"];
Templates.NestedSurfaceList.item.params = ["text"];
/* jshint ignore:end */
