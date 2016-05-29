const Random = require('random-js');
// creating a random instance to use across bots.
exports.random = new Random(Random.engines.mt19937().autoSeed());

// filter for actions that aren't mentions of this bot.
exports.onlyMentions = (action, id, callback) =>
   action.type === 'message' && action.text.indexOf(id) > -1 ? callback(action) : false

exports.getDigits = (text) => {
  const maybeDigitString = text.replace(/(\<(.*?)\>)|\D/g,'').substring(0,15)
  const maybeInteger = parseInt(maybeDigitString, 10)
  return Number.isInteger(maybeInteger) ? maybeInteger : false;
}
