var mdict = require('mdict');

mdict.dictionary('dictionaries/MEPD.mdx').then(function(dictionary){
      //// dictionary is loaded 
      dictionary.search({
          phrase: 'happy', /// '*' and '?' supported 
          max: 10	          /// maximum results 
       }).then(function(foundWords){
          console.log('Found words:');
          console.log(foundWords);      /// foundWords is array 

          var word = ''+foundWords[0];
          console.log('Loading definitions for: '+word);
          return dictionary.lookup(word); /// typeof word === string 
      }).then(function(definitions){
          console.log('definitions:');     /// definition is array 
          console.log(definitions);
      });
      
  });