"use strict";

const mongoose = require("mongoose"),
    Link = require("./models/link");
mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/easycontract",
    { useNewUrlParser: true}
);

Link.deleteMany({}).then(() => {

    // Allgemein
    return Link.create({
        title: "Cloud:",
        url: "https://start-right.unternehmens.cloud",
        label: "Allgemein"
    });
}).then(link => console.log(link.label)).then(() => {
	return Link.create({
        title: "Leitfaden - StartRight:",
        url: "https://start-right.unternehmens.cloud/apps/files/?dir=/Start%20Right/Sonstiges/Start%20Right%20Leitf%C3%A4den&openfile=23588",
        label: "Allgemein"
    });
}).then(link => console.log(link.label)).then(() => {
    
// Berater
    return Link.create({
        title: "Leitfaden - Vereinsrecht:",
        url: "https://www.bmj.de/SharedDocs/Publikationen/DE/Leitfaden_Vereinsrecht.html",
        label: "Berater"
    });
}).then(link => console.log(link.label)).then(() => {
	return Link.create({
        title: "Literatur - Vereinsrecht:",
        url: "https://start-right.unternehmens.cloud/apps/files/?dir=/Start%20Right/Beratung/Material%20zum%20Gesellschaftsrecht%20 (Literatur%2C%20%C3%9Cbersichten%2C%20Leitf%C3%A4den%2C%20Vortr%C3%A4ge) &fileid=2180",
        label: "Berater"
    });
}).then(link => console.log(link.label)).then(() => {

//Orga    
    return Link.create({
        title: "Beratungsressort - Vorlagen:",
        url: "https://start-right.unternehmens.cloud/apps/files/?dir=/Start%20Right/Beratung/Checklisten%2C%20Formulare%2C%20Vorlagen%2C%20E-Mails/Orga-Team%20Beratung/Beratungsressort&fileid=37718",
        label: "Orga"
    });
}).then(link => console.log(link.label)).then(() => {

    return Link.create({
        title: "Ausbildungsressort - Übersicht Ausbildungsveranstaltungen:",
        url:"https://start-right.unternehmens.cloud/apps/files/?dir=/Start%20Right/Ausbildung/Ausbildungsveranstaltungen&fileid=2198",
        label: "Orga"
    });
}).then(link => console.log(link.label)).catch(error => console.log(error.message)).then(() => {

    //END
    console.log("DONE");
    mongoose.connection.close();
});