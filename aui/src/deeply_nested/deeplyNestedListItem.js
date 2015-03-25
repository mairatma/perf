'use strict'

import ComponentRegistry from 'aui/component/ComponentRegistry';
import SoyComponent from 'aui/soy/SoyComponent';

import './deeplyNestedListItem.soy';

class DeeplyNestedListItem extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}
}

ComponentRegistry.register('DeeplyNestedListItem', DeeplyNestedListItem);

export default DeeplyNestedListItem;