const linebot = require('linebot');

const bot = linebot({
    channelId: 1484524579 , channelSecret: "d37936b83102309d5a7dcc6dc46db5a7", channelAccessToken: "hr2r8ePdDroHXqjqoVvbT8MSP0umxs1obr9vik9tTs9KYGIaK8xvbEZ53m52JdX73MSqjryJBiblK9CGNUDOP2kozlg/Cksx3dGoX94oMmrxvoLM+CTwlhSKO6bdcrZMSopXLFkqroQKcjs/DdWHGAdB04t89/1O/w1cDnyilFU=", verify: false // default=true
});
console.log('Boss');
bot.on('message', function(event) {
  console.log(event);
    // switch (event.message.type) {
    //     case 'text':
    //         switch (event.message.text) {
    //             case 'Who am i':
    //                 event.source.profile().then(function(profile) {
    //                     return event.reply('Hello ' + profile.displayName + ' ' + profile.userId);
    //                 });
    //                 break;
    //             case 'Show picture':
    //                 event.reply({type: 'image', originalContentUrl: 'https://d.line-scdn.net/stf/line-lp/family/en-US/190X190_line_me.png', previewImageUrl: 'https://d.line-scdn.net/stf/line-lp/family/en-US/190X190_line_me.png'});
    //                 break;
    //             case 'Push':
    //                 bot.push('U6350b7606935db981705282747c82ee1', 'Hey!');
    //                 break;
    //             case 'Confirm':
    //                 event.reply({
    //                     type: 'template',
    //                     altText: 'this is a confirm template',
    //                     template: {
    //                         type: 'confirm',
    //                         text: 'Are you sure?',
    //                         actions: [
    //                             {
    //                                 type: 'message',
    //                                 label: 'Yes',
    //                                 text: 'yes'
    //                             }, {
    //                                 type: 'message',
    //                                 label: 'No',
    //                                 text: 'no'
    //                             }
    //                         ]
    //                     }
    //                 });
    //                 break;
    //             default:
    //                 event.reply(event.message.text).then(function(data) {
    //                     console.log('Success', data);
    //                 }).catch(function(error) {
    //                     console.log('Error', error);
    //                 });
    //                 break;
    //         }
    //         break;
    //     case 'image':
    //         event.message.content().then(function(data) {
    //             const s = data.toString('base64').substring(0, 30);
    //             return event.reply('Nice picture! ' + s);
    //         }).catch(function(err) {
    //             return event.reply(err.toString());
    //         });
    //         break;
    //     case 'video':
    //         event.reply('Nice movie!');
    //         break;
    //     case 'audio':
    //         event.reply('Nice song!');
    //         break;
    //     case 'location':
    //         event.reply('That\'s a good location!');
    //         break;
    //     case 'sticker':
    //         event.reply({type: 'sticker', packageId: 1, stickerId: 1});
    //         break;
    //     default:
    //         event.reply('Unknow message: ' + JSON.stringify(event));
    //         break;
    // }
});

bot.listen('/linewebhook', 12313 || 80, function() {
    console.log('LineBot is running.');
});
