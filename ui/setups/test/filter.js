var setup = {
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
			configuration: 'Aufgabe5.json'
		},
		{
			name: 'experimentController',
			taskTextButtonTime: 1,
			taskTime: 1,
			stepOrder: [0, 10, 20, 30, 40, 45, 50, 60, 70, 80, 90, 100],
			steps: [
				{
					number: 0,
					text: [
						'Willkommen zur Evaluation RedPill!',
						'',
						'',
						'Im Folgenden werden Sie durch ein Tutorial geleitet, das Sie auf 5 Aufgaben vorbereitet die Sie im Anschluss lösen werden.',
						'Wenn Sie mit einer fertig sind, klicken Sie auf den Button "Weiter" oben rechts und bestätigen Sie diese Aktion.'
					]
				},
				{
					number: 10,
					text: [
						'Tutorial: Aufgabe 1',
						'',
						'Ein leeres Suchfeld selektiert automatisch alle vorhandenen Elemente der Visualisierung. Der erste Container wendet seine Transformation "visible" also auf alle Elemente an.',
						'Die erste Ebene soll die Klasse "com.android.phone.InCallScreen" selektieren: tragen sie den Klassennamen in das Suchfeld ein, bis unter den Vorschlägen die richtige Klasse erscheint.',
						'Wählen Sie nun per Mausklick (oder mit den Pfeiltasten und Enter) den Vorschlag aus.',
						'Fügen Sie dem ersten Container nun eine weitere Ebene hinzu: nutzen Sie den "add new layer"-Button.',
						'Selektieren Sie in dieser Ebene nun die Klasse "com.android.phone.CallCard" um letztendlich nur diese beiden Klassen anzuzeigen.'
					]
				},
				{
					number: 20,
					text: [
						'Tutorial: Aufgabe 2',
						'',
						'',
						'Fügen Sie einen weiteren Container des Typs "transparent" hinzu: nutzen Sie den "add new container"-Button.',
						'Selektieren Sie in der ersten Ebene dieses neuen Containers die Klasse "com.android.phone.CallCard".',
						'Fügen Sie dann einen weiteren Container des Typs "selected" hinzu, dessen erste Ebene das Attribut "com.android.phone.InCallScreen.mSettings" selektiert.'
					]
				},
				{
					number: 30,
					text: [
						'Tutorial: Aufgabe 3',
						'',
						'',
						'Blenden Sie nun alle Relationen der Klasse "com.android.phone.InCallScreen" ein, indem Sie im ersten Container die Option "relations" einschalten.',
						'Testen Sie danach, was passiert wenn sie im zweiten Container die Option "invert" einschalten.'
					]
				},
				{
					number: 40,
					text: [
						'Tutorial: Aufgabe 4',
						'',
						'Setzen Sie die Filterkonfiguration zurück: nutzen Sie dazu den "reset configuration"-Button.',
						'Blenden Sie nun nur die beiden Klassen "com.android.phone.OtaStartupReceiver" und "com.android.phone.OtaUtils" ein.',
						'Um nun die Relationen zwischen diesen Klassen anzuzeigen, fügen Sie einen neuen Container des Typs "connected" hinzu.',
						'Er selektiert durch das leere Suchfeld alle Elemente der beiden Klassen und zeigt Ihre Relationen an.',
						'Sie können mit dem "reset view"-Button die optimale Zoomstufe einstellen, um die Visualisierung genauer zu betrachten.'
					]
				},
				{
					number: 45,
					text: [
						'Tutorial abgeschlossen',
						'',
						'',
						'Setzen Sie die Filterkonfiguration zurück.',
						'Sie haben das Tutorial nun abgeschlossen. Die folgenden Aufgaben stellen reale Anwendungsfälle der Softwarevisualisierung dar.',
						'',
						'Tragen Sie Ihre Lösungen in den Fragebogen ein, der Ihnen zur Verfügung gestellt wurde.'
					]
				},
				{
					number: 50,
					text: [
						'Aufgabe 5',
						'',
						'',
						'Zeigen Sie nur die Klasse "com.android.phone.InCallScreen" an und blenden sie Ihre Relationen transparent ein.'
					]
				},
				{
					number: 60,
					text: [
						'Aufgabe 6',
						'',
						'',
						'Mit welchen Klassen ist die Klasse "com.android.phone.ADNList" über Relationen verbunden?'
					]
				},
				{
					number: 70,
					text: [
						'Aufgabe 7',
						'',
						'',
						'Transformieren Sie die Visualisierung so, dass alle Elemente der Visualisierung transparent dargestellt werden, das Attribut "com.android.phone.InCallScreen.otaUtils" und seine Relationen sollen jedoch undurchsichtig bleiben.'
					]
				},
				{
					number: 80,
					text: ['Aufgabe 8', '', '', 'TODO']
				},
				{
					number: 90,
					text: [
						'Aufgabe 9',
						'',
						'',
						'Zeigen sie zwei Klassen an, und nur von einer die Relationen.'
					]
				},
				{
					number: 100,
					text: [
						'Aufgaben abgeschlossen',
						'',
						'',
						'Sie haben alle Aufgaben abgeschlossen und fahren nun mit dem Gesamtfeedback fort.'
					]
				}
			]
		}
	],
	uis: [
		{
			name: 'UI0',
			navigation: { type: 'examine' },

			area: {
				name: 'top',
				orientation: 'horizontal',
				first: {
					size: '125px',
					collapsible: false,
					controllers: [{ name: 'experimentController' }]
				},
				second: {
					name: 'bottom',
					size: '90%',
					collapsible: false,
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
			}
		}
	]
};
