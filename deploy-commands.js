const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');


const commands = [
	new SlashCommandBuilder().setName('summon').setDescription('Random Cian variant!'),
	new SlashCommandBuilder().setName('am').setDescription('Good morning!'),
	new SlashCommandBuilder().setName('pm').setDescription('Quite a night!'),
	new SlashCommandBuilder().setName('server').setDescription('Server info'),
	new SlashCommandBuilder().setName('user').setDescription('User info'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);


rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);