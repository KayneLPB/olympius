const Discord = require('discord.js')

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Le bot est connecté à Discord.');
    console.log('Client ID : 544167158977003530');
    console.log(`Connecté en tant que : ${bot.user.tag} !`);


});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if(cmd === '=serverinfo'){
      
      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Information sur le serveur")
      .setColor("#FFAA00")
      .setThumbnail(sicon)
      .addField("Nom du serveur", message.guild.name)
      .addField("Date de création", message.guild.createdAt)
      .addField("Le jour où vous avez rejoint ce serveur", message.member.joinedAt)
      .addField("Nombre de membres sur le serveur", message.guild.memberCount);
      
      return message.channel.send(serverembed);
    }
  });

bot.login("NTQ0MTY3MTU4OTc3MDAzNTMw.D0HbUg.yrG_KonSIzNSOQspD3PTkfCtI4c");
