const superagent = require("snekfetch");
const { MessageEmbed }= require('discord.js')

module.exports = {
    name: "lewd",
    aliases: ["neko"],
    category: "NSFW",
    description: "Generates a LEWD or neko image!",
    usage: "&lewd || &neko",
    run: async (client, message, args) => {

if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
superagent.get('https://nekos.life/api/v2/img/lewd')
    .end((err, response) => {
  const lewdembed = new MessageEmbed()
  .setTitle("Neko")
  .setImage(response.body.url)
  .setColor('RANDOM')
  .setFooter(`Tags: neko`);
message.channel.send(lewdembed);
})
    }
}
