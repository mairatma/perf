'use strict'

import ComponentRegistry from 'aui/component/ComponentRegistry';
import SoyComponent from 'aui/soy/SoyComponent';

import './deeplyNestedListItemContent.soy';

class DeeplyNestedListItemContent extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}
}

DeeplyNestedListItemContent.ATTRS = {
	text: {
		value: ''
	}
};

ComponentRegistry.register('DeeplyNestedListItemContent', DeeplyNestedListItemContent);

export default DeeplyNestedListItemContent;