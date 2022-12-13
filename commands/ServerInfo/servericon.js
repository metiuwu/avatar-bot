const {
    MessageEmbed,
    CommandInteraction
} = require('discord.js')

module.exports = {
    name: 'servericon',
    usage: "+servericon",
    description: 'Shows guild icon',
    execute: async (message, args, client, prefix, ) => {
        const embed = new MessageEmbed()
            .setTitle(`${message.guild.name}, Server Icon` )
            .setColor('BLUE')
            .setImage(message.guild.iconURL({ dynamic: true, size: 1024}))
            message.reply({embeds: [embed]})
        ;
    }
}