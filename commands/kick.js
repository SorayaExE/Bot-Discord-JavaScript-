const {MessageEmbed} = require('discord.js')
module.exports={
    name: "kick",
    description: "Kick a specified user from the server",
    category:"moderation",
    usage: "<user id> <reason>",
    run: async(bot,message,args)=>{
        if (!message.member.permissions.has("KICK_MEMBERS")){

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
            .setDescription('Especifique quem você deseja expulsar! (Forneça o ID do usuário ou nome de usuário)');
            return message.channel.send(bembed)
        }
        let User = message.guild.members.cache.get(args[0])
        if(!User){
            const cembed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.author.username}`)
            .setDescription('Esse não é um usuário no servidor! Tente novamente!');
            return message.channel.send(cembed)
        }
        let Reason = message.content.split(`d!kick ${User.id} `)
        if(!args[1]){
            const dembed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.author.username}`)
            .setDescription('Especifique um motivo! Você não pode expulsar alguém sem uma razão, pode?');
            return message.channel.send(dembed)
        }
        if(!Reason){ 
            const eembed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.author.username}`)
            .setDescription('Especifique um motivo! Você não pode expulsar alguém sem uma razão, pode?');
            return message.channel.send(eembed)
        }
        if(!User.kickable){
            const fembed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.author.username}`)
            .setDescription('Você não pode expulsar esse usuário, ele pode ter um cargo superior a mim ou o mesmo cargo que eu.');
            return message.channel.send(fembed)
        }
        User.kick(Reason)
        const Embed = new MessageEmbed()
        .setTitle(`Você expulsou um membro!`)
        .setDescription(`Você expulsou o usuário ${bot.users.cache.get(User.id).username} so server!`)
        .setColor(`RANDOM`)
        message.channel.send(Embed)
    }
}