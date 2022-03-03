

module.exports = async (client, member) =>{
    const Discord = require("discord.js");

    const embed = new Discord.MessageEmbed()
    const soraya = client.users.cache.get('594251581789044756');
    let canal = client.channels.cache.get("711373672560066601")
    const joinEmbed = new Discord.MessageEmbed()
      .setColor('#bf80ff')
      .setTitle(member.user.tag)
      .setAuthor('Desocupado-Bot', 'https://i.imgur.com/f5dzzNq.png')
      .setDescription('Bem-Vindo(a) ao Desocupados')
      .setThumbnail(member.user.avatarURL())
      .addFields(
      { name: 'Quer uma parceria?', value: `Veja se você cumpre os requisitos em <#711373686304931881>` },
      { name: 'Não esqueça de se registrar no:', value: '<#711373689504923708>' }
    )
    .addField('Leia as regras', '<#711670368112476181>', true)
      .setImage('https://imgur.com/AkKfTAI.gif')
      .setTimestamp()
      .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  
  
    canal.send(joinEmbed);
    };