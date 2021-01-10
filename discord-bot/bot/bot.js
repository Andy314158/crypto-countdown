const Discord = require('discord.js');
const client = new Discord.Client();
var bigPump;
var channel;
client.login('Nzk3NjYxNzM1NzY2MTk2MjM1.X_puYQ.Tr-4ZCKzvYmDttZshriSs5Fc5Hs');
client.on('message', gotMessage);

function gotMessage(msg) {
  message = msg.content.split(" ");
  if (message[0] === 'start-timer-M1NzY2MTk2M') {
    bigPump = parseInt(message[1]);
    channel = msg;
    setInterval(fn60sec, 1000);
  }
}

function fn60sec() {
  bigPump-=1000;
  channel.channel.send(bigPump);
}



