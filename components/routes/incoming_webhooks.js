var debug = require('debug')('botkit:incoming_webhooks');

module.exports = function(webserver, controller) {

    debug('Configured /slack/receive url');
    webserver.post('/slack/receive', function(req, res) {
        res.status(200);
        controller.handleWebhookPayload(req, res);

    });

}
