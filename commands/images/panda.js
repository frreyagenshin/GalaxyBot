const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "panda",
    category: "images",
    description: "Generate and find panda pictures!",
    usage: "&panda",
    run: async (client, message, args) => {

        let msg = await message.channel.send("Generating...")

        fetch(`https://some-random-api.ml/img/panda`).then(res => res.json()).then(body => {
            if(!body) return message.channel.send("Unable to fetch panda pictures!");

            const pandaembed = new MessageEmbed()
            .setAuthor(`${client.user.username} PANDA PICTURES!`)
            .setColor("RANDOM")
            .setImage(`${body.link}`)
            .setTimestamp()
            .setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL);

            message.channel.send(pandaembed);
            msg.delete();

        })
    }
}