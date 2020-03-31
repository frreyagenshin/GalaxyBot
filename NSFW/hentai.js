const superagent = require("snekfetch");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "hentai",
    category: "NSFW",
    description: "Generates and finds random hentai pictures!",
    usage: "&hentai",
    run: async (client, message, args) => {
        if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
        superagent.get('https://nekos.life/api/v2/img/hentai')
            .end((err, response) => {
          const lewdembed = new MessageEmbed()
          .setTitle("Hentai")
          .setImage(response.body.url)
          .setColor("RANDOM")
          .setFooter(`Tags: hentai`);
      message.channel.send(lewdembed);
        })
        
    }
}