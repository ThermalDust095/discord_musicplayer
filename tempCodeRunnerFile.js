client.on(Events.InteractionCreate, async interaction => {
// 	if (!interaction.isChatInputCommand()) return;

//     let command = interaction.client.commands.get(interaction.commandName);

//     try{
//         await command.execute(interaction);
//     }catch(error){
//         console.error('command was not found!!');
//         console.error(error);
//     }

// 	// if (interaction.commandName === 'ping') {
// 	// 	await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
// 	// }

//     // if(interaction.commandName === 'server'){
//     //     await interaction.reply({content: `${interaction.guild.name} is a trash server`, ephemeral: true})
//     // }
// });