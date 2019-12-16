
const twit = require('twit');                        // twitter library from npm
const fetch = require('node-fetch');                 // fetch to post to slack
const config = require('./config');                  // config for auth
const moment = require('moment');                    // moment library for dates
const request = require('request');                    // moment library for dates


const T = twit(config)                               // twit authentication

const options = {                                    // options to search japacurry's twitter
    screen_name: 'japacurry', 
    count: 5,
    exclude_replies: true
}

// Get twitter context 

const twitterMessage = async () => {
    const result = await T.get('statuses/user_timeline', options, function(err, data, response) {
    for(i=0; i<data.length; i++) {                  // for count > 1
        const dateFix = new Date(data[i].created_at);
        const prettierDate = moment(dateFix).format('MMMM D Y');
        if (data[i].text.toLowerCase().includes('free')) {  // looks for keyword 'free' 
            console.log(prettierDate + ' - ' + data[i].text);
        } else {
            console.log(prettierDate + ' - ' +'No free meat =(');
        }
    }

})
} 

twitterMessage()

const postToSlack = () => { 
   request({
    uri: config.slack_webhook,
    method: 'POST',
    json: {
        'text': 'text'
    }
})
}



// const twitterMessage = async () => {
//     const result = await T.get('statuses/user_timeline', options, function(err, data, response) {
//     for(i=0; i<data.length; i++) {                  // for count > 1
//         const dateFix = new Date(data[i].created_at);
//         const prettierDate = moment(dateFix).format('MMMM D Y');
//         if (data[i].text.toLowerCase().includes('free')) {  // looks for keyword 'free' 
//             console.log(prettierDate + ' - ' + data[i].text);
//         } else {
//             console.log(prettierDate + ' - ' +'No free meat =(');
//         }
//     }

// })
// } 