'use strict'

import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
import SoyComponent from 'metaljs/src/soy/SoyComponent';

import './nestedSurfaceList.soy';

class NestedSurfaceList extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}

	handleClick() {
		console.log('metaljs click');
	}
}

NestedSurfaceList.ATTRS = {
	items: {
		value: []
	}
};

ComponentRegistry.register('NestedSurfaceList', NestedSurfaceList);

export default NestedSurfaceList;