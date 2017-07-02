module.exports = controller => {

    controller.on('user_channel_join', (bot, message) => {

        bot.reply(message, `Hello, ${message.user}`);

    });

}
