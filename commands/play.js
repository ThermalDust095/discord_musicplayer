const player = require('discord.js');
const { SlashCommandBuilder,ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { joinVoiceChannel,createAudioResource,createAudioPlayer } = require('@discordjs/voice')

const audioplayer = createAudioPlayer();

module.exports = {
    data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Plays Music Lmaoo'),

    async execute(interaction){
        const connection = joinVoiceChannel({
            channelId: 865987366380371973,
            guildId: interaction.guild,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });

        const resource = createAudioResource('C:\Users\akhil\OneDrive - dsatm.edu.in\Documents\Akhil\node.js\discord_musicplayer\music.mp3');

        audioplayer.play(resource);

        audioplayer.on('error', error => {
            console.error(`Error: ${error.message} with resource ${error.resource.metadata.title}`);
        });
    }
}

