'use strict';

var TestExecuter = function() {
	this.testCases_ = [];
};

TestExecuter.prototype.addTestCase = function(testCase) {
	this.testCases_.push(testCase);
};

TestExecuter.prototype.setCommonTestData = function(data) {
	this.data_ = data;
};

TestExecuter.prototype.start = function() {
	for (var i = 0; i < this.testCases_.length; i++) {
		var testCase = this.testCases_[i];

		var element = document.createElement('div');
		element.className = 'testCase';
		element.innerHTML = '<button class="btn btn-primary">Run: ' + testCase.name + '</button>' +
			'<span class="runTime"></span><div class="testContainer"></div>';
		document.body.appendChild(element);

		element.querySelector('button').addEventListener('click', this.runTest.bind(this, testCase, element));
		testCase.before && testCase.before(element.querySelector('.testContainer'), this.data_);
	}
};

TestExecuter.prototype.runTest = function(testCase, element) {
	var container = element.querySelector('.testContainer');
	testCase.beforeEach && testCase.beforeEach(container, this.data_);

	var timeElement = element.querySelector('.runTime');
	timeElement.innerHTML = 'Running...';

	var initialTime = Date.now();
	testCase.test(container, this.data_, function() {
		timeElement.innerHTML = (Date.now() - initialTime) + 'ms';
	});
};
