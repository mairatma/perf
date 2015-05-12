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
  var indexLimit165 = opt_data.items.length;
  for (var index165 = 0; index165 < indexLimit165; index165++) {
    var itemIndex__soy166 = opt_data.inverted ? opt_data.items.length - index165 - 1 : index165;
    output += soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedListItem'), '', true)({id: opt_data.id + '-item' + itemIndex__soy166, label: opt_data.items[itemIndex__soy166].label}, null, opt_ijData);
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
Templates.NestedList.__deltemplate_s170_53d5ac21 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedList'), 'element', true)({elementClasses: opt_data.elementClasses, elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedList'), 'content', true)(opt_data, null, opt_ijData)), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s170_53d5ac21.soyTemplateName = 'Templates.NestedList.__deltemplate_s170_53d5ac21';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList'), '', 0, Templates.NestedList.__deltemplate_s170_53d5ac21);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s176_66e1cf61 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Templates.NestedList.content(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s176_66e1cf61.soyTemplateName = 'Templates.NestedList.__deltemplate_s176_66e1cf61';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList'), 'content', 0, Templates.NestedList.__deltemplate_s176_66e1cf61);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s178_473fc56f = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="nestedlist component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '" data-component="">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s178_473fc56f.soyTemplateName = 'Templates.NestedList.__deltemplate_s178_473fc56f';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList'), 'element', 0, Templates.NestedList.__deltemplate_s178_473fc56f);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s186_71fca2ab = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-rows">' + soy.$$escapeHtml(opt_data.elementContent) + '</div>');
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s186_71fca2ab.soyTemplateName = 'Templates.NestedList.__deltemplate_s186_71fca2ab';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), 'element', 0, Templates.NestedList.__deltemplate_s186_71fca2ab);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s192_f2f6b9c5 = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), 'element', true)({elementContent: soydata.VERY_UNSAFE.$$ordainSanitizedHtmlForInternalBlocks('' + ((! opt_ijData.skipSurfaceContents) ? soy.$$getDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), 'content', true)(opt_data, null, opt_ijData) : '')), id: opt_data.id}, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s192_f2f6b9c5.soyTemplateName = 'Templates.NestedList.__deltemplate_s192_f2f6b9c5';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), '', 0, Templates.NestedList.__deltemplate_s192_f2f6b9c5);


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.NestedList.__deltemplate_s199_7e61721e = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(Templates.NestedList.rows(opt_data, null, opt_ijData));
};
if (goog.DEBUG) {
  Templates.NestedList.__deltemplate_s199_7e61721e.soyTemplateName = 'Templates.NestedList.__deltemplate_s199_7e61721e';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('NestedList.rows'), 'content', 0, Templates.NestedList.__deltemplate_s199_7e61721e);

Templates.NestedList.rows.params = ["id","items","inverted"];
/* jshint ignore:end */
