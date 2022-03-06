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
  .setTitle(`<a:J_butterfly:949191895991586896>𝐑𝐄𝐆𝐑𝐀𝐒 𝐃𝐎 𝐒𝐄𝐑𝐕𝐈𝐃𝐎𝐑<a:J_butterfly:949191895991586896>`)
  .setAuthor(`${desocupado.username}`, desocupado.avatarURL())
  .addFields(
    { name: '<a:rgb_fixa:949347054897995876>𝐏𝐫𝐨𝐢𝐛𝐢𝐝𝐨 𝐟𝐥𝐨𝐨𝐝𝐚𝐫, 𝐟𝐚𝐳𝐞𝐫 𝐬𝐩𝐚𝐦 𝐧𝐨𝐬 𝐜𝐚𝐧𝐚𝐢𝐬 𝐝𝐞 𝐭𝐞𝐱𝐭𝐨.', value: 'Médio' },
    { name: '<a:rgb_fixa:949347054897995876>𝐏𝐫𝐨𝐢𝐛𝐢𝐝𝐨 𝐚 𝐝𝐢𝐯𝐮𝐥𝐠𝐚𝐜𝐚𝐨 𝐝𝐞 𝐜𝐨𝐧𝐭𝐞𝐮𝐝𝐨 𝐚𝐝𝐮𝐥𝐭𝐨, 𝐚𝐠𝐫𝐞𝐬𝐬𝐢𝐯𝐨, 𝐨𝐟𝐞𝐧𝐬𝐢𝐯𝐨 𝐨𝐮 𝐨𝐛𝐬𝐜𝐞𝐧𝐨 (𝐦𝐞𝐦𝐞𝐬, 𝐥𝐢𝐧𝐤𝐬 𝐨𝐮 𝐪𝐮𝐚𝐥𝐪𝐮𝐞𝐫 𝐨𝐮𝐭𝐫𝐨 𝐭𝐢𝐩𝐨 𝐝𝐞 𝐦𝐢𝐝𝐢𝐚 +𝟏𝟖).', value: 'Grave' },
    { name: '<a:rgb_fixa:949347054897995876>𝐏𝐫𝐨𝐢𝐛𝐢𝐝𝐨 𝐚 𝐝𝐢𝐯𝐮𝐥𝐠𝐚𝐜𝐚𝐨 𝐝𝐞 𝐬𝐞𝐫𝐯𝐢𝐝𝐨𝐫𝐞𝐬 𝐬𝐞𝐦 𝐚 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐚𝐨 𝐝𝐞 𝐮𝐦 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫. 𝐂𝐚𝐬𝐨 𝐪𝐮𝐞𝐢𝐫𝐚 𝐟𝐨𝐫𝐦𝐚𝐥𝐢𝐳𝐚𝐫 𝐮𝐦𝐚 𝐩𝐚𝐫𝐜𝐞𝐫𝐢𝐚, 𝐥𝐞𝐢𝐚 𝐨𝐬 𝐫𝐞𝐪𝐮𝐢𝐬𝐢𝐭𝐨𝐬 𝐧𝐨 𝐜𝐡𝐚𝐭 #꒦꒷꒦┊𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚌𝚘𝚎𝚜┊꒦꒷꒦꒷', value: 'Grave' },
    { name: '<a:rgb_fixa:949347054897995876>𝐏𝐫𝐨𝐢𝐛𝐢𝐝𝐨 𝐚 𝐝𝐢𝐯𝐮𝐥𝐠𝐚𝐜𝐚𝐨 𝐝𝐞 𝐬𝐞𝐫𝐯𝐢𝐝𝐨𝐫𝐞𝐬 𝐨𝐮 𝐜𝐚𝐧𝐚𝐢𝐬 𝐧𝐨 𝐩𝐯 𝐝𝐨𝐬 𝐦𝐞𝐦𝐛𝐫𝐨𝐬 𝐝𝐨 𝐬𝐞𝐫𝐯𝐢𝐝𝐨𝐫.', value: 'Médio' },
    { name: '<a:rgb_fixa:949347054897995876>𝐏𝐫𝐨𝐢𝐛𝐢𝐝𝐨 𝐝𝐞𝐬𝐫𝐞𝐬𝐩𝐞𝐢𝐭𝐚𝐫 𝐨𝐬 𝐨𝐮𝐭𝐫𝐨𝐬 𝐦𝐞𝐦𝐛𝐫𝐨𝐬. 𝐀𝐭𝐢𝐭𝐮𝐝𝐞𝐬 𝐫𝐚𝐜𝐢𝐬𝐭𝐚𝐬, 𝐦𝐚𝐜𝐡𝐢𝐬𝐭𝐚𝐬, 𝐬𝐞𝐱𝐢𝐬𝐭𝐚𝐬, 𝐡𝐨𝐦𝐨𝐟𝐨𝐛𝐢𝐜𝐚𝐬, 𝐱𝐞𝐧𝐨𝐟𝐨𝐛𝐢𝐜𝐚𝐬, 𝐝𝐞 𝐚𝐬𝐬𝐞𝐝𝐢𝐨 𝐨𝐮 𝐢𝐧𝐭𝐨𝐥𝐞𝐫𝐚𝐧𝐜𝐢𝐚 𝐫𝐞𝐥𝐢𝐠𝐢𝐨𝐬𝐚, 𝐍𝐀𝐎 𝐬𝐞𝐫𝐚𝐨 𝐭𝐨𝐥𝐞𝐫𝐚𝐝𝐚𝐬.', value: 'Grave' },
    { name: '<a:rgb_fixa:949347054897995876>𝐏𝐫𝐨𝐢𝐛𝐢𝐝𝐨 𝐝𝐢𝐯𝐮𝐥𝐠𝐚𝐫 𝐥𝐢𝐧𝐤𝐬 𝐦𝐚𝐥𝐢𝐜𝐢𝐨𝐬𝐨𝐬 (𝐯𝐢𝐫𝐮𝐬, 𝐭𝐫𝐨𝐣𝐚𝐧 𝐞𝐭𝐜).', value: 'Grave' },
    { name: '<a:rgb_fixa:949347054897995876>𝐏𝐫𝐨𝐢𝐛𝐢𝐝𝐨 𝐚𝐭𝐫𝐚𝐩𝐚𝐥𝐡𝐚𝐫 𝐚𝐬 𝐜𝐨𝐧𝐯𝐞𝐫𝐬𝐚𝐬 𝐧𝐨𝐬 𝐜𝐚𝐧𝐚𝐢𝐬 𝐝𝐞 𝐯𝐨𝐳, 𝐜𝐨𝐦𝐨 𝐟𝐢𝐜𝐚𝐫 𝐞𝐧𝐭𝐫𝐚𝐧𝐝𝐨 𝐞 𝐬𝐚𝐢𝐧𝐝𝐨 𝐫𝐞𝐩𝐞𝐭𝐢𝐝𝐚𝐦𝐞𝐧𝐭𝐞 𝐨𝐮 𝐮𝐬𝐚𝐫 𝐦𝐢𝐜𝐫𝐨𝐟𝐨𝐧𝐞𝐬 𝐞𝐬𝐭𝐨𝐮𝐫𝐚𝐝𝐨𝐬.', value: 'Médio' },
    { name: '<a:rgb_fixa:949347054897995876>𝐏𝐫𝐨𝐢𝐛𝐢𝐝𝐨 𝐞𝐬𝐩𝐚𝐥𝐡𝐚𝐫 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐨𝐞𝐬 𝐩𝐞𝐬𝐬𝐨𝐚𝐢𝐬 𝐝𝐞 𝐨𝐮𝐭𝐫𝐨𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬 (𝐬𝐞𝐧𝐡𝐚𝐬, 𝐟𝐨𝐭𝐨𝐬, 𝐞𝐱𝐩𝐨𝐬𝐢𝐜𝐚𝐨 𝐝𝐞 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫𝐞𝐬, 𝐞𝐭𝐜).', value: 'Grave' },
    { name: '𝐐𝐮𝐚𝐥𝐪𝐮𝐞𝐫 𝐦𝐞𝐦𝐛𝐫𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐫𝐞𝐬𝐩𝐞𝐢𝐭𝐚𝐫 𝐚𝐬 𝐫𝐞𝐠𝐫𝐚𝐬 𝐩𝐨𝐝𝐞𝐫𝐚 𝐬𝐨𝐟𝐫𝐞𝐫 𝐮𝐦𝐚 𝐝𝐚𝐬 𝐬𝐞𝐠𝐮𝐢𝐧𝐭𝐞𝐬 𝐩𝐮𝐧𝐢𝐜𝐨𝐞𝐬 𝐝𝐞𝐩𝐞𝐧𝐝𝐞𝐧𝐝𝐨 𝐝𝐨 𝐧𝐢𝐯𝐞𝐥 𝐝𝐞 𝐠𝐫𝐚𝐯𝐢𝐝𝐚𝐝𝐞:', value:  "\u200B" },
  )
  .setTimestamp()
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}               
