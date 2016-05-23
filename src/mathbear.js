const SlackBot = require('slackbots');
const config = require('../config');
const utils = require('./utils');

//mathbear consts
const MATHBEAR = config.BOTS[0];
// create mathbear bot
const mathbear = new SlackBot({
    token: MATHBEAR.SLACK_API_TOKEN,
    name: MATHBEAR.SLACK_BOT_NAME
});

const params = {
  as_user:true
}

mathbear.on('start', () => {
  console.log('starting mathbear!')
})

mathbear.on('message', (action) => {
  utils.onMention(action,MATHBEAR.SLACK_BOT_ID, mathbearResponse)
})


function mathbearResponse(response){
  // remove all clutter from the text.
  const responseDigits = response.replace(/(\<(.*?)\>)|\D/g,'')
  const parseRemainder = parseInt(responseDigits, 10)
  //if we get a usable result, mathbear will respond
  if (Number.isInteger(parseRemainder)){
    console.log('MATHBEAR IS MATHING', parseRemainder)
    mathbear.postMessageToChannel('general', utils.random.integer(1,parseRemainder), params);
  }
}
