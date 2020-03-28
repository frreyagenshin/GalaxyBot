module.exports = {
        name: "shutdown",
        description: "Shuts down the bot!",
        usage: "&shutdown",
        category: "owner",
        aliases: ["botstop", "off", "stop", "end"],
        run: async (bot, message, args) => {

    if(message.author.id != "685371966022352928") return message.channel.send("You're not the bot the owner!")

    try {
        await message.channel.send("Bot is shutting down...")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
    


    }
}