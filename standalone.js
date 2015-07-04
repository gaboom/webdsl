var wait = require('wait.for');
var selenium = require('selenium-standalone');

function start() {
	selenium.start({
	}, function (err, server) {
		console.log("Server started: ", err);
	});
}

wait.launchFiber(start);