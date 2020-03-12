const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!args[0]) return message.channel.send('Syntaxe: .suggestion <question>');

    const pollEmbed = new Discord.RichEmbed()
        .setTitle(`Sondage crée par ${message.author.username}`)
        .setColor('#dc143c')
        .setFooter('Appuyez sur les réactions ci-dessous.')
        .setDescription(args.join(' '));
    
    message.delete().catch();

    return message.channel.send(pollEmbed).then(x => {
        x.react('✔️')
        x.react('❌')
    });
};

module.exports.help = {
    name: 'suggestion'
};
