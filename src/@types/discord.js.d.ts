declare module 'discord.js' {
    export declare interface Message {
        // eslint-disable-next-line no-unused-vars
        lineReply: (content: string) => void;
    }

    export declare interface ChannelTypes {
        messages: import('discord.js').Message;
    }
}
