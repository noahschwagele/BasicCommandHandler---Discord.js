module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        const msg = await  message.channel.send(`🏓 Pinging....`);

        msg.edit(`🏓 Pong!
        Ping is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`)

    }
}
