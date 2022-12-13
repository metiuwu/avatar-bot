const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
 

module.exports={
    name: 'avatar',
    usage: "+avatar [user]", 
    description: "Shows the user avatar",
    execute: async (message, args, client, prefix) => {


        const user = args.length > 0 ? message.mentions.users.first() || await client.users.fetch(args[0]) || message.author : message.author
                const url = user.displayAvatarURL({dynamic:true, size:1024})

                const embed = new MessageEmbed()
                    .setTitle(`${user.tag}'s Avatar`)
                    .setImage(url)
                    .setColor("#2F3136");

                message.reply({
                    embeds: [embed]
                })
    }
}