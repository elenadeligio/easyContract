"use strict";

const mongoose = require("mongoose"),
    Vereinlongtext = require("./models/vereinlongtext");
mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/easycontract",
    { useNewUrlParser: true}
);

Vereinlongtext.deleteMany({}).then(() => {

    // § 1 Name, Sitz:
    return Vereinlongtext.create({
        vereinlongtext: "(1) Der Verein führt den Namen __________ . Er soll in das Vereinsregister eingetragen werden und führt danach den Zusatz „e.V.“.",
        category: "§ 1 Name, Sitz"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "(2) Der Verein hat seinen Sitz in __________ (Ort angeben).",
        category: "§ 1 Name, Sitz"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "(3) Das Geschäftsjahr ist das Kalenderjahr.",
        category: "§ 1 Name, Sitz"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

    // § 2 Zweck, Gemeinnützigkeit des Vereins:
    return Vereinlongtext.create({
        vereinlongtext: "Ggf. Vereinsinteren Regelungen",
        category: "§ 2 Zweck, Gemeinnützigkeit des Vereins"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

    // § 3 Erwerb der Mitgliedschaft: Antrag
    return Vereinlongtext.create({
        vereinlongtext: "Mitglied eines Vereins kann jede volljährige Person werden, welche die Voraussetzungen der Mitgliedschaft nach § ___ erfüllt. Der Antrag auf Aufnahme ist (schriftlich/ in Textform) zu stellen und hat den ___ (Name, Geburtsdatum, Anschrift, Alter,...) zu enthalten.",
        category: "§ 3 Erwerb der Mitgliedschaft",
        subcategory: "Antrag"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Die Aufnahme des Antragstellers setzt voraus, dass dieser an den Verein ein Eintrittsgeld in Höhe von __ € leistet. Ein zuvor mit dem Verein abgeschlossener Aufnahmevertrag steht unter der aufschiebenden Bedingung der vollständigen Zahlung des Eintrittsgelds.",
        category: "§ 3 Erwerb der Mitgliedschaft",
        subcategory: "Antrag"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    
    // § 3 Erwerb der Mitgliedschaft: Aufnahme
    return Vereinlongtext.create({
        vereinlongtext: "Über den Antrag auf Aufnahme entscheidet (der Vorstand / die Mitgliederversammlung mit der Mehrheit der abgegebenen Stimmen). Liegen die Voraussetzungen nach § ___ vor, erwirbt der Antragsteller die Mitgliedschaft mit Wirkung ab dem nächsten, auf den Zugang seines Antrags beim Verein folgenden ___(Tag / Monat). Einer Annahmeerklärung durch den Verein bedarf es nicht. Die Aufnahme erfolgt durch Aushändigung des Mitgliedsausweises an den Antragsteller.",
        category: "§ 3 Erwerb der Mitgliedschaft",
        subcategory: "Aufnahme"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

    // § 3 Erwerb der Mitgliedschaft: Probezeit
    return Vereinlongtext.create({
        vereinlongtext: "Vor der Aufnahme hat der Bewerber eine Probezeit zu absolvieren / Ein Beschluss kann erst gefasst werden, nachdem der Bewerber eine mindestens ___ (sechsmonatige / einjährige / ...) Probezeit nach ___ (Abs. ___) absolviert hat. Über den schriftlichen Antrag des Bewerbers auf Durchführung der Probezeit sowie über deren Beendigung entscheidet (der Vorstand / die Mitgliederversammlung). Während der Probezeit ist der Bewerber nicht Mitglied des Vereins. Ihm ist der Zugang zu den Einrichtungen des Vereins und die Anwesenheit bei Veranstaltungen des Vereins in jederzeit widerruflicher Weise gestattet. Der Bewerber hat für die Nutzung der Einrichtungen des Vereins die nach dieser Satzung festgelegten Gebühren zu zahlen; ein Beitrag wird während der Probezeit nicht erhoben. Lehnt (der Vorstand/ die Mitgliederversammlung) den Antrag auf Aufnahme ab, ist die Probezeit beendet.",
        category: "§ 3 Erwerb der Mitgliedschaft",
        subcategory: "Probezeit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
        return Vereinlongtext.create({
        vereinlongtext: "Eine unter Verstoß gegen diese Aufnahmevoraussetzungen gleichwohl erklärte Aufnahme ist unwirksam.",
        category: "§ 3 Erwerb der Mitgliedschaft",
        subcategory: "Probezeit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
        return Vereinlongtext.create({
        vereinlongtext: "Anstelle der Ablehnung kann ___ (die Mitgliederversammlung / der Vorstand) auch beschließen, über den Antrag zu einem späteren Zeitpunkt zu entscheiden. Lehnt (der Vorstand / die Mitgliederversammlung) den Antrag ab, so hat er dies dem Antragsteller (schriftlich/ in Textform) mitzuteilen und mit Gründen zu versehen. Gegen den ablehnenden Bescheid kann der Antragsteller innerhalb ___ (einer Woche / eines Monats / ...) ab Zugang ___ (schriftlich) Beschwerde bei (dem Vorstand / der Mitgliederversammlung) einlegen; die Beschwerde soll begründet werden. Hat ___ (der Vorstand / die Mitgliederversammlung) nach Ablauf von ___ (drei Monaten / ...) ab Zugang des Antrags auf Aufnahme über diesen nicht entschieden, kann der Antragsteller ebenfalls ___ (schriftlich) Beschwerde bei ___ (dem Vorstand / der Mitgliederversammlung ) einlegen. (Hilft der Vorstand der Beschwerde nicht ab, so hat er diese der nächsten ordentlichen Mitgliederversammlung zur Entscheidung vorzulegen.)",
        category: "§ 3 Erwerb der Mitgliedschaft",
        subcategory: "Probezeit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

    // § 3 Erwerb der Mitgliedschaft: Gastmitgliedschaft
    return Vereinlongtext.create({
        vereinlongtext: "Personen, die ___ (*Voraussetzungen*) können Gastmitglied des Vereins werden. Gastmitglieder haben dieselben Rechte und Pflichten wie ordentliche Mitglieder. Jedoch endet ihre Mitgliedschaft ohne weitere Voraussetzungen mit Ablauf von ___ Jahren ab Wirksamwerden ihres Eintritts. Im Übrigen gelten für Eintritt und Austritt die Bestimmungen für ordentliche Mitglieder entsprechend. Eine mehrmalige Gastmitgliedschaft ist ___ (ausgeschlossen / möglich).",
        category: "§ 3 Erwerb der Mitgliedschaft",
        subcategory: "Gastmitgliedschaft"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

    // § 3 Erwerb der Mitgliedschaft: Übertragung
    return Vereinlongtext.create({
        vereinlongtext: "Die Mitgliedschaft ist, ohne dass es der Zustimmung des Vereins bedarf, auf eine andere Person übertragbar, sofern diese im Zeitpunkt der Übertragung die Voraussetzungen der Aufnahme nach § ___ erfüllt.",
        category: "§ 3 Erwerb der Mitgliedschaft",
        subcategory: "Übertragung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

    // § 3 Erwerb der Mitgliedschaft: Ehrenmitgliedschaft
    return Vereinlongtext.create({
        vereinlongtext: "Auf Vorschlag des Vorstands kann die Mitgliederversammlung Mitglieder oder sonstige Personen, die sich um den Verein besonders verdient gemacht haben, zu Ehrenmitgliedern auf Lebenszeit ernennen.",
        category: "§ 3 Erwerb der Mitgliedschaft",
        subcategory: "Ehrenmitgliedschaft"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

    // § 4 Beendigung der Mitgliedschaft
    return Vereinlongtext.create({
        vereinlongtext: "Die Mitgliedschaft endet mit (dem Tod des Mitglieds / mit Austritt des Mitglieds / mit Streichung von der Mitgliederliste / mit Ausschluss aus dem Verein).",
        category: "§ 4 Beendigung der Mitgliedschaft"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "(ggf. nähere Ausführungen: zum Austritt) Der Austritt erfolgt durch eine Erklärung (in Schriftform/ Textform) gegenüber dem Verein. Er ist zum Ende eines Kalenderjahres unter Einhaltung einer Kündigungsfrist von (zB. 3 Monaten) zulässig. Ein fristloser Austritt aus wichtigem Grund bleibt unberührt.",
        category: "§ 4 Beendigung der Mitgliedschaft"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "(ggf. nähere Ausführungen: Streichung von der Mitgliederliste) Ein Mitglied kann durch Beschluss des Vorstands von der Mitgliederliste gestrichen werden, wenn es sich trotz zweimaliger (ggf. dreimaliger) Mahnung in (Schriftform / Textform) mit der Zahlung eines Beitrags oder von Umlagen mit einem Beitrag in Verzug befindet, welcher der Höhe von ___ (z.B. zwei Jahresmitgliedsbeiträgen) entspricht. Die Streichung darf nur beschlossen werden, wenn die Streichung dem Mitglied mit der Mahnung ___ (schriftlich) angedroht wurde und mindestens (zB. drei ) Monate seit der Absendung der Androhung vergangen sind. Die Streichung ist dem Mitglied ___ (schriftlich) mitzuteilen. (Sinnvoll): Die Androhung kann mit der zweiten Mahnung zusammengefasst werden. Die Streichung ist dem Mitglied dann (schriftlich/ in Textform) mitzuteilen.",
        category: "§ 4 Beendigung der Mitgliedschaft"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "(ggf. nähere Ausführungen: Ausschluss eines Mitglieds) Ein Mitglied kann aus dem Verein bei Vorliegen eines wichtigen Grundes ausgeschlossen werden. Ein wichtiger Grund liegt vor, wenn ein Vereinsmitglied seine Mitgliedschaftspflichten grob verletzt und dem Verein unter Abwägung der beiderseitigen Interessen ein weiteres Verbleiben des Mitglieds im Verein nicht zugemutet werden kann. Über den Ausschluss entscheidet ___ (der Vorstand). Dem betroffenen Mitglied ist vor der Beschlussfassung unter Setzung einer angemessenen Frist, die ___(zB. 2 Wochen) nicht unterschreiten darf, Gelegenheit zu einer ___ (schriftlichen / mündlichen)Stellungnahme gegenüber ___ (dem Vorstand) zu geben.",
        category: "§ 4 Beendigung der Mitgliedschaft"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "(Beschluss über den Ausschluss) Der Beschluss des (Vorstands/ Mitgliederversammlung) über den Ausschluss ist dem betroffenen Mitglied (schriftlich / in Textform) mitzuteilen und mit Gründen zu versehen. Mit dem Beschluss ruht die Mitgliedschaft des betroffenen Mitglieds. Sofern hiergegen keine Beschwerde nach ___ (Abs. ___) eingelegt wird, wird der Beschluss mit Ablauf der Beschwerdefrist wirksam und die Mitgliedschaft beendet.",
        category: "§ 4 Beendigung der Mitgliedschaft"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "(Beschwerde gegen den Ausschluss) Gegen den Ausschließungsbeschluss kann das betroffene Mitglied innerhalb ___ (eines Monat) ___ (schriftlich) Beschwerde bei ___ (dem Vorstand / der Mitgliederversammlung) einlegen. Die Beschwerde soll begründet werden. Die Beschwerde hat aufschiebende Wirkung. (Hilft ___ (der Vorstand / die Mitgliederversammlung) der Beschwerde nicht ab, so hat er diese der nächsten ordentlichen Mitgliederversammlung zur Entscheidung vorzulegen. Dem betroffenen Mitglied ist im Rahmen dieser Mitgliederversammlung die Gelegenheit zur Stellungnahme in angemessenem Umfang einzuräumen. Hierüber ist das betroffene Mitglied rechtzeitig zu unterrichten. Die Mitgliederversammlung beschließt über den Ausschluss des Mitglieds mit der Mehrheit der abgegebenen Stimmen.) Mit dem Beschluss der Mitgliederversammlung über den Ausschluss ist die Mitgliedschaft beendet. Das betroffene Mitglied kann sich im Rahmen des Ausschließungsverfahrens von einem Beistand vertreten lassen. Der Beistand muss nicht Mitglied des Vereins sein.",
        category: "§ 4 Beendigung der Mitgliedschaft"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Ein Mitglied scheidet ohne weitere Voraussetzungen aus dem Verein mit dem Ablauf des/der ___ aus, an dem es die Voraussetzungen der Mitgliedschaft gem. § ___ nicht mehr erfüllt.",
        category: "§ 4 Beendigung der Mitgliedschaft"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

        // § 4 Beendigung der Mitgliedschaft: Zusätzliche Option: (Erstattungsregelungen)
    return Vereinlongtext.create({
        vereinlongtext: "Variante 1: Scheidet ein Mitglied während des laufenden Wirtschaftsjahres aus, so ist eine Erstattung von Beiträgen, die für das laufende Wirtschaftsjahr im Voraus erbracht wurden, ausgeschlossen.",
        category: "§ 4 Beendigung der Mitgliedschaft",
        subcategory: "Erstattungsregelungen"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Variante 2: Scheidet ein Mitglied während des laufenden Wirtschaftsjahres aus, so sind Beiträge, die für das laufende Wirtschaftsjahr im Voraus erbracht wurden, zeitanteilig zu erstatten.",
        category: "§ 4 Beendigung der Mitgliedschaft",
        subcategory: "Erstattungsregelungen"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Variante 3: Scheidet ein Mitglied aus dem Verein aus, so ist eine Erstattung geleisteter Eintrittsgelder ausgeschlossen.",
        category: "§ 4 Beendigung der Mitgliedschaft",
        subcategory: "Erstattungsregelungen"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

        // § 5 Rechte und Pflichten der Mitglieder
    return Vereinlongtext.create({
        vereinlongtext: "(1) Jedes Mitglied hat das Recht, die Einrichtungen des Vereins zu nutzen und an gemeinsamen Veranstaltungen teilzunehmen. Jedes Mitglied hat gleiches Stimm- und Wahlrecht in der Mitgliederversammlung.",
        category: "§ 5 Rechte und Pflichten der Mitglieder"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "(2) Jedes Mitglied hat die Pflicht, die Interessen des Vereins zu fördern, insbesondere regelmäßig seine Mitgliedsbeiträge zu leisten und, soweit es in seinen Kräften steht, das Vereinsleben durch seine Mitarbeit zu unterstützen.",
        category: "§ 5 Rechte und Pflichten der Mitglieder"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

        // § 6 Aufnahmegebühr und Mitgliedsbeiträge
    return Vereinlongtext.create({
        vereinlongtext: "(1) Jedes Mitglied hat einen im Voraus fällig werdenden monatlichen Mitgliedsbeitrag zu entrichten.",
        category: "§ 6 Aufnahmegebühr und Mitgliedsbeiträge"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "(2) Die Höhe der Aufnahmegebühr und der Mitgliedsbeiträge wird von der Mitgliederversammlung festgelegt.",
        category: "§ 6 Aufnahmegebühr und Mitgliedsbeiträge"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "(3) (ggf. sollte es Ehrenmitglieder geben) Ehrenmitglieder sind von der Aufnahmegebühr und den Mitgliedsbeiträgen befreit.",
        category: "§ 6 Aufnahmegebühr und Mitgliedsbeiträge"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
        
        // § 9 Aufgaben des Vorstands
    return Vereinlongtext.create({
        vereinlongtext: "Dem Vorstand des Vereins obliegen die Vertretung des Vereins nach § 26 BGB und die Führung seiner Geschäfte. Er hat insbesondere folgende Aufgaben: a) die Einberufung und Vorbereitung der Mitgliederversammlungen einschließlich der Aufstellung der Tagesordnung, b) die Ausführung von Beschlüssen der Mitgliederversammlung, c) die Verwaltung des Vereinsvermögens und die Anfertigung des Jahresberichts, d) die Aufnahme neuer Mitglieder. (oder MV), e) * Bestimmung der Mitgliedsbeiträge.",
        category: "§ 9 Aufgaben des Vorstands"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

        // § 10 Bestand des Vorstands
    return Vereinlongtext.create({
        vereinlongtext: "Der Vorstand besteht aus erstem und zweitem Vorstand.",
        category: "§ 10 Bestand des Vorstands"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 1: Der Vorstand besteht aus mindestens drei und höchstens sechs (gleichberechtigten) Vorstandsmitgliedern.",
        category: "§ 10 Bestand des Vorstands"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 2: Der Vorstand des Vereins besteht aus vier bis sechs Personen, nämlich dem 1. und dem 2. Vorsitzenden, dem Schatzmeister, dem Schriftführer und bis zu zwei Beisitzern. Eine Person kann mehrere Ämter in Personalunion innehaben.",
        category: "§ 10 Bestand des Vorstands"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 3: Der Vorstand des Vereins iSd § 26 BGB besteht aus dem Vorsitzenden und dem stellvertretenden Vorsitzenden. Der Vereinsführung gehören neben erstem und zweitem Vorsitzenden zusätzlich Schatzmeister, Schriftführer und zwei bis vier Beisitzer an. Eine Person kann nicht mehrere Vorstandsämter gleichzeitig innehaben.",
        category: "§ 10 Bestand des Vorstands"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 4: Der Vorstand besteht aus dem/der Vorsitzenden, einem Kassier und einem/einer Schriftführer/in sowie einem oder mehreren Beisitzer/n. Keine Person kann mehrere Vorstandsämter in ihrer Person vereinen.",
        category: "§ 10 Bestand des Vorstands"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "* zusätzlich: Die Wiederwahl oder die vorzeitige Abberufung eines Vorstandsmitglieds durch die Mitgliederversammlung ist zulässig.",
        category: "§ 10 Bestand des Vorstands"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
        
        // § 10 Bestand des Vorstands: Vorstandswechsel
    return Vereinlongtext.create({
        vereinlongtext: "Ein Mitglied bleibt nach Ablauf der regulären Amtszeit bis zur Wahl seines Nachfolgers im Amt.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Vorstandswechsel"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Scheidet der 1. Vorsitzende während seiner Amtszeit aus, rückt bis zu deren Ablauf der 2. Vorsitzende in dessen Amt nach. Das Amt des 2. Vorsitzenden (=übrigen Vorstandsmitglieder) bleibt bis zur regulären Neuwahl unbesetzt. * Alt.: Scheidet ein Vorstandsmitglied aus dem Vorstand aus, bleibt das Amt unbesetzt. Scheidet ein Mitglied vorzeitig aus dem Vorstand aus, so sind die verbleibenden Mitglieder des Vorstands berechtigt, ein Mitglied des Vereins bis zur Wahl des Nachfolgers durch die Mitgliederversammlung in den Vorstand zu wählen.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Vorstandswechsel"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

        // § 10 Bestand des Vorstands: Voraussetzungen
    return Vereinlongtext.create({
        vereinlongtext: "Vorstandsmitglieder müssen nicht Vereinsmitglied sein.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Voraussetzungen"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 1: Nur Vereinsmitglieder können Vorstandsmitglied sein.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Voraussetzungen"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 2: Vorstandsmitglied können nur volljährige natürliche Personen sein, solange sie Vereinsmitglied sind.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Voraussetzungen"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

        // § 10 Bestand des Vorstands: Wahl
    return Vereinlongtext.create({
        vereinlongtext: "Der Vorstand wird vom *** (Beirat/Kuratorium/Aufsichtsrat/etc) auf die Dauer von *** gewählt.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Wahl"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

        // § 10 Bestand des Vorstands: Dauer
    return Vereinlongtext.create({
        vereinlongtext: "Die Mitgliederversammlung wählt den Vorstand auf die Dauer von zwei Jahren, beginnend mit dem Tag der Wahl.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Dauer"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 1: Die Mitglieder des Vorstandes werden vom *** (Aufsichtsrat/Mitgliederversammlung/etc) auf die Dauer von zwei Jahren gewählt. Das Amt beginnt mit dem 1. Januar des auf die Wahl folgenden Jahres und endet am 31. Dezember des Folgejahres.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Dauer"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 2: Der Vorstand wird von der Mitgliederversammlung gewählt. Diese bestimmt die Dauer der Wahlperiode, die jedoch nicht weniger als zwei und nicht mehr als fünf Jahre betragen darf.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Dauer"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 3: Der Vorstand wird von der Mitgliederversammlung auf die Dauer von vier Jahren, gerechnet vom Ablauf der Wahlversammlung bis zum Ablauf der vierten darauf folgenden ordentlichen Mitgliederversammlung gewählt.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Dauer"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 4: Die Mitglieder des Vorstandes werden von der Mitgliederversammlung auf die Dauer von zwei Jahren gewählt. Die Amtsdauer beginnt mit dem Ende der Mitgliederversammlung, in der die Wahl erfolgt, und endet – ggf. auch vor oder nach Ablauf der Zweijahresfrist – mit Ablauf der Mitgliederversammlung, in der der neue Vorstand gewählt wird.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Dauer"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

        // § 10 Bestand des Vorstands: Fortdauer
    return Vereinlongtext.create({
        vereinlongtext: "Der Vorstand wird von *** auf die Dauer von *** gewählt. Der Vorstand bleibt auch nach Ablauf seiner Amtszeit bis zur (ggf.: erfolgreichen) Neuwahl des Vorstands im Amt.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Fortdauer"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

        // § 10 Bestand des Vorstands: Lebenszeit
    return Vereinlongtext.create({
        vereinlongtext: "Erster Vorsitzender auf Lebenszeit ist ***. Er/Sie kann (nur) aus wichtigem Grund durch Beschluss der Mitgliederversammlung mit einfacher Stimmenmehrheit abberufen werden.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Lebenszeit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

        // § 10 Bestand des Vorstands: Entlastung
    return Vereinlongtext.create({
        vereinlongtext: "Über die Entlastung des Vorstandes entscheidet die *** (Mitgliederversammlung/Delegiertenversammlung/etc).",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Entlastung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 1: Über die Entlastung des Vorstandes ist jährlich in der ordentlichen Mitgliederversammlung Beschluss zu fassen.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Entlastung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 2: Über die Entlastung des Vorstandes ist auf dessen Antrag in der Mitgliederversammlung Beschluss zu fassen.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Entlastung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 3: Ein Anspruch des Vorstands auf Entlastung besteht nicht.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Entlastung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

        // § 10 Bestand des Vorstands: Nachrücken
    return Vereinlongtext.create({
        vereinlongtext: "Die Mitgliederversammlung kann bis zu drei Ersatzvorstandsmitglieder wählen, die – in der Reihenfolge der auf sie entfallenden Stimmen – bei Ausscheiden von Vorstandsmitgliedern während der Amtszeit bis zu deren Ablauf in das Vorstandsamt des Ausscheidenden nachrücken. Bei Stimmengleichheit von Ersatzleuten entscheidet das Los.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Nachrücken"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Alt. 1: Die Mitgliederversammlung wählt den Vorstand für die Dauer von zwei Jahren. Zusätzlich ist für jedes Vorstandsamt eine Ersatzperson zu wählen. Eine Ersatzperson rückt bei Ausscheiden des gewählten Vorstandsmitgliedes, für dessen Amt es ersatzweise gewählt wurde, bis zum Ablauf der Wahlperiode in dessen Amt nach.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Nachrücken"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Alt. 2: Die Mitgliederversammlung kann bis zu drei Ersatzleute wählen, aus deren Kreis sich der Vorstand bei Ausscheiden eines einzelnen Vorstandsmitgliedes bis zum Ablauf der Wahlperiode durch Vorstandsbeschluss zu ergänzen hat.",
        category: "§ 10 Bestand des Vorstands",
        subcategory: "Nachrücken"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

 // § 11 Vorstandssitzung: Ladung zur Vorstandssitzung
    return Vereinlongtext.create({
        vereinlongtext: "Vorstandssitzungen sind vom Vorsitzenden, bei dessen Verhinderung vom stellvertretenden Vorsitzenden in Textform oder (fern-)mündlich unter Einhaltung einer Einberufungsfrist von einer Woche einzuberufen. Der Mitteilung einer Tagesordnung bedarf es nicht.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Ladung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 1: Vorstandssitzungen sind vom 1. Vorsitzenden, bei dessen Verhinderung von seinem Stellvertreter, unter Angabe der Tagesordnung einzuberufen. Die Einladung bedarf keiner besonderen Form, sie kann insbesondere schriftlich, (fern-)mündlich, per E-Mail oder sonst in Textform sowie durch Veröffentlichung in der Vereinszeitschrift erfolgen. Zwischen der Einladung und dem Tag der Vorstandssitzung müssen mindestens sieben Tage liegen. Für die Fristberechnung gelten die Bestimmungen für die Mitgliederversammlung entsprechend. Ort und Zeit der Vorstandssitzung sind in der Einladung bekannt zu geben.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Ladung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 2: Vorstandssitzungen sind vom 1. Vorsitzenden, bei dessen Verhinderung von seinem Stellvertreter, einzuberufen, der Mitteilung einer Tagesordnung bedarf es nicht. Die Einladung bedarf kann schriftlich, (fern-)mündlich, per E-Mail oder sonst in Textform erfolgen. Zwischen dem Tag der Einladung bzw. deren Absendung und dem Tag der Vorstandssitzung müssen mindestens *** Tage liegen, wobei der Tag der Ladung und der Tag der Sitzung nicht mitgezählt werden. Ort und Zeit der Vorstandssitzung sind in der Einladung bekannt zu geben.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Ladung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 11 Vorstandssitzung: Beschlussfähigkeit des Vorstands
    return Vereinlongtext.create({
        vereinlongtext: "Der Vorstand ist nur beschlussfähig, wenn sämtliche Vorstandsämter besetzt sind. Alt.: Die Beschlussfähigkeit des Vorstandes setzt nicht voraus, dass sämtliche Vorstandsämter besetzt sind.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Beschlussfähigkeit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 11 Vorstandssitzung: Mehrheitserfordernisse
    return Vereinlongtext.create({
        vereinlongtext: "Für die Beschlussfassung innerhalb des Vorstandes gelten die Bestimmungen über die Beschlussfassung in der Mitgliederversammlung entsprechend. Bei Stimmengleichheit gibt jedoch die Stimme des 1. Vorsitzenden den Ausschlag.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Mehrheit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 1: Beschlüsse des Vorstandes werden grundsätzlich mit der einfachen Mehrheit der Stimmen gefasst. Beschlüsse über folgende Gegenstände bedürfen jedoch der Einstimmigkeit: – *** (Aufzählung)",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Mehrheit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 2: Beschlüsse des Vorstandes werden mit Zweidrittelmehrheit gefasst, soweit nicht die Satzung oder das Gesetz zwingend eine andere Mehrheit vorsehen.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Mehrheit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 3: Die Entscheidungsfindung innerhalb des Vorstandes erfolgt durch Beschlussfassung. Jedoch hat der künstlerische Leiter eine Alleinentscheidungsbefugnis bei folgenden Vorgängen: Festlegung des Probenplanes, Festlegung der Konzerttermine und Konzertprogramme, Beschaffung des Notenmaterials, *** (ggf. weitere Vorgänge).",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Mehrheit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 11 Vorstandssitzung: Vertretung bei Beschlussfassung
    return Vereinlongtext.create({
        vereinlongtext: "Ein Vorstandsmitglied kann sich in Vorstandssitzungen durch ein anderes Vorstandsmitglied vertreten lassen. Ein Vorstandsmitglied kann jedoch nur ein weiteres Vorstandsmitglied vertreten.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Vertretung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 11 Vorstandssitzung: Protokollierung von Vorstandsbeschlüssen
    return Vereinlongtext.create({
        vereinlongtext: "Über die Vorstandssitzungen ist (ggf.: vom Schriftführer) ein Protokoll zu führen, das Ort und Zeit der Sitzung, Namen der Teilnehmer, gefasste Beschlüsse und Abstimmungsergebnis enthalten soll. Das Protokoll dient Beweiszwecken.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Protokollierung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Alt.: Über die Vorstandssitzungen ist ein Protokoll zu führen. Hierfür gelten die Bestimmungen über die Beurkundung der Beschlüsse der Mitgliederversammlung entsprechend.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Protokollierung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 11 Vorstandssitzung: Vertretungsbefugnis (Innenverhältnis)
    return Vereinlongtext.create({
        vereinlongtext: "Jedes Vorstandsmitglied vertritt einzeln. Im Innenverhältnis, also ohne Einschränkung der Vertretungsmacht nach außen, ist jedoch für folgende Rechtsgeschäfte die vorherige Zustimmung *** (der Mitgliederversammlung/des Beirates/des Präsidiums/etc) einzuholen: Veräußerung und Belastung von Grundbesitz, Rechtsgeschäfte mit einem Geschäftswert über 10.000 EUR, soweit sie nicht in dem von der Mitgliederversammlung beschlossenen Investitionsplan vorgesehen sind, *** (ggf. weitere Rechtsgeschäfte).",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Innenverhältnis"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 11 Vorstandssitzung: Vertretungsbefugnis (Außenverhältnis)
    return Vereinlongtext.create({
        vereinlongtext: "Jedes Vorstandsmitglied vertritt grundsätzlich einzeln. Zur wirksamen Veräußerung und Belastung von Grundbesitz ist jedoch die Mitwirkung von mindestens zwei (Alt. 1.: drei/vier/etc) (Alt. 2: allen) vorhandenen Vorstandsmitgliedern erforderlich. Zusätzlich ist für solche Rechtsgeschäfte im Innenverhältnis die Zustimmung der Mitgliederversammlung einzuholen.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Außenverhältnis"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Alt. 1: Jedes Vorstandsmitglied vertritt grundsätzlich einzeln. Zu einem Rechtsgeschäft mit einem Geschäftswert über *** EUR sind jedoch nur zwei Vorstandsmitglieder gemeinschaftlich zur Vertretung befugt.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Außenverhältnis"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Alt. 2: Der Verein wird durch zwei Vorstandsmitglieder gemeinschaftlich vertreten. Ein Rechtgeschäft mit einem Geschäftswert über *** EUR kann der Vorstand für den Verein nur mit Zustimmung *** (der Mitgliederversammlung/des Präsidiums/etc) bindend vornehmen.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Außenverhältnis"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 11 Vorstandssitzung: Vertretungsbefugnis
    return Vereinlongtext.create({
        vereinlongtext: "Jedes Vorstandsmitglied vertritt einzeln.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Vertretungsbefugnis"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 1: Der Verein wird durch zwei Vorstandsmitglieder gemeinschaftlich vertreten.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Vertretungsbefugnis"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 2: Der erste Vorsitzende vertritt den Verein einzeln, im Übrigen wird der Verein durch zwei Vorstandsmitglieder gemeinschaftlich vertreten.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Vertretungsbefugnis"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 3: Der Verein wird durch zwei Vorstandsmitglieder gemeinschaftlich, darunter der 1. oder 2. Vorsitzende, vertreten.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Vertretungsbefugnis"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 11 Vorstandssitzung: Befreiung des Vorstandes von den Beschränkungen des § 181 BGB
    return Vereinlongtext.create({
        vereinlongtext: "Der Vorstand ist von den Beschränkungen des § 181 BGB umfassend befreit.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Befreiung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 1: Der Vorstand ist zur Vornahme von Rechtsgeschäften mit sich selbst und als Vertreter eines Dritten befugt.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Befreiung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 2: Der Vorstand ist zur Vornahme von Rechtsgeschäften mit sich selbst als Vertreter eines Dritten befugt.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Befreiung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 3: Die Mitgliederversammlung kann den Vorstand insgesamt oder einzelne Vorstandsmitglieder von den Beschränkungen des § 181 BGB in der Form der Mehrfachvertretung ganz oder teilweise befreien.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Befreiung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 4: Die Mitgliederversammlung ist berechtigt, einem, mehreren oder allen Vorständen im Einzelfall oder generell Befreiung von den Beschränkungen des § 181 BGB zu erteilen.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Befreiung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Var. 5: Der 1. Vorsitzende ist befugt, den Verein bei der Vornahme von Rechtsgeschäften mit sich selbst als Vertreter eines Dritten zu vertreten. Im Übrigen sind die Vorstandsmitglieder von den Beschränkungen des § 181 BGB nicht befreit.",
        category: "§ 11 Vorstandssitzung",
        subcategory: "Befreiung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 12 Aufgaben der Mitgliederversammlung
    return Vereinlongtext.create({
        vereinlongtext: "Die Mitgliederversammlung ist für folgende Aufgaben zuständig: a) Wahl und Abberufung der Vorstandsmitglieder und der Kassenprüfer, b) Beschlussfassung über die Änderung der Satzung, c) Beschlussfassung über die Auflösung des Vereins, d) Festsetzung von Höhe und Fälligkeit des Jahresbeitrags, e) Entscheidung über die Beschwerden gegen die Ablehnung eines Aufnahmeantrags und gegen einen Ausschließungsbeschluss des Vorstands, f) Ernennung von Ehrenmitgliedern, g) Genehmigung des Haushaltsplans und Entgegennahme des Jahresberichts und sonstiger Berichte des Vorstands, h) Entlastung des Vorstands",
        category: "§ 12 Aufgaben der Mitgliederversammlung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 13 Einberufen der Mitgliederversammlung
    return Vereinlongtext.create({
        vereinlongtext: "In der ersten Hälfte des Kalenderjahres hat jährlich eine ordentliche Mitgliederversammlung stattzufinden.",
        category: "§ 13 Einberufen der Mitgliederversammlung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Alt.: Einmal jährlich (alt.: Einmal in zwei Jahren), möglichst im ersten Quartel des Jahres (alt.: zum Ende des Jahres), findet die ordentliche Mitgliederversammlung des Vereins statt. Außerordentliche Mitgliederversammlungen hat der Vorstand einzuberufen, wenn es das Interesse des Vereins erfordert oder wenn mindestens ein Zehntel/ein Fünftel der Mitglieder dies schriftlich /in Textform unter Angabe des Zwecks und der Gründe verlangt. Die Einladung erfolgt durch den Vorstand jeweils schriftlich/in Textform unter Wahrung der nachgenannten/ zweiwöchigen Einberufungsfrist. Mit der Einladung ist die Tagesordnung mitzuteilen.",
        category: "§ 13 Einberufen der Mitgliederversammlung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
    return Vereinlongtext.create({
        vereinlongtext: "Ggf. Ein Antrag auf Einberufen muss möglich sein.",
        category: "§ 13 Einberufen der Mitgliederversammlung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 13 Einberufen der Mitgliederversammlung: Protokoll
    return Vereinlongtext.create({
        vereinlongtext: "Die Beschlüsse der Mitgliederversammlung werden in einem Protokoll festgehalten, das von dem Versammlungsleiter und dem Schriftführer zu unterzeichnen ist. Ggf. zusätzlich: Protokollführer ist der Schriftführer, bei dessen Verhinderung bestimmt die Versammlung den Protokollführer. Das Protokoll soll den Ort und die Zeit der Versammlung die Zahl der erschienenen Mitglieder, die Person von Versammlungsleiter und Protokollführer, die Tagesordnung, die Abstimmungsergebnisse und die Art der Abstimmung enthalten. Ggf.: Jedes Vereinsmitglied kann Einsicht in das Protokoll verlangen.",
        category: "§ 13 Einberufen der Mitgliederversammlung",
        subcategory: "Protokoll"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 13 Einberufen der Mitgliederversammlung: Tonbandaufnahme
    return Vereinlongtext.create({
        vereinlongtext: "Der Verlauf der Mitgliederversammlung kann alternativ zur vorgenannten Niederschrift auch mittels Tonband- oder Videoaufnahmen protokolliert werden. Hierüber entscheidet der Versammlungsleiter, der dies vor Beginn der Aufnahme anzukündigen hat. Die Aufnahme darf vereinsfremden Personen zum Zwecke der Verwertung oder Wiedergabe nur mit Zustimmung aller sprechenden Personen zur Verfügung gestellt werden.",
        category: "§ 13 Einberufen der Mitgliederversammlung",
        subcategory: "Tonbandaufnahme"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 13 Einberufen der Mitgliederversammlung: Einberufungsfrist
    return Vereinlongtext.create({
        vereinlongtext: "Die Einberufungsfrist beträgt vier/zwei Wochen. Sie beginnt mit dem Versand der Einladung, auf den tatsächlichen Zugang beim jeweiligen Mitglied kommt es nicht an. Das Einladungsschreiben gilt dem jeweiligen Mitglied als zugegangen, wenn es an die letzte dem Verein bekannt Postadresse des jeweiligen Mitglieds versandt wurde.",
        category: "§ 13 Einberufen der Mitgliederversammlung",
        subcategory: "Einberufungsfrist"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 13 Einberufen der Mitgliederversammlung: Einberufungsform
    return Vereinlongtext.create({
        vereinlongtext: "Die Einberufung hat schriftlich/ in Textform zu erfolgen.",
        category: "§ 13 Einberufen der Mitgliederversammlung",
        subcategory: "Einberufungsform"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 13 Einberufen der Mitgliederversammlung: Ergänzung der Tagesordnung
    return Vereinlongtext.create({
        vereinlongtext: "Jedes Mitglied kann beantragen, dass weitere Angelegenheiten nachträglich auf die Tagesordnung gesetzt werden. Geht ein solcher Antrag spätestens eine Woche vor dem Tag der Mitgliederversammlung schriftlich/in Textform beim Vorstand ein, ist die Tagesordnung zu Beginn der Mitgliederversammlung entsprechend zu ergänzen. Geht er später ein oder wird er erst in der Mitgliederversammlung gestellt, beschließt die Mitgliederversammlung über die Zulassung.",
        category: "§ 13 Einberufen der Mitgliederversammlung",
        subcategory: "Ergänzung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 13 Einberufen der Mitgliederversammlung: Erneute Versammlung
    return Vereinlongtext.create({
        vereinlongtext: "Bei Beschlussunfähigkeit der Mitgliederversammlung kann am gleichen Tag im Anschluss an die erste Versammlung eine zweite Mitgliederversammlung stattfinden, (Alt. 1: die ohne Rücksicht auf die Zahl der erschienenen Mitglieder beschlussfähig ist.) (Alt. 2: in welcher Satzungsänderungen nunmehr lediglich einer Mehrheit von 1/4 der stimmberechtigten Mitglieder bedürfen.) In der Ladung der Mitgliederversammlung ist hierauf hinzuweisen.",
        category: "§ 13 Einberufen der Mitgliederversammlung",
        subcategory: "Versammlung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 14 Beschlussfassung der Mitgliederversammlung: Leitung der Mitgliederversammlung
return Vereinlongtext.create({
        vereinlongtext: "Die Mitgliederversammlung wird von dem ersten Vorstand, bei dessen Verhinderung von dem zweiten Vorstand wiederum ersatzweise von einem anderen Mitglied des Vorstandes geleitet. Nimmt kein Vorstandsmitglied an der Versammlung teil, bestimmt die Mitgliederversammlung den Versammlungsleiter aus ihrer Mitte. Ggf.: Bei Wahlen kann die Versammlungsleitung für die Dauer des Wahlgangs und der Aussprache einem anderen Mitglied übertragen werden.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Leitung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 14 Beschlussfassung der Mitgliederversammlung: Öffentlichkeit
return Vereinlongtext.create({
        vereinlongtext: "Die Mitgliederversammlungen finden stets unter Ausschluss der Öffentlichkeit statt. Über die Zulassung von Gästen hat der Versammlungsleiter zu entscheiden. Gäste dürfen sich nicht an der Diskussion beteiligen, soweit die Mitgliederversammlung hierüber nicht mit der einfachen Mehrheit der abgegebenen Stimmen anderweitig beschließt.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Öffentlichkeit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 14 Beschlussfassung der Mitgliederversammlung: Beschlussfähigkeit
return Vereinlongtext.create({
        vereinlongtext: "Die Mitgliederversammlung ist beschlussfähig, wenn mindestens die Hälfte/ ein Viertel sämtlicher Vereinsmitglieder anwesend ist.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Beschlussfähigkeit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
return Vereinlongtext.create({
        vereinlongtext: "Ggf. zusätzlich: Bei Beschlussfähigkeit hat der Vorstand innerhalb von vier Wochen/zwei Wochen eine zweite Mitgliederversammlung mit der gleichen Tagesordnung einzuberufen. Diese zweite Mitgliederversammlung ist ohne Rücksicht auf die Zahl der erschienenen Vereinsmitglieder beschlussfähig, wenn hierauf in der Einladung hingewiesen wurde; für deren Ladung gelten im Übrigen die allgemeinen Bestimmungen.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Beschlussfähigkeit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
return Vereinlongtext.create({
        vereinlongtext: "Alt.: Die Mitgliederversammlung ist grundsätzlich unabhängig von der Zahl der erschienenen Vereinsmitglieder beschlussfähig. Soll die Mitgliederversammlung jedoch über eine Satzungsänderung, Änderung des Vereinszwecks oder die Auflösung des Vereins beschließen, so ist sie nur beschlussfähig, wenn mindestens zwei Drittel der stimmberechtigten Vereinsmitglieder anwesend sind.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Beschlussfähigkeit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
return Vereinlongtext.create({
        vereinlongtext: "Alt.: Eine Änderung des Vereinszweckes/ Satzungsänderung/ Auflösung des Vereins kann nur mit Zustimmung sämtlicher Vereinsmitglieder beschlossen werden.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Beschlussfähigkeit"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 14 Beschlussfassung der Mitgliederversammlung: Mehrheitserfordernisse
return Vereinlongtext.create({
        vereinlongtext: "Die Mitgliederversammlung fasst Beschlüsse grundsätzlich mit einfacher Mehrheit der abgegebenen Stimmen.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Mehrheitserfordernisse"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
return Vereinlongtext.create({
        vereinlongtext: "Änderungen der Satzung sowie die Auflösung des Vereins können jeweils nur mit einer Mehrheit von drei Vierteln der abgegebenen Stimmen beschlossen werden. Die Änderung des Vereinszwecks erfordert die Zustimmung sämtlicher Vereinsmitglieder, wobei nicht erschienene Mitglieder schriftlich zustimmen müssen.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Mehrheitserfordernisse"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
return Vereinlongtext.create({
        vereinlongtext: "Stimmenthaltungen werden bei der Feststellung der Mehrheit (ggf.: nicht) mitgezählt. Ungültige Stimmen werden dagegen (Alt.: ebenfalls) nicht mitgezählt, sie gelten als nicht abgegeben. Eine Enthaltung liegt vor, wenn bei offener Abstimmung die Stimme als Enthaltung abgegeben wird, bei schriftlicher Abstimmung, wenn der Stimmzettel unverändert abgegeben oder als Enthaltung gekennzeichnet wird.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Mehrheitserfordernisse"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 14 Beschlussfassung der Mitgliederversammlung: Stichentscheid bei Wahlen
return Vereinlongtext.create({
        vereinlongtext: "Bei Wahlen findet eine Stichwahl statt, wenn kein Kandidat die Mehrheit der abgegebenen gültigen Stimmen auf sich vereinen kann. Die Stichwahl findet zwischen den beiden Kandidaten statt, auf die bei der ersten Wahl die meisten Stimmen entfielen.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Stichentscheid"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
return Vereinlongtext.create({
        vereinlongtext: "Alt.: Für Wahlen gelten die Bestimmungen über die Beschlussfassung entsprechend. Hat im ersten Wahlgang kein Kandidat die einfache Mehrheit erreicht, gilt als gewählt, wer die Mehrheit der abgegebenen gültigen Stimmen erhalten hat (relative Mehrheit); bei Stimmengleichheit zwischen mehreren Kandidaten hat eine Stichwahl zu erfolgen.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Stichentscheid"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 14 Beschlussfassung der Mitgliederversammlung: Stimmrecht
return Vereinlongtext.create({
        vereinlongtext: "Jedes Mitglied hat eine Stimme. Ggf.: Ehrenmitglieder und (ggf.) außerordentliche Mitglieder haben keine Stimme. Alt.: Jedes Mitglied auch jedes Ehrenmitglied hat eine Stimme. Ggf.: Gründungsmitglieder haben bei allen Beschlussfassungen jeweils zwei Stimmen.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Stimmrecht"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
return Vereinlongtext.create({
        vereinlongtext: "Das Stimmrecht kann entweder persönlich oder durch einen Bevollmächtigten ausgeübt werden. Bevollmächtigt werden können nur andere Vereinsmitglieder, außenstehende Personen können ausdrücklich nicht bevollmächtigt werden. Die Bevollmächtigung kann nicht allgemein, sondern nur beschränkt auf die jeweilige Mitgliederversammlung erteilt werden. Ggf.: Die Bevollmächtigung ist schriftlich nachzuweisen. Der Bevollmächtigte darf nicht nur das Stimmrecht ausüben, sondern auch im Namen des Vollmachtgebers an Diskussionen teilnehmen und Anträge stellen. Untervollmacht kann nicht erteilt werden. Ggf.: Mitglieder dürfen grundsätzlich nicht mehr als zwei Vollmachtgeber gleichzeitig vertreten.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Stimmrecht"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

// § 14 Beschlussfassung der Mitgliederversammlung: Online Mitgliederversammlung
return Vereinlongtext.create({
        vereinlongtext: "Abweichend von § 32 Absatz 1 Satz 1 des Bürgerlichen Gesetzbuchs (BGB) kann der Vorstand nach seinem Ermessen beschließen und in der Einladung mitteilen, dass die Mitglieder an der Mitgliederversammlung ohne körperliche Anwesenheit an einem Versammlungsort teilnehmen und ihre Mitgliederrechte im Wege der elektronischen Kommunikation ausüben können (zum Beispiel per E-Mail, Online- Formular) oder aber ihre Stimme im Vorhinein ohne Anwesenheit bzw. Teilnahme an der Online-Mitgliederversammlung schriftlich abgeben können. ● Der Vorstand regelt in der Wahlordnung geeignete technische und organisatorische Maßnahmen für die Durchführung einer Online- Mitgliederversammlung, die insbesondere sicherstellen sollen, dass nur Vereinsmitglieder an der Mitgliederversammlung teilnehmen und ihre Rechte wahrnehmen. ● In der Wahlordnung ist auch die Durchführung des elektronischen Wahlverfahrens zu verschriftlichen sowie die Stimmabgabe im Vorhinein, wenn Mitglieder nicht an der Online-Mitgliederversammlung teilnehmen möchten.",
        category: "§ 14 Beschlussfassung der Mitgliederversammlung",
        subcategory: "Onlineversammlung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {

//  § 16 Kassenprüfung/Kassenführung
return Vereinlongtext.create({
        vereinlongtext: "1. Der Schatzmeister hat über die Kassengeschäfte Buch zu führen und eine Jahresrechnung zu erstellen.",
        category: "§ 16 Kassenprüfung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).then(() => {
return Vereinlongtext.create({
        vereinlongtext: "2. Die Jahresrechnung wird von zwei Kassenprüfern geprüft, die von der Mitgliederversammlung auf die Dauer von zwei/drei Jahren gewählt werden. Die geprüfte Jahresrechnung ist der Mitgliederversammlung zur Beschlussfassung vorzulegen.",
        category: "§ 16 Kassenprüfung"
    });
}).then(vereinlongtext => console.log(vereinlongtext.category)).catch(error => console.log(error.message)).then(() => {

    //END
    console.log("DONE");
    mongoose.connection.close();
});