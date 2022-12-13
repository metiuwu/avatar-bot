const {
    MessageEmbed,
    CommandInteraction,
    Client,
    MessageButton,
    MessageActionRow
} = require("discord.js")
module.exports = {
    name: "invite",
    description: "get my invite link",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {MessageButton} MessageButton
     * @param {MessageActionRow} MessageActionRow
     */
     run: async (client, interaction) => {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setLabel("Invite Me!")
                .setStyle("LINK")
                .setURL(`https://discord.com/api/oauth2/authorize?client_id=934189357693280366&permissions=8&scope=bot%20applications.commands`)
            )
            .addComponents(
                new MessageButton()
                .setLabel("My Developer")
                .setStyle("LINK")
                .setURL(`https://discord.com/users/368813104668213250`)
            )
            .addComponents(
                new MessageButton()
                .setLabel("My Developer Github")
                .setStyle("LINK")
                .setURL(`https://github.com/metiuwu`)
            )
        await interaction.reply({
            content: `Hey You can invite the bot from the options below and check my developer`,
            components: [row],
        })
    }
}