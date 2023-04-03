import URL from "../models/urlModel.js";
import pingSite from "./run.js";
async function fetchAndUpdate() {
  const files = await URL.find({
    date: { $lt: new Date(Date.now() - 30 * 60 * 1000) },
  });
  console.log("before ping", files);
  await pingSite(files)
  let res = await URL.updateMany(
    { date: { $lt: new Date(Date.now() - 30 * 60 * 1000) } },
    {
      date: new Date(Date.now()),
    }
  );
  console.log("after ping", res);
}
export default fetchAndUpdate;
