const { Telegraf } = require('telegraf')

const bot = new Telegraf("5409192900:AAFYd6IvCgBA5o4n6VlRlYoVX7XFUY-yFKw")
bot.start((ctx) => ctx.reply('Hello, user'))
bot.hears(`hello`, (ctx) => ctx.reply('Привіт'))
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
