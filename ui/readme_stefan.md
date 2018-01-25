# Masterarbeit: Dynamisches Filtern in der Softwarevisualisierung

## Autor: Stefan Faulhaber

## Setup

- Server auf localhost starten (z.B. XAMPP, MAMP, ...)
- http://localhost:8888/filter.html aufrufen

## TODO

- Reset, zoom

## Notizen

- Modelle kompilieren via: 
  /Applications/Instant\ Player.app/Contents/MacOS/aopt -i model.x3d -F Scene:"cacheopt(true),idmap(multiPart)" -V -G binGeo/:sapd -x multiPart.x3d 
  /Applications/Instant\ Player.app/Contents/MacOS/aopt -i model.x3d -F Scene:"cacheopt(true),idmap(multiPart)" -V -x multiPart.x3d
- Model.js: verwaltet entities
- CanvasManipulator.js: implementiert Funktionen zur Transformation von Glyphen

## Evaluation

### Aufgaben

1. Container & Layer unterscheiden

  - Fügen Sie dem ersten Container zwei Layer hinzu.
  - Der erste Layer soll die Klasse "com.android.phone.InCallScreen" auswählen, der zweite Layer "com.android.phone.CallCard".

2. Transformationen 'show', 'transparent' & 'selected' kombinieren

  - Fügen Sie einen weiteren Container des Typs 'transparent' hinzu, der die Query "com.android.phone.CallCard" enthält. 
  - Fügen Sie dann einen weiteren Container des Typs 'selected' hinzu, der die Query "com.android.phone.InCallScreen.mSettings" enthält.

3. Manipulatoren 'invert' & 'relations' nutzen

  - Wählen Sie im ersten Container die Option 'relations' aus, um alle Relationen der eingeblendeten Klassen hinzuzufügen.
  - Testen Sie danach, was passiert wenn sie im zweiten Container die Option 'invert' auswählen.

4. Relationen verstehen und 'connect' nutzen

  - Setzen Sie die Filterkonfiguration zurück.
  - Finden Sie nun eigenständig heraus, wieviele Relationen zwischen den Klassen "com.android.phone.OtaStartupReceiver" und "com.android.phone.OtaUtils" bestehen.

5. Typisches Problem lösen (1)

  - Setzen Sie die Filterkonfiguration zurück.
  - Geben sie jeweils eine Methode an, die von den folgenden drei Methoden aufgerufen wird und außerhalb der Ursprungsklasse liegt:
    - "com.android.phone.CallCard.displayMainCallStatus(Phone,Call)"
    - "com.android.phone.CallCard.stopTimer()"
    - "com.android.phone.CallCard.onClick(View)"

6. Typisches Problem lösen (2)

  - Setzen Sie die Filterkonfiguration zurück.
  - Zeigen Sie nur die Klasse "com.android.phone.InCallScreen" an und blenden sie Ihre Relationen transparent ein.

7. unmögliche Endlosaufgabe

  - Setzen Sie die Filterkonfiguration zurück.
  - Finden Sie heraus, wieviele Funktionen in der Visualisierung existieren.

### Ablauf

#### JANUAR

- Tutorial als Manual
- Features
- Fragebogen

#### FEBRUAR

- Testdurchlauf
- Evaluation durchführen