
const {
	MessageEmbed
} = require("discord.js")

const disbut = require("discord-buttons");

let button = new disbut.MessageButton()
  .setStyle('url')
  .setLabel('NishWeb') 

  .setURL('https://nishweb.ml')
const exampleEmbed = {
	color: 0x0099ff,
	title: 'NMusic - Beta (About)',
	url: 'https://nishweb.ml',
	author: {
		name: 'NMusic',
		icon_url: 'https://pbs.twimg.com/profile_images/1642161716/music_logo.png',
		url: 'https://discord.js.org',
	},
	description: 'About Panel',
	thumbnail: {
		url: 'https://i.imgur.com/wSTFkRM.png',
	},
	fields: [
		{
			name: 'Made by',
			value: 'Nishant#9999, MrCRACK#6123',
		},
		{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: 'Based on',
			value: 'discord.js',
			inline: true,
		},
		{
			name: 'Powered by',
			value: 'node.js',
			inline: true,
		},
		{
			name: 'Version',
			value: 'v1.1',
			inline: true,
		},
	],
	image: {
		url: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png',
	},
	timestamp: new Date(),
	footer: {
		text: 'Powered by NishWeb',
		icon_url: 'https://i.imgur.com/wSTFkRM.png',
	},
};


module.exports = {
	name: 'about',
	description: 'about!',
	execute(message, args) {
	message.channel.send({ embed: exampleEmbed ,button});
	},
};
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */