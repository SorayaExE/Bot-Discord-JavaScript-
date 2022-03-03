exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")){

        const soraya = client.users.cache.get('594251581789044756');
        const pa = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription('Você é fraco, lhe falta permissão do ademir para usar esse comando')
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
        return message.reply(pa)
    }

    if (!args.join(' ')) return message.channel.send({embed: {
        title: "Uso incorreto !",
        description: "Uso correto: votaçao <titulo> \nEx. votação Devemos banir fulano do servidor?",
        footer: {
            icon_url: message.author.avatarURL,
            text: `Comando utilizado por ${message.author.username}`
        },
        color: 13632027,
        timestamp: new Date()
    }});

    message.delete();

    message.channel.send({embed: {
        title: args.join(' '),
        footer: {
            text: `Votação iniciada por ${message.author.username}`
        },
        color: 8463563,
        timestamp: new Date()
    }}).then((message) => {
        message.react("✅");
        message.react("❌");
     });
     message.channel.send('@everyone').then(marcados =>
        marcados.delete()
      )
    };