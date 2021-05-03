module.exports = {
    run: async (client, message, args) => {
        
        guild.roles.create({
            data: {
              name: 'test Role',
              color: 'BLUE',
            },
            reason: 'we needed a role for Super Cool People',
          })
            .then(console.log)
            .catch(console.error);
    }
}