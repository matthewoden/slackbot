const Random = require('random-js');

function botIsMentioned (slackMessage, botId) { return slackMessage.indexOf(botId) > -1 }

// creating a random instance to use across bots.
exports.random = new Random(Random.engines.mt19937().autoSeed());


exports.onMention = (action, id, callback) => {
  // lots of subactions for message.
  switch (action.type) {
    // handle just a regular message
    case 'message':
      if(action.text && botIsMentioned(action.text, id)){
        return callback(action.text)
      }
      break;

    default:
      break;
  }
}
