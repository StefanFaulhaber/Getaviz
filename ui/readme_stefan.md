# Masterarbeit: Dynamisches Filtern in der Softwarevisualisierung

## Autor: Stefan Faulhaber

## Setup

- Server auf localhost starten (z.B. XAMPP, MAMP, ...)
- http://localhost:8888/filter.html aufrufen

## TODO

- Bug: connected-Transformation + relations-Manipulation blendet auch nicht an Relationen teilhabende Elemente mit ein
- RelationsController nutzen (David fragen)

## Ideen

- Vorschläge erweitern wie bei Google-Suche
- include parent Option
- flyTo-Button für Layer
- Lanes unterstützen (Verkettung einstellbar machen)

## Notizen

- Modelle kompilieren via: 
  /Applications/Instant\ Player.app/Contents/MacOS/aopt -i model.x3d -F Scene:"cacheopt(true),idmap(multiPart)" -V -G binGeo/:sapd -x multiPart.x3d 
  /Applications/Instant\ Player.app/Contents/MacOS/aopt -i model.x3d -F Scene:"cacheopt(true),idmap(multiPart)" -V -x multiPart.x3d