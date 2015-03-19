'use strict'

import ComponentRegistry from 'aui/component/ComponentRegistry';
import SoyComponent from 'aui/soy/SoyComponent';

import './nestedList.soy';

class NestedList extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}
}

NestedList.ATTRS = {
	items: {
		value: []
	}
};

ComponentRegistry.register('NestedList', NestedList);

export default NestedList;