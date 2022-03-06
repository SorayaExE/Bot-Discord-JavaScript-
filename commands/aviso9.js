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
  const desocupado = client.users.cache.get('948819280932261918');
  message.delete().catch(O_o => {});
  const embed = new Discord.MessageEmbed()
  .setColor('#F0E68C')
  .setTitle(`<a:J_butterfly:949191895991586896>𝐓𝐢𝐩𝐨𝐬 𝐝𝐞 𝐩𝐮𝐧𝐢𝐜𝐨𝐞𝐬<a:J_butterfly:949191895991586896>`)
  .setAuthor(`${desocupado.username}`, desocupado.avatarURL())
  .addFields(
    { name: '<:J_dialogo:949182184714031117>𝐋𝐞𝐯𝐞', value: 'Receberá um aviso da Staff.' },
    { name: '<:Y_Kanna_what:712291567506817134>𝐌é𝐝𝐢𝐨', value: 'Mute temporário.' },
    { name: '<:A_ban:949347325086695426>𝐆𝐫𝐚𝐯𝐞', value: 'Ban permanente.' }
  )
  .setTimestamp()
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}