const player = require('discord.js');
const { SlashCommandBuilder,ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('Play')
    .setDescription('Plays Music Lmaoo'),

    async execute(interaction){
        const connection = joinVoiceChannel({
            channelId: 865987366380371973,
            guildId: interaction.guild,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });

        player.play('music.mp3');
        connection.subscribe(player);
    }
}

