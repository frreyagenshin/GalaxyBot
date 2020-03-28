const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "meme",
    category: "images",
    description: "Generate and find memes!",
    usage: "@meme",
    run: async (client, message, args) => {

        let msg = await message.channel.send("Generating...")

        fetch("https://apis.duncte123.me/meme")
        .then(res => res.json()).then(body => {
            if(!body || !body.data.image) return message.reply("whoops! I've broke, try again!")
    
            let mEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`${client.user.username} MEMES!`, message.guild.iconURL)
            .setImage(body.data.image)
            .setTimestamp()
            .setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL);

                message.channel.send(mEmbed)
                msg.delete();

            })
        }
    }