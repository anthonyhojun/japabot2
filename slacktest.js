
const twit = require('twit');                        // twitter library from npm
const fetch = require('node-fetch');                 // fetch to post to slack
const config = require('./config');                  // config for auth
const moment = require('moment');                    // moment library for dates
const request = require('request')
const url = config.slack_webhook






// const data = {
//     "text": "Lorem Ipsum",
//   }

const fetchTest = async() => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({"text": "TESSF"})
  });   
}

fetchTest()

// fetch(url, {
//       method: 'POST', // or 'PUT'
//       body: JSON.stringify('text'), // data can be `string` or {object}!
//     })






// const fetchTest = async () => {
//     const response = await fetch('https://dog.ceo/api/breeds/image/random');
//     const data = await response.json()
//     console.log(data)
// }

// fetchTest()




// fetch(`https://dog.ceo/api/breeds/image/random`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.error(error));



// request({
//     uri: url,
//     method: "POST",
//     json: {
//         "text": "hey"
//     }
// })

