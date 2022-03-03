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
  .setColor('RANDOM')
  .setTitle(`<a:oveia:715776701677961297>Requisitos para parceria Desocupados<a:oveia:715776701677961297>`)
  .setAuthor('Desocupado-Bot', 'https://i.imgur.com/f5dzzNq.png')
  .addFields(
    { name: 'Quantos membros o server precisa ter?', value: '170 membros ou mais.' },
    { name: 'Precisa de alguma tag de parceiros?', value: 'O server obrigatoriamente tem que ter um chat e uma tag para parceiros.' },
    { name: 'No mínimo quantos staffs?', value: 'O server precisa no mínimo ter 3 staffs ativos.' },
    { name: 'Caso cumpra os requisitos chame o', value: `Oruzakッ#1828  no privado` }
  )
  .setTimestamp()
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}               
