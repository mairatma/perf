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
		var element = document.createElement('div');
		element.className = 'testCase';
		element.innerHTML = '<button class="btn btn-primary">Run: ' + this.testCases_[i].name + '</button>' +
			'<span class="runTime"></span><div class="testContainer"></div>';
		document.body.appendChild(element);

		element.querySelector('button').addEventListener('click', this.runTest.bind(this, this.testCases_[i], element));
		this.testCases_[i].setUp && this.testCases_[i].setUp(element, this.data_);
	}
};

TestExecuter.prototype.runTest = function(testCase, element) {
	var timeElement = element.querySelector('.runTime');
	timeElement.innerHTML = 'Running...';

	var initialTime = Date.now();
	testCase.test(element, this.data_, function() {
		timeElement.innerHTML = (Date.now() - initialTime) + 'ms';
	});
};
