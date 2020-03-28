const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
        
module.exports = {
    name: "weather",
    aliases: ["temp"],
    category: "info",
    description: "Gives the weather.",
    usage: "&weather <location>",
    run: async (client, message, args) => {
        let apiKey = "aeaef738dc329791e586cd55ea655179";
        let arg = message.content.split(" ").join(" ").slice(10);

        if(!arg) return message.channel.send(`${message.author}, I need a valid city to check!`)

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=` + arg + '&APPID=' + apiKey + '&units=metric').then(res => {
            return res.json();
        }).then(json => {
            if(json.main === undefined) return message.channel.send(`OOF! **${arg}** is an invalid location, meaning it can't be located!`)
            let rise = json.sys.sunrise;
            let Date = new Date(rise * 1000);
            let timestr = date.toLocaleTimeString();
            let set = json.sys.sunset;
            let setdate = new Date(set * 1000);
            let timesstr = setdate.toLocaleTimeString();
            let weather = new MessageEmbed()
            .setColor("RANDOM")
            .setTimestamp()
            .setTitle(`Weather For Region: :flag_${json.sys.country.toLowerCase()}: ${json.name}`)
            .addField("Temperature", `${json.sys.temp}°C`, true)
            .addField("Wind Speed", `${json.wind.speed}M`, true)
            .addField("Humidity", `${json.main.humidity}`, true)
            .addField("Sunrise", `${timestr}`, true)
            .addField("Sunset", `${timesstr}`, true)
            .setFooter(`This is very accurate!`, message.author.displayAvatarURL());
            message.channel.send({weather})
            .catch(console.error);
        }).catch(err => {
            if(err) {
                message.channel.send("Something went wrong while checking the query!")
            }
        });
    },
};


