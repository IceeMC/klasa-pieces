/*

	This is to be used with the mute command located in
	/commands/Moderation/mute.js

*/
const { Task } = require('klasa');

module.exports = class extends Task {

	async run({ guild, user }) {
		const _guild = this.client.guilds.get(guild);
		if (!_guild) return;
		const member = await _guild.members.fetch(user).catch(() => null);
		if (!member) return;
		await member.roles.remove(_guild.configs.roles.muted);
	}

};
