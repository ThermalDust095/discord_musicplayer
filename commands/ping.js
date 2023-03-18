const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies With Pong lmao'),
    
    async execute(interaction){
        await interaction.reply({ content: 'Secret Pong!',files:[{attachment:'image.gif'}] ,ephemeral: true });
        for(let i=0;i<10;i++){
            await wait(3);
            let c = i%2 ? "Pong!!!":"Ping!!!";
            await interaction.editReply({content:c})
        }
    }
}