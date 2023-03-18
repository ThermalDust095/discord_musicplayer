var path = require('path');
var fs = require('fs');
const discord = require('Discord.js');
const {Client,Events,GatewayIntentBits,REST,Routes} = require('Discord.js');
const { createAudioPlayer,generateDependencyReport } = require('@discordjs/voice');
const {token,guildId,clientId} = require('./config.json');
const rest = new REST({ version: '10' }).setToken(token);
commands = []

const client = new Client({intents: [GatewayIntentBits.Guilds]});
client.commands = new discord.Collection();
const player = createAudioPlayer();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name,command);
    commands.push(command.data.toJSON());
}

console.log(commands);
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);
		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);
		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();

client.once(
    Events.ClientReady , c =>{
        console.log(`Logged in as ${c.user.tag}`);
    
})


client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

    let command = interaction.client.commands.get(interaction.commandName);
    
    try{
        await command.execute(interaction);
    }catch(error){
        console.error('command was not found!!');
    }
});

client.login(token)