const Slackbot = require('slackbots');
const config = require('../config');
const utils = require('./utils');
const getDigits = utils.getDigits;
const onlyMentions = utils.onlyMentions;

function response (bot, action) {
  const result = getDigits(action.text)
  return bot.postMessage(action.channel, findRodResult(result), { as_user: true });
}

function findRodResult(int){
  switch (true) {
    case (int <= 05):
      return 'Target affected by slow for 10 rounds (Will DC 15 negates).'
    case (int <= 10):
      return 'Faerie fire surrounds the target.'
    case (int <= 15):
      return 'Deludes the wielder for 1 round into believing the rod functions as indicated by a second die roll (no save).'
    case (int <= 20):
      return 'Gust of wind, but at windstorm force (Fortitude DC 14 negates).'
    case (int <= 25):
      return 'Wielder learns the target\'s surface thoughts (as with detect thoughts) for 1d4 rounds (no save).'
    case (int <= 30):
      return 'Stinking cloud appears at 30-foot range (Fortitude DC 15 negates).'
    case (int <= 33):
      return 'Heavy rain falls for 1 round in 60-foot radius centered on the rod wielder.'
    case (int <= 36):
      return 'Summons an animal: a rhino (01—25 on d%), elephant (26—50), or mouse (51—100).'
    case (int <= 46):
      return 'Lightning bolt (70 foot long, 5 foot wide), 6d6 points of damage (Reflex DC 15 half).'
    case (int <= 49):
      return 'A stream of 600 large butterflies pours forth and flutters around for 2 rounds, blinding everyone within 25 foot (Reflex DC 14 negates).'
    case (int <= 53):
      return 'Target is affected by enlarge person if within 60 feet of rod (Fortitude DC 13 negates).'
    case (int <= 58):
      return 'Darkness, 30-foot-diameter hemisphere, centered 30 feet away from rod.'
    case (int <= 62):
      return 'Grass grows in 160-square-foot area before the rod, or grass existing there grows to 10 times its normal size.'
    case (int <= 65):
      return 'Any nonliving object of up to 1,000 pounds of mass and up to 30 cubic feet in size turns ethereal.'
    case (int <= 69):
      return 'Reduce wielder two size categories (no save) for 1 day.'
    case (int <= 79):
      return 'Fireball at target or 100 feet straight ahead, 6d6 points of damage (Reflex DC 15 half).'
    case (int <= 84):
      return 'Invisibility covers the rod\'s wielder.'
    case (int <= 87):
      return 'Leaves grow from the target if within 60 feet of the rod. These last 24 hours.'
    case (int <= 90):
      return '10—40 gems, value 1 gp each, shoot forth in a 30-foot-long stream. Each gem deals 1 point of damage to any creature in its path: roll 5d4 for the number of hits and divide them among the available targets.'
    case (int <= 95):
      return 'Shimmering colors dance and play over a 40-foot-by-30-foot area in front of rod. Creatures therein are blinded for 1d6 rounds (Fortitude DC 15 negates).'
    case (int <= 97):
      return 'Wielder (50% chance) or the target (50% chance) turns permanently blue, green, or purple (no save).'
    case (int <= 100):
      return 'Flesh to stone (or stone to flesh if the target is stone already) if the target is within 60 feet (Fortitude DC 18 negates).'
    default:
      return findRodResult(utils.random.integer(1,100));
  }
}

module.exports = (config) => {
  const token = config.token;
  const name = config.name;
  const uuid = config.uuid;
  const bot = new Slackbot({ token, name });
  const mentionAction = (action) => response(bot, action);
  bot.on('start', () => { console.log(`starting ${name}!`) })
  bot.on('message', action => onlyMentions(action, uuid, mentionAction))
}
