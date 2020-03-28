const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "serverinfo",
    description: "Pulls the serverinfo of the guild!",
    usage: "&serverinfo || &si || &serverdisc",
    category: "info",
    aliases: ["si", "serverdesc"],
    run: async (bot, message, args) => {
        let sEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Guild Name:**", `${message.guild.name}`, true)
        .addField("**Guild Owner:**", `${message.guild.owner}`, true)
        .addField("**Member Count:**", `${message.guild.memberCount}`, true)
        .addField("**Role Count:**", `${message.guild.roles.cache.size}`, true)
        .setFooter(`GalaxyBot | Made by happy_raichu#7925`, bot.user.displayAvatarURL);
    message.channel.send(sEmbed);
    }
}