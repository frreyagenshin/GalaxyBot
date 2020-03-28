const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "embed",
    aliases: ["emb"],
    category: "general",
    description: "Creates a embed!",
    usage: "&embed for more details.",
    run: async (client, message, args) => {
        const regex = /{(.+)}/;
        let title = message.content.match(regex);

        const customembed = new MessageEmbed()
        .setTitle(`${title}`);
        message.channel.send(customembed);
    }
}