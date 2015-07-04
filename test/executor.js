var webdriverio = require('webdriverio');

describe('hooks', function () {
	before(function () {
		options = {
			desiredCapabilities: {
				browserName: 'firefox'
			},
			host: 'localhost',
			port: 4444
		};
	});

	after(function () {
		// runs after all tests in this block
	});
	beforeEach(function () {
		// runs before each test in this block
	});
	afterEach(function () {
		// runs after each test in this block
	});

	it("google", function () {
		webdriverio
				.remote(options)
				.init()
				.url('http://www.google.com')
				.title(function (err, res) {
					console.log('Title was: ' + res.value);
				})
				.end();
	});
});