const fs = require("fs").promises;
const path = require("path");

let rss = ''

const displayShows = (data) => {
    let today = new Date()
    let i = 0;
    for(var show of data){
        let releaseDate = new Date(show.ReleaseTime);
        if(releaseDate < today ) {
            i++;
            if(i <=300) {
                console.log(i, "READY", show.Title, show.ReleaseTime);
               rss +="<item>" + show.Title + "</item>"
            }  
        } 
    }
  }


exports.handler = async () => {
  try {
    const content = await fs.readFile(path.join(__dirname, "podcast.json"), {
      encoding: "utf-8"
    });
    const shows = JSON.parse(content)
    displayShows(shows)
    //  shows.forEach(show => {
    //      console.log(`${show.Title}`);
    //  });   
    return {
      statusCode: 200,
      body: rss
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e
    };
  }
};