declare module 'discord.js-self' {
    export default {
        Client: (await import('discord.js')).Client
    };
}
