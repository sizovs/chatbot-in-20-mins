const request = require("request");

module.exports = controller => {

  controller.on('slash_command', (bot, message) => {
    
        if (message.command != "/pic") {
          return;
        }
    
        request.get("http://random.cat/meow", (error, response, body) => {
          
          const url = JSON.parse(body).file;
          bot.reply(message, {
            attachments: [
                {
                    title: "Fabulous cat",
                    image_url: url
                },
                {
                    title: "Would you recommend this cat to your customers?",
                    callback_id: "cat_recommendation",
                    actions: [
                        {
                            name: "recommend",
                            text: "Definitely",
                            type: "button",
                            value: "yes"
                        },
                        {
                            name: "recommend",
                            text: "Hell no!",
                            type: "button",
                            value: "no"
                        }
                    ]
                }
            ]
          });
        });    
  })
  
}