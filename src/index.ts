import Discord from 'discord.js-self';

// interfaces
import { Message } from 'discord.js';

// modules
import BotAutoReply from './BotAutoReply';

// configs
import config from './config/config.json';

const client = new Discord.Client();

const autoReply = new BotAutoReply(client);

client.on('ready', () => {
    console.log('Started');
    autoReply.loopInteract();
});

client.on('message', (msg) => {
    if (msg.author?.id === client.user?.id) return;

    autoReply.workMsg(msg as Message);
});

client.login(config.token);
