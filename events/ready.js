module.exports = (client) => {
    console.log(` ${client.user.username} Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.user.size} users.`);
     client.user.setPresence({ activity: { name: 'scrimming', type: 'PLAYING' }, status: 'online' })
  .then(console.log)
  .catch(console.error);

  client.user.setUsername('Skrim for Skin | Chubs C')
  .then(user => console.log(`My new username is ${user.username}`))
  .catch(console.error);

}
  