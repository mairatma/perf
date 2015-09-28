'use strict'

import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
import SoyComponent from 'metaljs/src/soy/SoyComponent';
import './NestedListItem.soy';

class NestedListItem extends SoyComponent {}
ComponentRegistry.register('NestedListItem', NestedListItem);

export default NestedListItem;
