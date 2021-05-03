module.exports = (client) => {
     client.user.setPresence({ activity: { name: 'Twitter@itzkrxze', type: 'PLAYING' }, status: 'online' })
  .catch(console.error);

console.log(`${client.user.username} is Online`)

}
  
