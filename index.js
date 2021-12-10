const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const data = require('./variants.json')


client.once('ready', () => {
	console.log('Ready!');
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'summon') {
        index = Math.floor(Math.random() * data["names"].length)
		await interaction.reply(data["names"][index]);
		return;
	}

	if (commandName === 'am') {
		hr = interaction.createdAt.getHours()
		if (hr >= 5 && hr < 17) {
			index = Math.floor(Math.random() * data["am"].length)
			await interaction.reply(data["am"][index])
		}
		else {
			await interaction.reply("Bruh it's still night time, don't be in such a hurry")
		}
		return;
	}

	if (commandName === 'pm') {
		hr = interaction.createdAt.getHours()
		if (hr >= 17 || hr < 5) {
			index = Math.floor(Math.random() * data["pm"].length)
			await interaction.reply(data["pm"][index])
		}
		else {
			await interaction.reply("Sorry. It's 5 o'clock somewhere, but not here (yet)")
		}
		return;
	}

	if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
		return;
	}

	if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
		return;
	}
});


client.login(token);