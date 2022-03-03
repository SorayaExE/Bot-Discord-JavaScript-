const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fetch = require('node-fetch');
const moment = require('moment');
require('moment-duration-format');

client.on("ready", () => {
  console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`);
  let activities = [
    `Você na minha cama`,
    `Meu prefixo é d!`,
    `Trabaiando para o Soraya`,
    `Venha conversar comigo no chat de Inteligencia-artificial!`,
    `Utilize ${config.prefix}help para obter ajuda!`,
    `Estou na versão 2.0`
  ],
  i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: "PLAYING"
  }), 50000); //WATCHING, LISTENING, PLAYING, STREAMING
  console.log ('Estou online!')

});


client.on("guildCreate", guild => {
  console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.menberCount} membros!`);
  client.user.setActivity(`Estou em ${client.guild} servidores`);
});


client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {
if (message.author.bot) return;
if (message.channel.type === "dm") return;
if (!message.content.startsWith(config.prefix)) return;
if (message.content.startsWith(`<@${client.user.id}`) || message.content.startsWith(`<@${client.user.id}`)) return;

let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
try {
  let commandFile = require(`./commands/${command}.js`);
  delete require.cache[require.resolve(`./commands/${command}.js`)];
  return commandFile.run(client, message, args);
} catch (err) {
  console.error("Erro:" + err);
}
});

client.on("message", async message => {

  if(message.author.bot) return;    
  if(message.channel.type === "dm") return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  if(comando === "ping") {
    const m = await message.channel.send("sx!ping");
    m.edit(`:ping_pong: Pong!\nA latência é ${m.createdTimestamp - message.createdTimestamp}ms.\nA latência da API é: ${Math.round(client.ws.ping)}ms`);
  }

});

client.on("guildMemberAdd", async member => {

  const soraya = client.users.cache.get('594251581789044756');
  let canal = client.channels.cache.get("711373672560066601")
  const joinEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
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
  });

  client.on("guildMemberAdd", member => {
    
    const soraya = client.users.cache.get('594251581789044756');
    let canal = client.channels.cache.get("711373672560066601")
    const joinEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(member.user.tag)
    .setAuthor('Desocupado-Bot', 'https://i.imgur.com/f5dzzNq.png')
    .setDescription('Bem-Vindo(a) ao Desocupados')
    .addFields(
      { name: 'Quer uma parceria?', value: 'Consulte o chat Informações na categoria de parceria' },
      { name: 'Não esqueça de se registrar no:', value: '<#711373689504923708>' },
      { name: 'Qualquer duvida sobre o bot Desocupado use:', value: 'd!help que o bot vai lhe mandar os comandos no seu privado' },
      { name: 'Qualquer bug ou denuncia ou sugestão', value: 'use o comando d!contato em algum chat no servidor!' },
      
    )
    .addField('Leia as regras', '<#711670368112476181>', true)
    .setImage('https://imgur.com/A5uLKUE.gif')
    .setTimestamp()
    .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());

    member.send(joinEmbed);
    });
  
  client.on("guildMemberRemove", async member => {
  
    const soraya = client.users.cache.get('594251581789044756');
    let canal = client.channels.cache.get("711373673310978150");
    const leftEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('; - ; triste estou')
    .setAuthor(member.user.tag, member.user.avatarURL())
    .setDescription(`${member.user.username} Saiu do servidor ; -;`)
    .setThumbnail(member.user.avatarURL())
    .setFooter(`Desenvolvido por: ${soraya.tag} `, soraya.avatarURL());

    canal.send(leftEmbed);
});

client.login(config.token);

