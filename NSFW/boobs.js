const { MessageEmbed } = require('discord.js')
const rp = require('request-promise-native');

module.exports = {
    name: "boobs",
    description: "Generates random boob images!",
    usage: "&boobs",
    category: "NSFW",
    run: async (client, message, args) => {
        
        if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
        return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.oboobs.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {

const lewdembed = new MessageEmbed()
      .setTitle("Boobs")
      .setColor('RANDOM')
      .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])
    message.channel.send(lewdembed);
});
    }
}