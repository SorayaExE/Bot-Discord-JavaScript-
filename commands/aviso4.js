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
.setColor('#DB7093')
.setTitle(`<a:Y_neko:749436573925376061> 𝐃𝐞𝐬𝐨𝐜𝐮𝐩𝐚𝐝𝐨 𝐌𝐚𝐫𝐤𝐞𝐭 <a:Y_neko:749436573925376061>`)
.setDescription('Benefícios para vips no Desocupados:')
.setAuthor(`${desocupado.username}`, desocupado.avatarURL())
.addFields(
  { name: '<a:Y_kanna_piano:779339602812076052>𝐃𝐞𝐬𝐨𝐜𝐮𝐩𝐚𝐝𝐨', value: `Permissão para enviar imagens no chat<#711373689504923708> \ 200k na economia \ Tag exclusiva (Desocupado) \ Sala Vip` },
  { name: '<a:L_bongo_cat:949191419447357530>𝐃𝐞𝐬𝐨𝐜𝐮𝐩𝐚𝐝𝐨 𝐩𝐥𝐮𝐬 ', value: `Permissão para enviar imagens no chat<#711373689504923708> \ 500k na economia \ Tag exclusiva (Desocupado Plus) \ Sala vip \ Nitro classic (1 mês)` },
  { name: '<a:Y_Nezuko_jump:949186370834956289>𝐃𝐞𝐬𝐨𝐜𝐮𝐩𝐚𝐝𝐨 𝐦𝐚𝐠𝐧𝐚𝐭𝐚', value: `Sala e call exclusiva para você e seus amigos \ Sorteios vips \ Permissão para adicionar emojis \ Discord Nitro (1 mês) \ 1kk na economia \ Tag exclusiva (Desocupado Magnata)` }
)
.setTimestamp()
.setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
await message.channel.send(embed);

message.channel.send('@everyone').then(marcados =>
  marcados.delete()
)


}     