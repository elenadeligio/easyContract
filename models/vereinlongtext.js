const mongoose = require("mongoose"),
    { Schema } = require("mongoose");

vereinlongtextSchema = new Schema(
    {
        vereinlongtext: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ["§ 1 Name, Sitz",
                   "§ 2 Zweck, Gemeinnützigkeit des Vereins",
                   "§ 3 Erwerb der Mitgliedschaft",
                   "§ 4 Beendigung der Mitgliedschaft",
                   "§ 5 Rechte und Pflichten der Mitglieder",
                   "§ 6 Aufnahmegebühr und Mitgliedsbeiträge",
                   "§ 8 Vorstand",
                   "§ 9 Aufgaben des Vorstands",
                   "§ 10 Bestand des Vorstands",
                   "§ 11 Vorstandssitzung",
                   "§ 12 Aufgaben der Mitgliederversammlung",
                   "§ 13 Einberufen der Mitgliederversammlung",
                   "§ 14 Beschlussfassung der Mitgliederversammlung",
                   "§ 15 Beirat",
                   "§ 16 Kassenprüfung",
                   "§ 17 Auflösung des Vereins",
                   "§ 19 Satzungsänderungen",
                   "§ 20 Schlussbestimmungen"]
        },
        subcategory: {
            type: String,
            required: true,
            default : "Keine",
            enum: ["Keine", "Antrag", "Aufnahme", "Probezeit", "Gastmitgliedschaft", "Übertragung", "Ehrenmitgliedschaft",
                "Erstattungsregelungen",
                "Vorstandswechsel", "Voraussetzungen", "Wahl", "Dauer", "Fortdauer", "Lebenszeit", "Entlastung", "Nachrücken",
                "Ladung", "Beschlussfähigkeit", "Mehrheit", "Vertretung", "Protokollierung", "Innenverhältnis", "Außenverhältnis", "Vertretungsbefugnis", "Befreiung",
                "Protokoll", "Tonbandaufnahme", "Einberufungsfrist", "Einberufungsform", "Ergänzung", "Versammlung",
                "Leitung", "Öffentlichkeit", "Beschlussfähigkeit", "Mehrheitserfordernisse", "Stichentscheid", "Stimmrecht", "Onlineversammlung"]
        }
    }
);

module.exports = mongoose.model("Vereinlongtext", vereinlongtextSchema);