const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
];
let avatar = message.author.displayAvatarURL({format: "png"});
  const soraya = client.users.cache.get('594251581789044756');
  const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Help Desocupado Bot')
  .setAuthor('Desocupado-Bot', 'https://i.imgur.com/f5dzzNq.png')
  .setDescription('Aqui vai os meus comandos')
  .addFields(
  { name: 'Lembrando que comandos obcenos é em:', value: '<#711495500523765841>' },
  { name: 'Para beijar alguém:', value: 'digite d!beijar (@do usuário)' },
  { name: 'Para comer alguém:', value: 'digite d!foder (@do usuário)' },
  { name: 'Para lamber alguém:', value: 'digite d!lamber (@do usuário)' },
  { name: 'Para soltar leite em alguém:', value: 'digite d!cum (@do usuário)' },
  { name: 'Para dar um tapa em alguém:', value: 'digite d!tapa (@do usuário)' },
  { name: 'Para matar alguém:', value: 'digite d!matar (@do usuário)' },
  { name: 'Para abraçar alguém:', value: 'digite d!abraçar (@do usuário)' },
  { name: 'Para fazer carinho em alguém:', value: 'digite d!carinho (@do usuário)' },
  { name: 'Para pegar um lolicon:', value: 'digite d!lolicon (@do usuário)' },
  { name: 'Tem alguma sugestão?', value: 'digite d!sugestao no chat <#711373693036658753>' },
  { name: 'Achou algum erro ou bug?', value: 'digite d!contato no chat <#711373693036658753> para entrar em contato comigo!'}
)
  .setTimestamp()
  .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());
  message.delete().catch(O_o => {});
  const newembed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Help Desocupado Bot')
  .setDescription('Comandos enviados no seu privado')
  .setTimestamp()
  .setAuthor(message.author.tag, avatar);
  message.channel.send(newembed)
  await message.author.send(embed);
}
