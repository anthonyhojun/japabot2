
const twit = require('twit');                        // twitter library from npm
const fetch = require('node-fetch');                 // fetch to post to slack
const config = require('./config');                  // config for auth
const moment = require('moment');                    // moment library for dates



const url = 'https://hooks.slack.com/services/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'
const request = require('request')
const slackMessage = 'hey'



request({
    uri: url,
    method: "POST",
    json: {
        "text": "hey"
    }
})



//   request({
//     uri: url,
//     method: 'POST',
//     json: {
//       "text": "hi"
//     }
//   })