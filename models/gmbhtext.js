const mongoose = require("mongoose"),
    { Schema } = require("mongoose");

gmbhtextSchema = new Schema(
    {
        gmbhtext: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ["§ 1 Firma und Sitz",
                   "§ 2 Gegenstand",
                   "§ 3 Stammkapital und Geschäftsanteile",
                   "§ 4 Verfügung über Geschäftsanteile",
                   "§ 5 Einziehung, Amortisation",
                   "§ 6 Abfindung ausscheidender Gesellschafter",
                   "§ 7 Geschäftsführer",
                   "§ 8 Vertreter",
                   "§ 9 Gesellschafterversammlungen",
                   "§ 10 Gesellschafterbeschlüsse",
                   "§ 11 Geschäftsjahr",
                   "§ 12 Jahresabschluss, Ergebnisverwendung",
                   "§ 13 Wettbewerbsverbot",
                   "§ 14 Dauer der Gesellschaft",
                   "§ 15 Kündigung der Gesellschaft",
                   "§ 16 Tod eines Gesellschafters",
                   "§ 17 Beendigung der Gesellschaft",
                   "§ 18 Gründungsaufwand",
                   "§ 19 Schlichtungs-/ Mediationsvereinbarung",
                   "§ 20 Salvatorische Klausel"]
        }
    }
);

module.exports = mongoose.model("Gmbhtext", gmbhtextSchema);