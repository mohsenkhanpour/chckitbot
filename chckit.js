require('dotenv').config();
var mdict = require('mdict');
var sanitizeHtml = require('sanitize-html');
const TeleBot = require('telebot');
const bot = new TeleBot(process.env.BOT_TOKEN);

bot.on('text', msg => {
	let id = msg.from.id;
	let text = msg.text;

	mdict.dictionary('dictionaries/MEPD.mdx').then(function(dictionary){
	//// dictionary is loaded 
	dictionary.search({
		phrase: text, /// '*' and '?' supported 
		max: 10	          /// maximum results 
	 }).then(function(foundWords){
		console.log('Found words:');
		console.log(foundWords);      /// foundWords is array 

		var word = ''+foundWords[0];
		console.log('Loading definitions for: '+word);
		return dictionary.lookup(word); /// typeof word === string 
	}).then(function(definitions){
		console.log('definitions:');     /// definition is array 
		console.log(definitions[0]);

		var dirty = definitions[0];
		var clean = sanitizeHtml(dirty,{
			allowedTags: ['b','i'],
			allowedAttributes: []
		});

		let replyToMessage = msg.message_id;
		let parseMode = 'html';
		return bot.sendMessage(id,clean, {replyToMessage, parseMode})
	});
	
}); 
;}
);
bot.start();