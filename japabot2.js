
const twit = require('twit');                        // twitter library from npm
const fetch = require('node-fetch');                 // fetch to post to slack
const config = require('./config');                  // config for auth
const moment = require('moment');                    // moment library for dates
const request = require('request');                    // moment library for dates

const T = twit(config)                               // twit authentication

const options = {                                    // options to search japacurry's twitter
    screen_name: 'japacurry', 
    count: 1,
    exclude_replies: true
}

// Get twitter context 

const twitterMessage = async () => {
    const result = await T.get('statuses/user_timeline', options, function(err, data, response) {
        const dateFix = new Date(data[0].created_at);
        const prettierDate = moment(dateFix).format('MMMM D Y');
        // console.log(prettierDate + ' - ' + data[0].text);
        //postToSlack(prettierDate + ' - ' + data[0].text)
        if (data[0].text.toLowerCase().includes('free')) {  // looks for keyword 'free' 
            // console.log('FREE MEAT');
            postToSlack(prettierDate + ' - ' + data[0].text + '\nYES FREE MEAT :(');
        } else {
            postToSlack(prettierDate + ' - ' + data[0].text + '\nNO FREE MEAT :(');
        }
})
} 



// fetch post to slack 

const postToSlack = async(text) => {
    await fetch(config.slack_webhook, {
      method: 'POST',
      body: JSON.stringify({"text": text})
    });   
  }

// run

  twitterMessage()


  // const postToSlack = (text) => { 
//    request({
//     uri: config.slack_webhook,
//     method: 'POST',
//     json: {
//         'text': text
//     }
// })
// }

// const fetchTest = async() => {
//     await fetch(url, {
//       method: 'POST',
//       body: JSON.stringify({"text": "TESSF"})
//     });   
//   }

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