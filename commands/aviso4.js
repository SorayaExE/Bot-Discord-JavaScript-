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
.setColor('#DB7093')
.setTitle(`<a:Y_neko:749436573925376061> ๐๐๐ฌ๐จ๐๐ฎ๐ฉ๐๐๐จ ๐๐๐ซ๐ค๐๐ญ <a:Y_neko:749436573925376061>`)
.setDescription('Benefรญcios para vips no Desocupados:')
.setAuthor(`${desocupado.username}`, desocupado.avatarURL())
.addFields(
  { name: '<a:Y_cafe:749473046074622023>๐๐๐ฌ๐จ๐๐ฎ๐ฉ๐๐๐จ', value: `Permissรฃo para enviar imagens no chat<#949751951602647110> \n200k na economia \nTag exclusiva (Desocupado) \nSala Vip` },
  { name: '<a:L_bongo_cat:949191419447357530>๐๐๐ฌ๐จ๐๐ฎ๐ฉ๐๐๐จ ๐ฉ๐ฅ๐ฎ๐ฌ ', value: `Permissรฃo para enviar imagens no chat<#949751951602647110> \n500k na economia \nTag exclusiva (Desocupado Plus) \nSala vip \nNitro classic (1 mรชs)` },
  { name: '<a:Y_Nezuko_jump:949186370834956289>๐๐๐ฌ๐จ๐๐ฎ๐ฉ๐๐๐จ ๐ฆ๐๐ ๐ง๐๐ญ๐', value: `Sala e call exclusiva para vocรช e seus amigos \nSorteios vips \nPermissรฃo para adicionar emojis \nDiscord Nitro (1 mรชs) \n1kk na economia \nTag exclusiva (Desocupado Magnata)` }
)
.setTimestamp()
.setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
await message.channel.send(embed);

message.channel.send('@everyone').then(marcados =>
  marcados.delete()
)


}     