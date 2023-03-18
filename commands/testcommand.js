const { SlashCommandBuilder,ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('testing purpose')
    .setNSFW(false),
    
    async execute(interaction){
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
            .setCustomId('Primary')
            .setLabel('Click Me')
            .setStyle(ButtonStyle.Primary),
        );

        await interaction.reply({ content: 'I think you should', components: [row]})
    },
}
