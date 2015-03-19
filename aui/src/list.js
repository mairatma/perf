'use strinct'

import ComponentRegistry from 'aui/component/ComponentRegistry';
import SoyComponent from 'aui/soy/SoyComponent';

import './list.soy';

class List extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}
}

List.ATTRS = {
	items: {
		value: []
	}
};

ComponentRegistry.register('List', List);

export default List;