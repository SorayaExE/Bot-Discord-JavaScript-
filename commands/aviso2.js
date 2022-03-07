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
  .setColor('#DA70D6')
  .setTitle(`<a:e_nitro:949192727403319337> 𝐕𝐚𝐧𝐭𝐚𝐠𝐞𝐧𝐬 𝐝𝐞 𝐝𝐚𝐫 𝐁𝐨𝐨𝐬𝐭 𝐧𝐨 𝐬𝐞𝐫𝐯𝐞𝐫 <a:e_nitro:949192727403319337>`)
  .setAuthor(`${desocupado.username}`, desocupado.avatarURL())
  .addFields(
    { name: '𝐂𝐚𝐫𝐠𝐨 𝐞𝐱𝐜𝐥𝐮𝐬𝐢𝐯𝐨:', value: '˚₊✿ 💵Burguesia ୧⊹ ' },
    { name: '𝐂𝐚𝐫𝐠𝐨:', value: '₊ ✦  🐂 Gado Desocupado ⁎⁺˳ ' },
    { name: '𝐒𝐨𝐧𝐡𝐨𝐬:', value: '100k de sonhos na Loritta.' },
    { name: '𝐄𝐦𝐨𝐭𝐞 𝐞𝐱𝐜𝐥𝐮𝐬𝐢𝐯𝐨:', value: 'Um emote animado escolhido pelo booster.' },
    { name: '𝐏𝐫𝐢𝐯𝐢𝐥𝐞𝐠𝐢𝐨𝐬:', value: `Enviar imagens no chat <#949751951602647110>` }
  )
  .setTimestamp()
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}    