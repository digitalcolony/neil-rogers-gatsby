const fs = require("fs").promises;
const path = require("path");

const Podcast = require('podcast')

function myFormat(dateTime) {
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var dateString = months[dateTime.getMonth()] + ' ' + dateTime.getDate() + ', ' + dateTime.getFullYear();
  
  return dateString + '  04:00:00 GMT';
}

const today = new Date()
const pubDate = myFormat(today);

/* lets create an rss feed */
const feed = new Podcast({
    title: 'Neil Rogers Show',
    description: 'Archived radio shows from Miami Radio Legend Neil Rogers. For more information, visit https://neilrogers.org.',
    feed_url: 'https://neilrogers.org/podcast/',
    site_url: 'https://neilrogers.org/',
    image_url: 'https://neilrogers.org/neil-rogers1400.jpg',
    author: 'NeilRogers.org',
    copyright: '1976-2009 The Neil Rogers Show',
    language: 'en',
    categories: ['Comedy','News','Music'],
    pubDate: pubDate, 
    ttl: 60,
    itunesAuthor: 'NeilRogers.org',
    itunesSubtitle: 'NEIL God!',
    itunesSummary: 'Archived radio shows from Miami Radio Legend Neil Rogers. For more information, visit https://neilrogers.org.',
    itunesOwner: { name: 'NeilRogers.org', email: 'audio@neilrogers.org' },
    itunesExplicit: true,
    itunesCategory: [{
        text: 'Comedy',
    }],
    itunesImage: 'https://neilrogers.org/neil-rogers1400.jpg'
});

const addShowsToFeed = (data) => {
    let today = new Date()
    let i = 0;
    for(var show of data){
        let releaseDate = new Date(show.ReleaseTime);
        if(releaseDate < today ) {
            i++;
            if(i <=300) {
               /* loop over data and add to feed */
                feed.addItem({
                    title: show.Title,
                    description: show.Notes,
                    url: show.mp3url, // link to the item
                    //guid: show.uuid, // optional - defaults to url
                    author: 'NeilRogers.org', // optional - defaults to feed author property
                    date: show.ReleaseTime, // any format that js Date can parse.
                    enclosure: {
                      url: show.mp3url,
                      size: show.FileSize,
                      type: "audio/mpeg"
                    },
                    itunesAuthor: 'NeilRogers.org',
                    itunesExplicit: true,
                    itunesSubtitle: 'Neil God!',
                    itunesSummary: show.Notes,
                    itunesDuration: show.Duration,
                    itunesNewFeedUrl: 'https://neilrogers.org',
                });
            }  
        } 
    }
  }



// cache the xml to send to clients


exports.handler = async () => {
  try {
    const content = await fs.readFile(path.join(__dirname, "podcast.json"), {
      encoding: "utf-8"
    });

    const shows = JSON.parse(content)
    addShowsToFeed(shows);

    const xml = feed.buildXml();
   
    return {
      statusCode: 200,
      body: xml
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e
    };
  }
};