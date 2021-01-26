const fs = require("fs");
const path = require("path");

const separator = '-';
const resumeName = "Resume.docx";
const coverLetterName = "Cover Letter.docx";
const linkFile = "link.txt";

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 

const putInRespectiveFolder = async (dir) => {
    const month = months[new Date().getMonth()];
    const dirLocation = path.join(month, dir);

    if (!fs.existsSync(path.join(month))){
        fs.mkdirSync(month);
    }
    fs.mkdirSync(dirLocation, {recursive: true});

    fs.copyFileSync(resumeName, path.join(dirLocation, resumeName));
    fs.copyFileSync(coverLetterName, path.join(dirLocation, coverLetterName));

    fs.writeFileSync(path.join(dirLocation, linkFile), "");
};

(async () => {
    while (true){
        await sleep(1000);
        
        const dirs = fs.readdirSync(".");
        for (const i in dirs){
            const dir = dirs[i];
            if (dir.includes(separator)){
                console.log(dir);

                await putInRespectiveFolder(dir);
                fs.rmdirSync(dir);
            }
        }
    }
})();