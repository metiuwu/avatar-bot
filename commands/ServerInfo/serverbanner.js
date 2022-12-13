const {
    MessageEmbed,
    CommandInteraction
} = require('discord.js')

module.exports = {
    name: 'serverbanner',
    usage: "+serverbanner",
    description: 'Shows guild banner',
    execute: async (message, prefix ) => {
        const embed = new MessageEmbed()
            .setTitle(`${message.guild.name}, Server Banner`)
            .setColor('BLUE')
            .setImage(message.guild.bannerURL({ dynamic: true, size: 1024, format: message.guild.banner.startsWith("a_") ? "gif": "png"}))
            message.reply({embeds: [embed]})
        ;
    }
}