// var config = {
//   "BOTS": [{
//     "SLACK_API_TOKEN": "xoxb-44897533749-obLj855ediYvzzfOfKZjbQKI",
//     "SLACK_BOT_NAME": "mathbear",
//     "SLACK_BOT_ID": "<@U1ASDFPN1>"
//     }, {
//     "SLACK_API_TOKEN": "xoxb-44897183238-ky9llHluky8nEkRodbHV3a17",
//     "SLACK_BOT_NAME": "botofwonder",
//     "SLACK_BOT_ID": "<@U1ASD5D70>"
//     }
//   ]
// }

module.exports = {
  bots:{
    botOfWonder:{
      token: process.env.SLACK_BOT_OF_WONDER_TOKEN || '',
      name: 'botofwonder',
      uuid: 'U1ASD5D70'
    },
    mathbear: {
      token: process.env.SLACK_MATHBEAR_TOKEN || '',
      name: "mathbear",
      uuid: "U1ASDFPN1"
    },
    rollbot: {
      token: process.env.SLACK_ROLL_TOKEN || '',
      name: "rollbot",
      uuid: ""
    }
  }
}
