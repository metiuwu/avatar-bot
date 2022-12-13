const { Client, Collection, Intents, Message, Guild, MessageEmbed} = require("discord.js");
const { readdirSync } = require("fs");
const client = new Client({
   shards: "auto",
   intents: [Intents.FLAGS.GUILDS, Intents.
FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES,  Intents.FLAGS.DIRECT_MESSAGES, 
Intents.FLAGS.DIRECT_MESSAGE_TYPING],
    allowedMentions: {
        parse: ["everyone", "roles", "users"],
        repliedUser: true
    },
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]

});
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
client.owner = client.config.ownerID;
client.prefix = client.config.prefix;
client.embedColor = client.config.embedColor;
client.aliases = new Collection();
client.commands = new Collection();
client.categories = readdirSync("./commands/");
client.logger = require("./utils/logger.js");
client.emoji = require("./utils/emoji.json");

require("./handler/Client")(client);

client.on('messageCreate', message => {
    if (message.channel.type == 'DM') {
        const dmlog = client.channels.cache.get("")
        dmlog.send(`**User** ${message.author.tag}\n **User ID** ${message.author.id}\n**Message** ${message.content}`)
    }
})
client.login("ODkwNjI3MTU2MDEzNjQ1ODU1.GktCVs.A6_ISKnCm03SD7x-EBe21D6ufPHUeN5jdVSsfo");
