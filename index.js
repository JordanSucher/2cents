import express from "express";

const app = express();

app.listen(PROCESS.ENV.PORT || 3000, () => {
    console.log("Listening on port " + PROCESS.ENV.PORT || 3000);
});