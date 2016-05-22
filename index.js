const SlackBot = require('slackbots');
const config = require('./config')

// create a bot
const bot = new SlackBot({
    token: config.SLACK_API_TOKEN,
    name: confif.SLACK_BOT_NAME
});

const params = {
  as_user:true
}

bot.on('start', () => {
  console.log('starting!')
})

bot.on('message', () => {

})
