const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const axios = require('axios')

module.exports={
	name: 'banner',
	usage: "+banner [user]",
	description: "Shows users banner",
	execute: async (message, args, client, prefix) => {
        let user = args.length > 0 ? message.mentions.users.first() || await client.users.fetch(args[0]) || message.author : message.author
        axios.get(`https://discord.com/api/v9/users/${user.id}`, {
            headers: {
                Authorization: `Bot ${client.config.token}`,
            },
        }).then((res) => {
            const {
                banner,
                accent_color
            } = res.data

            console.log()
            if (banner) {
                const extension = banner.startsWith("a_") ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}?size=2048`;

                const embed = new MessageEmbed()
                    .setTitle(`${user.tag}'s banner`)
                    .setImage(url)
                    .setColor("RED");

                message.reply({
                    embeds: [embed]
                })  }
                else {
                    if (accent_color) {
                        const embed2 = new MessageEmbed()
                            .setDescription(`**${user.tag} does not have a banner!**`)
                            .setImage("https://cdn.discordapp.com/attachments/1040928395862757389/1042019660184440832/image.png")
                            .setColor(accent_color);
                        message.reply({
                            embeds: [embed2]
                        })
                    } else {
                        const embed23 = new MessageEmbed()
                            .setDescription(`**${user.tag} does not have a banner!**`)
                            .setImage("https://cdn.discordapp.com/attachments/1040928395862757389/1042019660184440832/image.png")
                            .setColor(accent_color);
                        message.reply({
                            embeds: [embed23]
                        })
                    }
                }
            })


    }
}
