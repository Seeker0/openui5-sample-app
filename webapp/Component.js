sap.ui.define(['sap/ui/core/UIComponent'], function(UIComponent) {
	'use strict';
	return UIComponent.extend('sap.ui.demo.todo.Component', {
		metadata: {
			manifest: 'json'
		}
	});
});

jQuery.sap.registerModulePath(
	'openui5-masterdetail-app',
	'./components/master-detail/'
);

jQuery.sap.require('openui5-masterdetail-app.Component');
