const {MessageEmbed} = require('discord.js')
const ms = require('ms');
module.exports={ 
    name: 'sorteio',
    description: 'Crie um simples sorteio',
    usage: '<tempo> <canal> <premio>',
    category: 'fun',
    run: async(bot,message,args)=>{
        if (!message.member.permissions.has("BAN_MEMBERS")){

            const aembed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.author.username}`)
            .setDescription('Você é fraco, lhe falta permissão do ademir para usar esse comando');
            return message.reply(aembed)
        }
        if(!args[0]){
        const bembed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription('Você não especificou o tempo!');
        return message.channel.send(bembed)
        }
        if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")){
        const cembed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription('Você não usou a formatação correta para o horário!');
        return message.channel.send(cembed)
        }
        if(isNaN(args[0][0])){
            const dembed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.author.username}`)
            .setDescription('Isso não é um número!');
        return message.channel.send(dembed)
        }
        let channel = message.mentions.channels.first()
        if(!channel){
            const eembed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.author.username}`)
            .setDescription('Não encontrei esse canal!');
        return message.channel.send(eembed)
        }
        let prize = args.slice(2).join(" ")
        if(!prize){
            const fembed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.author.username}`)
            .setDescription('Você não especificou o tempo!');
        return message.channel.send(fembed)
        }
        const gembed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription(`*Sorteio criado no ${channel}*`);
        message.channel.send(gembed)
{
    let Embed = new MessageEmbed()
    .setTitle(`<a:doguin:714717157098913822>Novo sorteio!<a:doguin:714717157098913822>`)
    .setDescription(`O ${message.author} está iniciando um sorteio e o premio é **${prize}**`)
    .setTimestamp(Date.now()+ms(args[0]))
    .setFooter('O sorteio será finalizado')
    .setColor(`BLUE`)
    let m = await channel.send(Embed)
    m.react("🎉")
    setTimeout(() => {
        if(m.reactions.cache.get("🎉").count<=1){
            message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`)
            return message.channel.send(`Poucas pessoas reagiram para ter um vencedor!`)
        }
        
        let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>!u.bot).random()
        const hembed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('<a:Mupeti:714695782233800734>Parabens!!!<a:Mupeti:714695782233800734>')
        .setDescription(`O vendedor do sorteio que estava valendo **${prize}** é... ${winner}`);
        channel.send(hembed)
    }, ms(args[0]));
   }
}
}