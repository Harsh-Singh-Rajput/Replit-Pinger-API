import fetch from "node-fetch";

let start, end, total = 0;          //for calculating how much time is taken to ping the site

async function pingSite(files) {
  try {
    
    if (files.length){
        total = 0;
        for (let i = 0; i < files.length; ++i) {
          start = Date.now() / 1000;
          const { fullUrl } = files[i];
          let res = await fetch(fullUrl);
          end = Date.now() / 1000;
          let time = parseFloat((end - start).toFixed(3));
          console.log(i, fullUrl, time);
          total += time;
        }
        console.log("All ping task completed");
        console.log("Elapsed Time", total.toFixed(3), "sec");
        return true;
    }
    console.log('No ping task Available');
  } catch (error) {
    console.log("error", error);
    return false
  }
}


export default pingSite;
