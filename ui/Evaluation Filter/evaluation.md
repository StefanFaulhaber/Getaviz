# Evaluation "RedPill"

## Formulare
- https://goo.gl/forms/OSoi9V8t3sqXfISi1
- https://goo.gl/forms/NDbHas7zQy84Zk5b2
- https://goo.gl/forms/vLfHB2otpSjYSFQK2
- https://goo.gl/forms/yiQnoJ5zbieMHneu2

## Ablauf

1. Begrüßung
2. Allgemeine Personenangaben (Fragebogen 1)
3. Erläuterung des Evaluationsablaufs
4. Einführung in Getaviz
5. Vorstellung des Testsetups
6. Aufgaben (Teil I)
7. Fragebogen 2
8. Aufgaben (Teil II - Fragebogen 3)
9. Feedback (Fragebogen 4)

## Aufgaben

1. Container & Ebenen unterscheiden

  - Fügen Sie dem ersten Container zwei Ebenen hinzu.
  - Die erste Ebene soll die Klasse `com.android.phone.InCallScreen` selektieren, die zweite Ebene `com.android.phone.CallCard`.

---

2. Transformationen `visible`, `transparent` & `selected` kombinieren

  - Fügen Sie einen weiteren Container des Typs `transparent` hinzu, der die Query `com.android.phone.CallCard` enthält.
  - Fügen Sie dann einen weiteren Container des Typs `selected` hinzu, der die Query `com.android.phone.InCallScreen.mSettings` enthält.

---

3. Selektionsmanipulatoren `invert` & `relations` nutzen

  - Wählen Sie im ersten Container die Option `relations` aus, um alle Relationen der eingeblendeten Klassen hinzuzufügen.
  - Testen Sie danach, was passiert wenn sie im zweiten Container die Option `invert` auswählen.

---

4. Relationen verstehen und `connect` nutzen

  - Setzen Sie die Filterkonfiguration zurück.
  - Finden Sie nun eigenständig heraus, wieviele Relationen zwischen den Klassen `com.android.phone.OtaStartupReceiver` und `com.android.phone.OtaUtils` bestehen.

---

5. Typisches Problem lösen (1)

  - Setzen Sie die Filterkonfiguration zurück.
  - Geben sie jeweils eine Methode an, die von den folgenden drei Methoden aufgerufen wird und außerhalb der Ursprungsklasse liegt:
    - `com.android.phone.CallCard.displayMainCallStatus(Phone,Call)`
    - `com.android.phone.CallCard.stopTimer()`
    - `com.android.phone.CallCard.onClick(View)`

---

6. Typisches Problem lösen (2)

  - Setzen Sie die Filterkonfiguration zurück.
  - Zeigen Sie nur die Klasse `com.android.phone.InCallScreen` an und blenden sie Ihre Relationen transparent ein.

---

7. Typisches Problem lösen (3)

  - Text

---

8. Typisches Problem lösen (4)

  - Text

---

9. Probieraufgabe

  - Setzen Sie die Filterkonfiguration zurück.
  - Zeigen sie zwei Klassen an, und nur von einer die Relationen.