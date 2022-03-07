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
  .setColor('#4B0082')
  .setTitle('Quais jogos você joga? ')
  .addFields(
    { name: '<:d_lolzinho:949192763335933973> League Of Legends', value: "\u200B"},
    { name: '<:d_wr:950184935019405375>Wild Rift', value: "\u200B"},
    { name: '<:d_Valorant:950178910740566066>Valorant', value: "\u200B"},
    { name: '<:d_Genshin_Impact:950178953581199360>Genshin Impact', value: "\u200B"},
    { name: '<:d_minecraft:950179143633502279>Minecraft', value: "\u200B"},
    { name: '<:d_csgo:950178980051439646>CS:GO', value: "\u200B"},
    { name: '🎮Outros', value: "\u200B"}
  )
  await message.channel.send(embed);

  message.channel.send('@everyone').then(marcados =>
    marcados.delete()
  )


}