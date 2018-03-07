const Discord = require("discord.js");
const slybot = new Discord.Client();

slybot.on("message", (message) => {
	if (message.content == 'ping'){
		message.reply('pong');
	}
});

slybot.on("message",(message) => {
	if (message.content.includes("slybot").ignoreCase){
		message.reply('Stop talking about me.');
	}
	// if (message.content.includes("SlyBot")){
	// 	message.reply('Stop talking about me.');
	// }
	// if (message.content.includes("Slybot")){
	// 	message.reply('Stop talking about me.');
	// }
	// if (message.content.includes("slyBot")){
	// 	message.reply('Stop talking about me.');
	// }

});

slybot.login("NDIxMDYwNjM2MzQ1MTA2NDQz.DYHuzg.gHPszJ86-sl2ZX2ardcHd--x6oc");


console.log("I'm running, breh.")