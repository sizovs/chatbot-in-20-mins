module.exports = controller => {
  
    controller.hears(['^say (.*)','^say'], 'direct_mention', (bot, message) => {
      
        const thingToSay = message.match[1];
        if (thingToSay) {
            bot.reply(message, thingToSay);
        } else {
            bot.reply(message, 'I will repeat whatever you say.')
        }
      
    });

};
