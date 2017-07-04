# Materials for "Chatbot in 20 minutes" presentation

This repo contains everything you need to get started building a Slack bot with [Botkit](https://botkit.ai). The repo is a modified version of [Botkit Starter Slack](https://github.com/howdyai/botkit-starter-slack) project.

### Getting Started

1. Remix a project on Glitch

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/eduardsi/chatbot-in-20-mins)

2. Change auto-generated project name to one that makes more sense

### Configure Slack
1. Create new Slack application [here](https://api.slack.com/apps)
2. Set `client id` and `client secret` values in `.env` file
2. Set a nice bot icon
4. Open `<OAuth & Permissions>` and set redirect url to `<botUrl>/oauth`
5. Open `<Interactive messages>` and set request url to `<botUrl>/slack/receive`
6. Open `<Event subscriptions>` and set request url to `<botUrl>/slack/receive`
7. Open and enable `<Bot User Events>`. Include all `/message.*/` events
8. Open `<Bot users>`, check `<Always Show My Bot as Online>` and add the bot user
9. Visit the `<botUrl>` and press `<Add to Slack>`

### Let's code!
1. Invite bot to a channel
2. Implement [skills/welcome_on_join.js](https://gist.github.com/eduardsi/f2e31b34ad65bb97c949363a972824a5)
3. Implement [skills/say_something.js](https://gist.github.com/eduardsi/841c35dd500db053fa4cce9ab7db0d8b)
4. Open `<Slash commands>` and set up `/pic` slash command that points to `<botUrl>/slack/receive`. The Slack should prompt  you to reinstall the bot. Follow `<reinstall>` link
5. Implement [skills/pic.js](https://gist.github.com/eduardsi/645d6237503912dd190f06f31df1f4f5)
6. Enhance [skills/pic.js](https://gist.github.com/eduardsi/0f2ea5b0ed0ca49026c0175b5d4ba2fb) with recommendations
7. Implement [skills/respond_on_endorsement.js](https://gist.github.com/eduardsi/c9ec9fc9865709e5a458446b29143570)
