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
