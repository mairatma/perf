'use strict'

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './NestedListItem.soy';

class NestedListItem extends SoyComponent {}
ComponentRegistry.register('NestedListItem', NestedListItem);

export default NestedListItem;
