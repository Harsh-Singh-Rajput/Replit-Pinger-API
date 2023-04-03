import express from "express";
import scheduler from "node-cron";
import siteRoute from "./routes/siteRoute.js";
import Connect from "./database/mongodb.js";
import fetchAndPing from "./service/ping.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

scheduler.schedule("30 * * * *", async () => {
    console.log('scheduling task');
    await fetchAndPing();
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/v1/site", siteRoute);


app.listen(PORT, () => {
  console.log("Server started running ");
  Connect();
});