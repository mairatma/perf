'use strict'

import ComponentRegistry from 'aui/component/ComponentRegistry';
import NestedList from '../nested/nestedList';

import './deeplyNestedList.soy';

class DeeplyNestedList extends NestedList {
	constructor(opt_config) {
		super(opt_config);
	}
}

ComponentRegistry.register('DeeplyNestedList', DeeplyNestedList);

export default DeeplyNestedList;