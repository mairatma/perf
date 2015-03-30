'use strict'

import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
import SoyComponent from 'metaljs/src/soy/SoyComponent';

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