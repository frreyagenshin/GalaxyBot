const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "report",
    category: "mod",
    description: "Reports a member",
    usage: "@report <mention, id>",
    run: async (client, message, args) => {
        let rMember = message.mentions.members.first()

        if (!rMember)
            return message.reply("Couldn't find that person?")

        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.channel.send("Can't report that member")

        if (!args[1])
            return message.channel.send("Please provide a reason for the report")
        
        const channel = message.channels.cache.find(channel => channel.name === "reports");
            
        if (!channel)
            return message.channel.send("Couldn't find a `#reports` channel")

        const embed = new MessageEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Reported member", rMember.user.displayAvatarURL)
            .setDescription(stripIndents`**- Member:** ${rMember} (${rMember.user.id})
            **- Reported by:** ${message.member}
            **- Reported in:** ${message.channel}
            **- Reason:** ${args.slice(1).join(" ")}`);

        return channel.send(embed);
    }
}