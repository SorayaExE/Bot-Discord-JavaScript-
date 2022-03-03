const Discord = require('discord.js');

exports.run = async (client, message) => {
    message.delete().catch(O_o => {});
    message.channel.send({embed: {
        color: ('RANDOM'),
        author: {
            name: message.author.tag,
            icon_url: client.user.avatarURL
        },
        title: "Entre em contato comigo",
        description: `>Encontrou algum problema? \n>Tem alguma sugestão de comando? \n>Tem alguma duvida? \n>Use o comando d!sugestao.`
    }});
}