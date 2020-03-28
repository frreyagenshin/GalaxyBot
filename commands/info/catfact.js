const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "catfact",
    category: "fun",
    description: "Generate and find cat facts!",
    usage: "&catfact",
    run: async (client, message, args) => {

        let msg = await message.channel.send("Generating...")

        fetch(`https://some-random-api.ml/facts/cat`).then(res => res.json()).then(body => {
            if(!body) return message.channel.send("Unable to fetch cat facts!");

            const catfactembed = new MessageEmbed()
            .setAuthor(`${client.user.username} CAT FACTS!`)
            .setColor("RANDOM")
            .setTitle(body.fact)
            .setTimestamp()
            .setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL);

            message.channel.send(catfactembed);
            msg.delete();

        })
    }
}