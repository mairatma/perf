'use strict'

import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
import SoyComponent from 'metaljs/src/soy/SoyComponent';

import './nestedList.soy';

class NestedList extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}
}

NestedList.ATTRS = {
	items: {
		value: []
	},
	inverted: {
		value: false
	}
};

ComponentRegistry.register('NestedList', NestedList);

export default NestedList;