const discord = require('discord.js');
const path = require('path');
const { SlashCommandBuilder,ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { demuxProbe,joinVoiceChannel,createAudioResource,createAudioPlayer,AudioPlayerStatus, getVoiceConnection } = require('@discordjs/voice');
const { createReadStream } = require('fs');

const audioplayer = createAudioPlayer();

async function probeAndCreateResource(readableStream) {
	const { stream, type } = await demuxProbe(readableStream);
	return createAudioResource(stream, { inputType: type });
}


module.exports = {
    data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Plays Music Lmaoo'),

    async execute(interaction){
        let connection = joinVoiceChannel({
            channelId: '865987366380371973',
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });
        connection = getVoiceConnection(interaction.guild.id)

        const resource = await probeAndCreateResource(createReadStream(path.join(__dirname,"music.webm")))
        
        audioplayer.play(resource);
        audioplayer.on(AudioPlayerStatus.Playing, () => {
            console.log('The audio player has started playing!');
        });

        connection.subscribe(audioplayer);

        audioplayer.on('error', error => {
            console.error(`Error: ${error.message} with resource ${error.resource.metadata.title}`);
        });

        interaction.reply("It has joined the channel")

    }
}

