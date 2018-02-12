require('dotenv').config();
var mdict = require("./index.js");
const TeleBot = require('telebot');
const bot = new TeleBot(process.env.BOT_TOKEN);

var request = require("request");

	bot.on('text', msg => {
	    let id = msg.from.id;
	    let text = msg.text;
        
        
        (function(){
            mdict("./testdict/ETDict.mdx").search(text).then(function(defination){
                   console.log(defination);
            });
        })();

/*		var options = { method: 'GET',
//  url: 'http://corpus.vocabulary.com/api/1.0/examples.json',
 qs: { query: text, 
	    maxResults: '5', 
	    domain: '' },
 json: true};
		request(options, function (error, response, body) {
  if (body.result.totalHits == 0)
  {return bot.sendMessage(id, "No example found. Try a new word.");
  }
  
  else{
	
 	let Ex00 = body.result.sentences[0].sentence
	let Ex01 = body.result.sentences[1].sentence
	let Ex02 = body.result.sentences[2].sentence
	let Ex03 = body.result.sentences[3].sentence
	let Ex04 = body.result.sentences[4].sentence
  
    console.log(Ex01);
	let replyToMessage = msg.message_id;
    let parseMode = 'html';
    return bot.sendMessage(id, `👉 ${ Ex00 } \n 👉 ${ Ex01 } \n 👉 ${ Ex02 } \n 👉 ${ Ex03 } \n 👉 ${ Ex04 }`, {replyToMessage, parseMode});}
	});
		
});

	
*/bot.start(); });