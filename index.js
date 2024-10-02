const TelegramBot = require('node-telegram-bot-api')

const token = '6772083714:AAE4SwkNuQQZs1rXQKnAlFfeTXpUXQvMdyQ'
const bot = new TelegramBot(token, { polling: true })
const webAppUrl = 'https://main--mozzzarella.netlify.app'

bot.on('message', async msg => {
	const chatId = msg.chat.id
	const text = msg.text

	if (text === '/start') {
		await bot.sendMessage(chatId, 'Снизу кнопка для вызова карты', {
			reply_markup: {
				keyboard: [
					[
						{
							text: 'Открыть карту',
							web_app: { url: webAppUrl + '/map' }
						}
					]
				]
			}
		})
		bot.sendMessage(chatId, 'Нажмите кнопку', {
			reply_markup: {
				inline_keyboard: [
					[{ text: 'Open Web App', web_app: { url: webAppUrl + '/yandexmap' } }]
				]
			}
		})
	}
})
