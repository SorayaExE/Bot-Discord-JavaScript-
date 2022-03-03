const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    message.delete();
    const content = args.join(" ");

    if(!args[0]) {
        return message.channel.send({embed: {
            title: "Uso incorreto!",
            description: ">Uso correto: d!sugestao (sugestão).",
            footer: {
                icon_url: message.author.avatarURL,
                text: `Comando utilizado por ${message.author.username}`
            },
            color: 13632027,
            timestamp: new Date()
        }}); 

    } else if (content.lenght > 1000) {
        return message.channel.send({embed: {
            title: "Uso incorreto!",
            description: ">A sua sugestão não pode conter mais de 1000 caracteres.\n>Favor reescreva a sugestão",
            footer: {
                icon_url: message.author.avatarURL,
                text: `Comando utilizado por ${message.author.username}`
            },
            color: 13632027,
            timestamp: new Date()
        }}); 
    } else {
        var canal = message.guild.channels.cache.find(ch => ch.id === "741000394657890407");
        const msg = await canal.send(
            new Discord.MessageEmbed()
            .setColor("RANDOM")
            .addField("Author:", message.author)
            .addField("Conteúdo:", content)
            .setFooter("ID do author: " + message.author.id)
            .setTimestamp()
        );
        await message.channel.send({embed: {
            title: "Sugestão enviada com sucesso!",
            footer: {
                icon_url: message.author.avatarURL,
                text: `Comando utilizado por ${message.author.username}`
            },
            color: 13632027,
            timestamp: new Date()
        }}); 
        
        const emojis = ["✅", "❌"]

        for (const i in emojis){
            await msg.react(emojis[i])
        }
    }

}