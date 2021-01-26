const app = require("express")();
const port = 6999;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const {putInRespectiveDir} = require("./organiser.js");

app.post("/api/create", async (req, res) => {
    const info = req.body;
    console.log(info);

    try {
        await putInRespectiveDir(info);
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

app.listen(port, () => console.log(`Backend: listening to port: ${port}`));