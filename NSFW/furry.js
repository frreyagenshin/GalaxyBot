const { MessageEmbed } = require('discord.js');
const booru = require('booru');

module.exports = {
    name: "furry",
    category: "NSFW",
    description: "Searches and finds furry images!",
    usage: "&furry || &r34",
    run: async (client, message, args) => {

    if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')

        if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE')) return message.channel.send('That kind of stuff is not allowed! Not even in NSFW channels!');

        var query = message.content.split(/\s+/g).slice(1).join(" ");
        booru.search('e6', [query], {nsfw: true, limit: 1, random: true })
            .then(booru.commonfy)
            .then(images => {
                for (let image of images) {
                    const embed = new MessageEmbed()
                    .setTitle(`Furry: ${query}`)
                    .setImage(image.common.file_url)
                    .setColor('RANDOM')
                    .setFooter(`Tags: furry ${query}`);
                return message.channel.send({ embed });
                }

            }).catch(err => {
                if (err.name === 'booruError') {
                    return message.channel.send(`No results found for **${query}**!`);
                } else {
                    return message.channel.send(`No results found for **${query}**!`);
                }
})
    }
}