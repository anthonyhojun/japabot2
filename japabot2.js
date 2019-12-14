
const twit = require('twit');                        // twitter library from npm
const fetch = require('node-fetch');                 // fetch to post to slack
const config = require('./config');                  // config for auth
const moment = require('moment');                  // moment library for dates


const T = twit(config)                               // twit authentication

const options = {                                    // options to search japacurry's twitter
    screen_name: 'japacurry', 
    count: 5,
    exclude_replies: true
}

const request = async () => {
    const result = await T.get('statuses/user_timeline', options, function(err, data, response) {
    for(i=0; i<data.length; i++) {                  // for count > 1
        const prettyDate = new Date(data[i].created_at);
        console.log(moment(prettyDate).format('MMMM D Y'));
        if (data[i].text.toLowerCase().includes('free')) {  // looks for keyword 'free' 
            console.log(data[i].text);
        } else {
            console.log('No free meat')
        }
    }

})
} 

request()
