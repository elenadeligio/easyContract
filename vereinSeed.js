"use strict";

const mongoose = require("mongoose"),
    Vereintext = require("./models/vereintext");
mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/easycontract",
    { useNewUrlParser: true}
);

Vereintext.deleteMany({}).then(() => {

    // § 1 Name, Sitz
    return Vereintext.create({
        vereintext: "1. Der Verein führt den Namen ________________.",
        category: "§ 1 Name, Sitz"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "2. Er soll in das Vereinsregister eingetragen werden und führt danach den Zusatz “e. V.“",
        category: "§ 1 Name, Sitz"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "3. Der Sitz des Vereins ist ______________.",
        category: "§ 1 Name, Sitz"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {

    // § 2 Zweck
    return Vereintext.create({
        vereintext: "1. Der Zweck des Vereins ist ______________.",
        category: "§ 2 Zweck"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "2. Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige / mildtätige / kirchliche Zwecke (nicht verfolgte Zwecke streichen) im Sinne des Abschnitts “Steuerbegünstigte Zwecke“ der Abgabenordnung. Der Verein ist selbstlos tätig; er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke. Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus Mitteln des Vereins. Es darf keine Person durch Ausgaben, die dem Zweck der Körperschaft fremd sind oder durch unverhältnismäßig hohe Vergütungen begünstigt werden.",
        category: "§ 2 Zweck"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {

    // § 3 Mitgliedschaft
    return Vereintext.create({
        vereintext: "1. Mitglied des Vereins kann jede natürliche Person werden. (gegebenenfalls auch juristische Personen)",
        category: "§ 3 Mitgliedschaft"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "2. Über die Aufnahme entscheidet nach schriftlichem Antrag der Vorstand. Bei Minderjährigen ist der Aufnahmeantrag durch die gesetzlichen Vertreter zu stellen.",
        category: "§ 3 Mitgliedschaft"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "3. Der Austritt aus dem Verein ist jederzeit zulässig (eventuell unter Einhaltung einer bestimmten Frist). Er muss schriftlich gegenüber dem Vorstand erklärt werden.",
        category: "§ 3 Mitgliedschaft"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "4. Ein Mitglied kann aus dem Verein ausgeschlossen werden, wenn sein Verhalten in grober Weise gegen die Interessen des Vereins verstößt. Über den Ausschluss entscheidet die Mitgliederversammlung.",
        category: "§ 3 Mitgliedschaft"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "5. Die Mitgliedschaft endet mit dem Tod des Mitglieds (bei juristischen Personen mit deren Erlöschen).",
        category: "§ 3 Mitgliedschaft"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "6. Das ausgetretene oder ausgeschlossene Mitglied hat keinen Anspruch gegenüber dem Vereinsvermögen.",
        category: "§ 3 Mitgliedschaft"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "7. Die Mitglieder haben Mitgliedsbeiträge – .......(Art der Beiträge ist anzugeben, z.B. Geldbeiträge, usw.) – zu leisten. Die Höhe und Fälligkeit der Mitgliedsbeiträge wird durch die Mitgliederversammlung festgesetzt. (Sollen von den Mitglieder bei der Aufnahme in den Verein auch eine Aufnahmegebühr erhoben werden, muss das ebenfalls festgelegt werden.)",
        category: "§ 3 Mitgliedschaft"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {

    // § 4 Vorstand
    return Vereintext.create({
        vereintext: "1. Der Gesamtvorstand des Vereins besteht aus dem 1. Vorsitzenden, dem 2. Vorsitzenden, dem Kassier und dem Schriftführer. (eventuell noch weiteren Vorstandsmitgliedern, die dann zu nennen sind)",
        category: "§ 4 Vorstand"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "2. Der Vorstand im Sinne des § 26 BGB besteht aus dem 1. Vorsitzenden und dem 2. Vorsitzenden. Jeder von ihnen vertritt den Verein einzeln. (Es kann auch bestimmt werden, dass beide den Verein gemeinsam vertreten. Auch kann die Zusammensetzung des Vorstandes nach § 26 BGB und die Vertretungsregelung anders geregelt werden.)",
        category: "§ 4 Vorstand"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "3. Der Vorstand wird von der Mitgliederversammlung auf die Dauer von zwei Jahren gewählt; er bleibt jedoch so lange im Amt bis eine Neuwahl erfolgt ist.",
        category: "§ 4 Vorstand"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {

    // § 5 Mitgliederversammlung
    return Vereintext.create({
        vereintext: "1. Die ordentliche Mitgliederversammlung findet einmal jährlich statt. Außerdem muss eine Mitgliederversammlung einberufen werden, wenn das Interesse des Vereins es erfordert oder wenn mindestens 1/10 der Mitglieder die Einberufung schriftlich unter Angabe des Zwecks und der Gründe verlangt.",
        category: "§ 5 Mitgliederversammlung"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "2. Jede Mitgliederversammlung ist vom Vorstand schriftlich unter Einhaltung einer Einladungsfrist von ... Wochen (die Einladungsfrist sollte mindestens zwei Wochen betragen) und unter Angabe der Tagesordnung einzuberufen.",
        category: "§ 5 Mitgliederversammlung"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "3. Versammlungsleiter ist der 1. Vorsitzende und im Falle seiner Verhinderung der 2. Vorsitzende. Sollten beide nicht anwesend sein, wird ein Versammlungsleiter von der Mitgliederversammlung gewählt. Soweit der Schriftführer nicht anwesend ist, wird auch dieser von der Mitgliederversammlung bestimmt.",
        category: "§ 5 Mitgliederversammlung"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "4. Jede ordnungsgemäß einberufene Mitgliederversammlung ist ohne Rücksicht auf die Zahl der erschienenen Mitglieder beschlussfähig.",
        category: "§ 5 Mitgliederversammlung"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "5. Die Beschlüsse der Mitgliederversammlung werden mit einfacher Mehrheit der abgegebenen gültigen Stimmen gefasst. Zur Änderung der Satzung und des Vereinszwecks ist jedoch eine Mehrheit von 3⁄4 der abgegebenen gültigen Stimmen erforderlich.",
        category: "§ 5 Mitgliederversammlung"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "6. Über die Beschlüsse der Mitgliederversammlung ist ein Protokoll aufzunehmen, das vom Versammlungsleiter und dem Schriftführer zu unterschreiben ist.",
        category: "§ 5 Mitgliederversammlung"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {

    // § 6 Auflösung, Anfall des Vereinsvermögens
    return Vereintext.create({
        vereintext: "1. Zur Auflösung des Vereins ist eine Mehrheit von 4/5 der abgegebenen gültigen Stimmen erforderlich.",
        category: "§ 6 Auflösung, Anfall des Vereinsvermögens"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "2. Bei Auflösung des Vereins, Entzugs der Rechtsfähigkeit oder bei Wegfall steuerbegünstigter Zwecke fällt das Vermögens des Vereins an den / die / das _______________(Bezeichnung einer juristischen Person des öffentlichen Rechts oder einer anderen steuerbegünstigten Körperschaft) zwecks Verwendung für __________________ (Angabe eines bestimmten gemeinnützigen, mildtätigen oder kirchlichen Zwecks).",
        category: "§ 6 Auflösung, Anfall des Vereinsvermögens"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "Augsburg,____________(Datum ergänzen)",
        category: "§ 6 Auflösung, Anfall des Vereinsvermögens"
    });
}).then(vereintext => console.log(vereintext.category)).then(() => {
    return Vereintext.create({
        vereintext: "Unterschriften von mindestens sieben Mitgliedern, die an der Gründung des Vereins teilgenommen haben (Die Unterschriften dürfen nicht auf einem gesonderten Blatt sein)",
        category: "§ 6 Auflösung, Anfall des Vereinsvermögens"
    });
}).then(vereintext => console.log(vereintext.category)).catch(error => console.log(error.message)).then(() => {

    //END
    console.log("DONE");
    mongoose.connection.close();
});