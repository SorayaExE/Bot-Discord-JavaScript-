const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")){

        const soraya = client.users.cache.get('594251581789044756');
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription('Vocรช รฉ fraco, lhe falta permissรฃo do ademir para usar esse comando')
        .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
        return message.reply(embed)
    }
  let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  const desocupado = client.users.cache.get('948819280932261918');
  message.delete().catch(O_o => {});
  const embed = new Discord.MessageEmbed()
  .setColor('#DA70D6')
  .setTitle(`<a:e_nitro:949192727403319337> ๐๐๐ง๐ญ๐๐ ๐๐ง๐ฌ ๐๐ ๐๐๐ซ ๐๐จ๐จ๐ฌ๐ญ ๐ง๐จ ๐ฌ๐๐ซ๐ฏ๐๐ซ <a:e_nitro:949192727403319337>`)
  .setAuthor(`${desocupado.username}`, desocupado.avatarURL())
  .addFields(
    { name: '๐๐๐ซ๐ ๐จ ๐๐ฑ๐๐ฅ๐ฎ๐ฌ๐ข๐ฏ๐จ:', value: 'หโโฟ ๐ตBurguesia เญงโน ' },
    { name: '๐๐๐ซ๐ ๐จ:', value: 'โ โฆ  ๐ Gado Desocupado โโบหณ ' },
    { name: '๐๐จ๐ง๐ก๐จ๐ฌ:', value: '100k de sonhos na Loritta.' },
    { name: '๐๐ฆ๐จ๐ญ๐ ๐๐ฑ๐๐ฅ๐ฎ๐ฌ๐ข๐ฏ๐จ:', value: 'Um emote animado escolhido pelo booster.' },
    { name: '๐๐ซ๐ข๐ฏ๐ข๐ฅ๐๐ ๐ข๐จ๐ฌ:', value: `Enviar imagens no chat <#949751951602647110>` }
  )
  .setTimestamp()
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}    