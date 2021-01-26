const fs = require("fs");
const path = require("path");

const separator = '-';
const resumeName = "Resume.docx";
const coverLetterName = "Cover Letter.docx";
const linkFile = "link.txt";

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

module.exports.putInRespectiveDir = async (info) => {
    const date = new Date();
    let dir = `${info.company} - ${info.title} - ${
        date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`;

    const month = months[date.getMonth()];
    let dirLocation = path.join(month, dir);

    if (!fs.existsSync(path.join(month))){
        fs.mkdirSync(month);
    }

    fs.mkdirSync(dirLocation, {recursive: true});

    fs.copyFileSync(resumeName, path.join(dirLocation, resumeName));
    fs.copyFileSync(coverLetterName, path.join(dirLocation, coverLetterName));

    fs.writeFileSync(path.join(dirLocation, linkFile), info.link);
};