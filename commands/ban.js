const {MessageEmbed} = require('discord.js')
module.exports={
    name: "ban",
    description: "Ban a specified user from the server",
    category:"moderation",
    usage: "<user id> <reason>",
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
        .setDescription('Especifique quem você deseja banir! (Indique o ID do usuário ou nome de usuário)!');
        return message.channel.send(bembed)
    }
        let User = message.guild.members.cache.get(args[0])
        if(!User){
            const bembed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.author.username}`)
            .setDescription('Esse não é um usuário no servidor! Tente novamente!');
            return message.channel.send(bembed)
        }
        let Reason = message.content.split(`!ban ${User.id} `)
        if(!args[1]){
            const bembed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${message.author.username}`)
            .setDescription('Especifique um motivo! Você não pode banir alguém sem motivo, pode?');
            return message.channel.send(bembed)
        }
        if(!Reason) {
        const bembed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${message.author.username}`)
        .setDescription('Especifique um motivo! Você não pode banir alguém sem motivo, pode?');
        return message.channel.send(bembed)
    }
        User.ban(Reason)
        const Embed = new MessageEmbed()
        .setTitle(`Você baniu um membro!:hammer:`)
        .setDescription(`Você baniu o usuário ${bot.users.cache.get(User.id).username} do server!`)
        .setColor(`RANDOM`)
        message.channel.send(Embed)
    }
}