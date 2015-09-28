'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	buildDest: 'build/metaljs',
	buildSrc: 'src/metaljs/**/*.js',
	bundleFileName: 'list.js',
	moduleName: 'metal-perf-list',
	soyDest: 'src/metaljs',
	soySrc: 'src/metaljs/**/*.soy'
});
