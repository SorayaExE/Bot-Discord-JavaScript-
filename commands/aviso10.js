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
  .setColor('#F0E68C')
  .setTitle(`<a:J_butterfly:949191895991586896>๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐<a:J_butterfly:949191895991586896>`)
  .setAuthor(`${desocupado.username}`, desocupado.avatarURL())
  .addFields(
    { name: '<a:rgb_fixa:949347054897995876>๐๐ซ๐จ๐ข๐๐ข๐๐จ ๐๐ฅ๐จ๐จ๐๐๐ซ, ๐๐๐ณ๐๐ซ ๐ฌ๐ฉ๐๐ฆ ๐ง๐จ๐ฌ ๐๐๐ง๐๐ข๐ฌ ๐๐ ๐ญ๐๐ฑ๐ญ๐จ.', value: 'Mรฉdio' },
    { name: '<a:rgb_fixa:949347054897995876>๐๐ซ๐จ๐ข๐๐ข๐๐จ ๐ ๐๐ข๐ฏ๐ฎ๐ฅ๐ ๐๐๐๐จ ๐๐ ๐๐จ๐ง๐ญ๐๐ฎ๐๐จ ๐๐๐ฎ๐ฅ๐ญ๐จ, ๐๐ ๐ซ๐๐ฌ๐ฌ๐ข๐ฏ๐จ, ๐จ๐๐๐ง๐ฌ๐ข๐ฏ๐จ ๐จ๐ฎ ๐จ๐๐ฌ๐๐๐ง๐จ (๐ฆ๐๐ฆ๐๐ฌ, ๐ฅ๐ข๐ง๐ค๐ฌ ๐จ๐ฎ ๐ช๐ฎ๐๐ฅ๐ช๐ฎ๐๐ซ ๐จ๐ฎ๐ญ๐ซ๐จ ๐ญ๐ข๐ฉ๐จ ๐๐ ๐ฆ๐ข๐๐ข๐ +๐๐).', value: 'Grave' },
    { name: '<a:rgb_fixa:949347054897995876>๐๐ซ๐จ๐ข๐๐ข๐๐จ ๐ ๐๐ข๐ฏ๐ฎ๐ฅ๐ ๐๐๐๐จ ๐๐ ๐ฌ๐๐ซ๐ฏ๐ข๐๐จ๐ซ๐๐ฌ ๐ฌ๐๐ฆ ๐ ๐ฉ๐๐ซ๐ฆ๐ข๐ฌ๐ฌ๐๐จ ๐๐ ๐ฎ๐ฆ ๐๐๐ฆ๐ข๐ง๐ข๐ฌ๐ญ๐ซ๐๐๐จ๐ซ. ๐๐๐ฌ๐จ ๐ช๐ฎ๐๐ข๐ซ๐ ๐๐จ๐ซ๐ฆ๐๐ฅ๐ข๐ณ๐๐ซ ๐ฎ๐ฆ๐ ๐ฉ๐๐ซ๐๐๐ซ๐ข๐, ๐ฅ๐๐ข๐ ๐จ๐ฌ ๐ซ๐๐ช๐ฎ๐ข๐ฌ๐ข๐ญ๐จ๐ฌ ๐ง๐จ ๐๐ก๐๐ญ #๊ฆ๊ท๊ฆโ๐ธ๐๐๐๐๐๐๐๐๐๐โ๊ฆ๊ท๊ฆ๊ท', value: 'Grave' },
    { name: '<a:rgb_fixa:949347054897995876>๐๐ซ๐จ๐ข๐๐ข๐๐จ ๐ ๐๐ข๐ฏ๐ฎ๐ฅ๐ ๐๐๐๐จ ๐๐ ๐ฌ๐๐ซ๐ฏ๐ข๐๐จ๐ซ๐๐ฌ ๐จ๐ฎ ๐๐๐ง๐๐ข๐ฌ ๐ง๐จ ๐ฉ๐ฏ ๐๐จ๐ฌ ๐ฆ๐๐ฆ๐๐ซ๐จ๐ฌ ๐๐จ ๐ฌ๐๐ซ๐ฏ๐ข๐๐จ๐ซ.', value: 'Mรฉdio' },
    { name: '<a:rgb_fixa:949347054897995876>๐๐ซ๐จ๐ข๐๐ข๐๐จ ๐๐๐ฌ๐ซ๐๐ฌ๐ฉ๐๐ข๐ญ๐๐ซ ๐จ๐ฌ ๐จ๐ฎ๐ญ๐ซ๐จ๐ฌ ๐ฆ๐๐ฆ๐๐ซ๐จ๐ฌ. ๐๐ญ๐ข๐ญ๐ฎ๐๐๐ฌ ๐ซ๐๐๐ข๐ฌ๐ญ๐๐ฌ, ๐ฆ๐๐๐ก๐ข๐ฌ๐ญ๐๐ฌ, ๐ฌ๐๐ฑ๐ข๐ฌ๐ญ๐๐ฌ, ๐ก๐จ๐ฆ๐จ๐๐จ๐๐ข๐๐๐ฌ, ๐ฑ๐๐ง๐จ๐๐จ๐๐ข๐๐๐ฌ, ๐๐ ๐๐ฌ๐ฌ๐๐๐ข๐จ ๐จ๐ฎ ๐ข๐ง๐ญ๐จ๐ฅ๐๐ซ๐๐ง๐๐ข๐ ๐ซ๐๐ฅ๐ข๐ ๐ข๐จ๐ฌ๐, ๐๐๐ ๐ฌ๐๐ซ๐๐จ ๐ญ๐จ๐ฅ๐๐ซ๐๐๐๐ฌ.', value: 'Grave' },
    { name: '<a:rgb_fixa:949347054897995876>๐๐ซ๐จ๐ข๐๐ข๐๐จ ๐๐ข๐ฏ๐ฎ๐ฅ๐ ๐๐ซ ๐ฅ๐ข๐ง๐ค๐ฌ ๐ฆ๐๐ฅ๐ข๐๐ข๐จ๐ฌ๐จ๐ฌ (๐ฏ๐ข๐ซ๐ฎ๐ฌ, ๐ญ๐ซ๐จ๐ฃ๐๐ง ๐๐ญ๐).', value: 'Grave' },
    { name: '<a:rgb_fixa:949347054897995876>๐๐ซ๐จ๐ข๐๐ข๐๐จ ๐๐ญ๐ซ๐๐ฉ๐๐ฅ๐ก๐๐ซ ๐๐ฌ ๐๐จ๐ง๐ฏ๐๐ซ๐ฌ๐๐ฌ ๐ง๐จ๐ฌ ๐๐๐ง๐๐ข๐ฌ ๐๐ ๐ฏ๐จ๐ณ, ๐๐จ๐ฆ๐จ ๐๐ข๐๐๐ซ ๐๐ง๐ญ๐ซ๐๐ง๐๐จ ๐ ๐ฌ๐๐ข๐ง๐๐จ ๐ซ๐๐ฉ๐๐ญ๐ข๐๐๐ฆ๐๐ง๐ญ๐ ๐จ๐ฎ ๐ฎ๐ฌ๐๐ซ ๐ฆ๐ข๐๐ซ๐จ๐๐จ๐ง๐๐ฌ ๐๐ฌ๐ญ๐จ๐ฎ๐ซ๐๐๐จ๐ฌ.', value: 'Mรฉdio' },
    { name: '<a:rgb_fixa:949347054897995876>๐๐ซ๐จ๐ข๐๐ข๐๐จ ๐๐ฌ๐ฉ๐๐ฅ๐ก๐๐ซ ๐ข๐ง๐๐จ๐ซ๐ฆ๐๐๐จ๐๐ฌ ๐ฉ๐๐ฌ๐ฌ๐จ๐๐ข๐ฌ ๐๐ ๐จ๐ฎ๐ญ๐ซ๐จ๐ฌ ๐ฎ๐ฌ๐ฎ๐๐ซ๐ข๐จ๐ฌ (๐ฌ๐๐ง๐ก๐๐ฌ, ๐๐จ๐ญ๐จ๐ฌ, ๐๐ฑ๐ฉ๐จ๐ฌ๐ข๐๐๐จ ๐๐ ๐๐๐ฆ๐ข๐ฅ๐ข๐๐ซ๐๐ฌ, ๐๐ญ๐).', value: 'Grave' },
    { name: '๐๐ฎ๐๐ฅ๐ช๐ฎ๐๐ซ ๐ฆ๐๐ฆ๐๐ซ๐จ ๐ช๐ฎ๐ ๐๐๐ฌ๐ซ๐๐ฌ๐ฉ๐๐ข๐ญ๐๐ซ ๐๐ฌ ๐ซ๐๐ ๐ซ๐๐ฌ ๐ฉ๐จ๐๐๐ซ๐ ๐ฌ๐จ๐๐ซ๐๐ซ ๐ฎ๐ฆ๐ ๐๐๐ฌ ๐ฌ๐๐ ๐ฎ๐ข๐ง๐ญ๐๐ฌ ๐ฉ๐ฎ๐ง๐ข๐๐จ๐๐ฌ ๐๐๐ฉ๐๐ง๐๐๐ง๐๐จ ๐๐จ ๐ง๐ข๐ฏ๐๐ฅ ๐๐ ๐ ๐ซ๐๐ฏ๐ข๐๐๐๐:', value:  "\u200B" },
  )
  .setTimestamp()
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL())
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}               
