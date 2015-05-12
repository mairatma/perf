'use strict'

import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
import SoyComponent from 'metaljs/src/soy/SoyComponent';

import './deeplyNestedListItem.soy';

class DeeplyNestedListItem extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}
}

DeeplyNestedListItem.ATTRS = {
	children: {}
};

ComponentRegistry.register('DeeplyNestedListItem', DeeplyNestedListItem);

export default DeeplyNestedListItem;