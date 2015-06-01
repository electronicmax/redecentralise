/* jshint undef: true, strict:false, trailing:false, unused:false, quotmark:false */
/* global require, exports, console, process, module, L, angular, _, jQuery, FastClick, device, document, window, setTimeout */

var DEPENDENCIES = ['ui.router', 'ngAnimate', 'ngTouch', 'ngSanitize'];	

angular.module('peertest', DEPENDENCIES) 
	.controller('main', function($scope, $rootScope) { 
		var peer = new Peer({host: 'localhost', port: 9000, path: '/'});
		peer.on('open', function(id) {
		  console.log('My peer ID is: ' + id);
		});
		peer.on('connection', function(conn) {
			window.conn = conn;
			console.log('got connection! ', conn);
			conn.on('data', function(d) { 
				console.log('blurb! ', d);
				conn.send(d);
			});
		});

		window.peer = peer;
	});

