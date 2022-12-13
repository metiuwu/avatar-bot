const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'serverinfo',
  usage: "+serverinfo",
  description: 'Shows guild info',
    async execute(interaction, message, args) {
        const guild = args[0]
        const owner = await interaction.guild.fetchOwner();
        let guildDescription = guild.description
    if (!guildDescription) {
      guildDescription = 'None'
    }


    const embed = new MessageEmbed()
    .setTitle('Server Info')
    .setDescription('Returns information about the server.')
    .setThumbnail(guild.iconURL({ dynamic: true, size: 1024}))
    .setImage(guild.bannerURL({ dynamic: true, size: 1024, format: message.guild.banner.startsWith("a_") ? "gif": "png"}))
    .addFields({
                name: 'Name',
                value: `**${guild.name}**`,
                inline: true
              },
              {
                name: 'ID',
                value: `**${guild.id}**`,
                inline: true
              },
              {
                name: 'Description',
                value: `**${guildDescription}**`,
                inline: true
              },
              {
                name: 'Created at',
                value: `**${guild.createdAt.toDateString()}**`,
                inline: true
              },
              {
                name: 'Owner',
                value: `**${owner.user.tag}**`,
                inline: true
              },
              {
                name: 'Member Count',
                value: `**${guild.memberCount.toString()}**`,
                inline: true
              },
              {
                name: 'Boosts',
                value: guild.premiumSubscriptionCount.toString(),
                inline: true
              },
              {
                name: 'Boost Level',
                value: guild.premiumTier,
                inline: true
              })

    interaction.reply({ embeds: [embed] })
    },
};