module.exports = controller => {

    controller.on('interactive_message_callback', (bot, trigger) => {

        trigger.actions.forEach(action => {
          
            if (action.name.match(/^recommend/)) {

                var reply = trigger.original_message;

                reply.attachments.forEach(attachment => {
                  attachment.actions = [];
                });

                var person = `<@${trigger.user}>`;
                var text = `${person} has replied ${action.value}`; 

                reply.attachments.push({
                    text: text
                });

                bot.replyInteractive(trigger, reply);
            }
        })
    

    });


}
