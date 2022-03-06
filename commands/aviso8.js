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
  .setDescription('')
  .addFields(
    { name: '0️⃣ 👉@๑˚₊ ⇢ Preto ｡ﾟ･', value: "\u200B"},
    { name: 'Hetero', value: '<a:U_pepo_pato:949191315025981460>' },
    { name: 'Indefinido', value: '<a:U_pepo_rgb:714717157656756235>'}
  )
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}