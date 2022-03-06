const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")){

        const soraya = client.users.cache.get('594251581789044756');
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription('Você é fraco, lhe falta permissão do ademir para usar esse comando')
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
        return message.reply(embed)
    }
  let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  message.delete().catch(O_o => {});
  const embed = new Discord.MessageEmbed()
  .setColor('#FFE4E1')
  .setTitle('Aqui você poderá escolher a cor que vai ficar no seu nome 👇')
  .setDescription('Como obter cores no server? Clique no emoji relativo a cor que você deseja. Caso nao tenha gostado da cor ou queira trocá-la basta remover a reação antiga e reagir no emoji referente a uma nova cor, caso contrário a cor desejada pode não funcionar.')
  .addFields(
    { name: '🖤👉Preto', value: "\u200B"},
    { name: '🤍👉Branco', value: "\u200B"},
    { name: '💙👉Azul', value: "\u200B"},
    { name: '💚👉Verde', value: "\u200B"},
    { name: '💜👉Roxo', value: "\u200B"},
    { name: '💗👉Rosa escuro', value: "\u200B"},
    { name: '❤️👉Vermelho', value: "\u200B"},
    { name: '🤎👉Marrom', value: "\u200B"},
    { name: '🧡👉Laranja', value: "\u200B"},
    { name: '💛 👉Amarelo', value: "\u200B"}
  )
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}