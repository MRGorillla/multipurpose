const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
const welcome = require("./welcome");

client.on("ready", () => {
  console.log("Our Discord bot is online");

  welcome(client);
});

module.exports = (client) => {
  const channelId = "1093562334166913056";
  const rulesChannel = "1093777038910955540";
  client.on("guildMemberAdd", (member) => {
    console.log(member);

    const message = `Welcome <@${
      member.id
    }> to our server! Be sure to check out our ${member.guild.channels.cache
      .get(rulesChannel)
      .toString()}`;

    const channel = member.guild.channels.cache.get(channelId);
    channel.send(message);
  });
};

client.login(config.token);