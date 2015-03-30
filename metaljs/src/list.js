'use strict'

import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
import SoyComponent from 'metaljs/src/soy/SoyComponent';

import './list.soy';

class List extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}

	handleClick() {
		console.log('metaljs click');
	}
}

List.ATTRS = {
	items: {
		value: []
	}
};

ComponentRegistry.register('List', List);

export default List;