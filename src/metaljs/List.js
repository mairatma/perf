'use strict';

import ComponentRegistry from 'metaljs/src/component/ComponentRegistry';
import SoyComponent from 'metaljs/src/soy/SoyComponent';
import './List.soy';

class List extends SoyComponent {}
ComponentRegistry.register('List', List);

export default List;
