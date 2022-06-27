const { Telegraf } = require('telegraf')

let range = 1292
const bot = new Telegraf("5409192900:AAFYd6IvCgBA5o4n6VlRlYoVX7XFUY-yFKw")
bot.start((ctx) => ctx.reply('Hello, user'))
bot.hears(`h`, (ctx) => {
    ctx.reply(`${range}`)
    range = range - 5
})
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
