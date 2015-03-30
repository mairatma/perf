'use strict'

import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
import SoyComponent from 'metaljs/src/soy/SoyComponent';

import './nestedListItem.soy';

class NestedListItem extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}
}

NestedListItem.ATTRS = {
	label: {
		value: ''
	}
};

ComponentRegistry.register('NestedListItem', NestedListItem);

export default NestedListItem;