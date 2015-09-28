'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './List.soy';

class List extends SoyComponent {}
ComponentRegistry.register('List', List);

export default List;
