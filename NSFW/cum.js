const superagent = require("snekfetch");
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "cum",
    category: "NSFW",
    description: "Generates hentai cum images!",
    usage: "&cum",
    run: async (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
        superagent.get('https://nekos.life/api/v2/img/cum')
        .end((err, response) => {
        const lewdembed = new MessageEmbed()
        .setTitle("Hentai")
        .setImage(response.body.url)
        .setColor('RANDOM')
        .setFooter(`Tags: cum`);
        message.channel.send(lewdembed);
})
    }
}