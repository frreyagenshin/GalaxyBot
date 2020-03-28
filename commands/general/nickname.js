const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "nickname",
    aliases: ["nick"],
    category: "general",
    description: "Change your nickname!",
    usage: "@nick <nickname> | &nick reset",
    run: async (client, message, args) => {

        let nickmemberid = message.member.id
        let nickmember = message.member
        let nickname = args.slice(0).join(" ");
        if(!nickname) return message.channel.send(`${message.author}, please provide a nickname!`)

        message.channel.send("Changing nickname...").then(m => {
        
        message.guild.members.cache.get(nickmemberid).setNickname(`${nickname}`)
        const nickembed = new MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(client.user.displayAvatarURL())
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setDescription(`${nickmember}, you have successfully changed your nickname to ${nickname}!`);

        if(args[0] === "reset") {

            let original_nick = message.author.username
            message.guild.members.cache.get(nickmemberid).setNickname(`${original_nick}`)
            nickembed.setDescription(`${nickmember}, you have successfully reset your nickname!`);
            setTimeout(() => {
                m.edit(nickembed)  
              }, 2000);
        } else {
            m.edit(nickembed)
        }
      
        })
    }
}