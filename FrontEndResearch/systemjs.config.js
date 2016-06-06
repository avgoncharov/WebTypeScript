(function (global) {

	// map tells the System loader where to look for things
	var map = {
		'@angular': 'libs/@angular',
		'angular2-cookie/core': 'libs',
	};

	// packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		AppScripts: {
			main: 'main.js',
			defaultExtension: 'js'
		},
		components: {
			main: 'main.js',
			defaultExtension: 'js'
		},
		services: {
			main: 'main.js',
			defaultExtension: 'js'
		},
		utils: {
			main: 'main.js',
			defaultExtension: 'js'
		},
		//'app/utils/http-client': {
		//	main: 'index.js',
		//},
		//'app/services/auth': {
		//	main: 'index.js',
		//},
		//'app/services/search': {
		//	main: 'index.js',
		//},
		//'app/components/base': {
		//	main: 'index.js'
		//},
		//'app/components/search': {
		//	main: 'index.js'
		//},
		//'app/components/promo': {
		//	main: 'index.js'
		//},
		//'angular2-cookie/core': {
		//	main: 'angular2-cookie.js'
		//},
	};

	var angularPackageNames = [
		'common',
		'compiler',
		'core',
		'http',
		'platform-browser',
		'platform-browser-dynamic',
		'router',
		'router-deprecated',
		'testing',
		'upgrade',
	];

	// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
	angularPackageNames.forEach(function (pkgName) {
		packages['@angular/' + pkgName] = {
			main: pkgName + '.umd.js',
			defaultExtension: 'js'
		};
	});

	var config = {
		map: map,
		packages: packages
	}

	// filterSystemConfig - index.html's chance to modify config before we register it.
	if (global.filterSystemConfig) {
		global.filterSystemConfig(config);
	}

	System.config(config);

})(this);
