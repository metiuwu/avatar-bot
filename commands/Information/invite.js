const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "Invite Avatar Bot",
    args: false,
    usage: "",
    permission: [],
   execute: async (message, args, client, prefix) => {
         
         
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
        .setURL(`https://github.com/MetiuwSama`)
    )
    await message.reply({
        content: `Hey You can invite the bot from the options below and check my developer`,
        components: [row],
    })
}}
