const Slackbot = require('slackbots');
const utils = require('./utils');
const onlyMentions = utils.onlyMentions;
const getDigits = utils.getDigits;

function response(bot, action) {
  const digits = getDigits(action.text)
  const response = digits ? utils.random.integer(1, digits) : 'Grrr..';
  bot.postMessage(action.channel, response, { as_user:true });
}


module.exports = (config) => {
  const token = config.token;
  const name = config.name;
  const uuid = config.uuid;
  const bot = new Slackbot({ token, name });
  const mentionAction = (action) => response(bot, action);
  bot.on('start', () => { console.log(`starting ${name}!`) })
  bot.on('message', action => {
    onlyMentions(action, uuid, mentionAction)
  })
}
