module.exports = {
  name: "commands",
  description: "displays all Commands that you can use",
  run: async (client, message, args) => {
      message.author.send({embed: {
          color: '#FFD700',
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: "Evack eSports | Opens | ZA",
          url: "https://evack.co.za",
          description: "We are a discord server based in South Africa. We host some of the most stacked Tournaments in South Africa..",
          fields: [{
              name: "Admin",
              value: "View all Admin [Commands here](http://google.com)"
            },
            {
              name: "Public",
              value: "View all the Public [Commands here](http://google.com)"
            },
            {
              name: "Dashboard",
              value: "You can view the bots dashboard over [here](http://google.com)"
            }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "© Evack eSports | Opens"
          }
        }
      });

  }
}