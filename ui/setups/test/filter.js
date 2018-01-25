﻿var setup = {
	controllers: [
		{
			name: 'defaultLogger',
			logActionConsole: false,
			logEventConsole: false
		},
		{ name: 'canvasHoverController' },
		{ name: 'canvasFilterController' },
		{
			name: 'filterController',
			devMode: false,
			configuration: 'Aufgabe6.json'
		}
	],
	uis: [
		{
			name: 'UI0',
			navigation: { type: 'examine' },
			area: {
				name: 'left',
				orientation: 'vertical',
				first: {
					size: '25%',
					min: '250',
					collapsible: true,
					expanders: [
						{
							name: 'filter',
							title: 'Filter',
							controllers: [{ name: 'filterController' }]
						}
					]
				},
				second: {
					name: 'right',
					size: '75%',
					min: '200',
					collapsible: false,
					canvas: {},
					controllers: [
						{ name: 'defaultLogger' },
						{ name: 'canvasHoverController' },
						{ name: 'canvasFilterController' }
					]
				}
			}
		}
	]
};
