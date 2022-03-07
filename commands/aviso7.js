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
  .setColor('#DA70D6')
  .setTitle('Qual é o seu elo?')
  .addFields(
    { name: '<:c_ferro:950200841804058684>Ferro', value: "\u200B"},
    { name: '<:c_bronze:950200860108017755>Bronze', value: "\u200B"},
    { name: '<:c_prata:950200879800287382>Prata', value: "\u200B"},
    { name: '<:c_ouro:950200901061210112>Ouro', value: "\u200B"},
    { name: '<:c_platina:950200916898898001>Platina', value: "\u200B"},
    { name: '<:c_diamante:950200933806120960>Diamante', value: "\u200B"},
    { name: '<:c_mestre:950200953267716096>Mestre', value: "\u200B"},
    { name: '<:c_graomestre:950200967897423872>Grão-Mestre', value: "\u200B"},
    { name: '<:c_desafiante:950200982082576394>Desafiante', value: "\u200B"}
  )
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}