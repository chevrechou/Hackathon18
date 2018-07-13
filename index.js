
var str=""
var fs = require('fs')
var player = require('play-sound')(opts = {})
  // , filename = process.argv[2];
  ,filename="res0.txt";
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  // console.log('OK: ' + filename);
  // console.log(data);
   str=str.concat(String(data));
  console.log("This is the text: " + str);
  var data = {};
  data.text = str;




  request.post({
      url: toneUrl,
      json: data,
      auth: {
          user: toneUsername,
          pass: tonePassword
      }

  }, function (err, response, body){
    console.log("data.text: " + data.text)
      var mood=body.document_tone.tones[0].tone_name;
                   console.log("mood: " + mood);
                   console.log("text: " +data.text);

      console.log(body.document_tone.tones[0].tone_name +
      ", Score: " + body.document_tone.tones[0].score);

      if (mood=="Anger"){
        console.log("playing angry music")
        player.play('angry.mp3', { timeout: 2 }, function(err){
          if (err) throw err
        })

        var audio = player.play('happy.mp3', function(err){
          if (err && !err.killed) throw err
        })
        audio.kill()
      }
      else if (mood=="Joy"){
        console.log("playing happy music")
        player.play('happy.mp3', { timeout: 2 }, function(err){
          if (err) throw err
        })

        var audio = player.play('happy.mp3', function(err){
          if (err && !err.killed) throw err
        })
        audio.kill()
      }
      else if (mood=="Sadness"){

        player.play('sad.mp3', { timeout: 2 }, function(err){
          if (err) throw err
        })

        var audio = player.play('happy.mp3', function(err){
          if (err && !err.killed) throw err
        })
        audio.kill()
      }
      else if (mood=="Analytical"){

        player.play('sad.mp3', { timeout: 2 }, function(err){
          if (err) throw err
        })

        var audio = player.play('happy.mp3', function(err){
          if (err && !err.killed) throw err
        })
        audio.kill()
      }
      else if (mood=="Confident"){

        player.play('confident.mp3', { timeout: 2 }, function(err){
          if (err) throw err
        })

        var audio = player.play('happy.mp3', function(err){
          if (err && !err.killed) throw err
        })
        audio.kill()
      }
      else if (mood=="Fear"){

        player.play('fear.mp3', { timeout: 2 }, function(err){
          if (err) throw err
        })

        var audio = player.play('happy.mp3', function(err){
          if (err && !err.killed) throw err
        })
        audio.kill()
      }

      else{
        player.play('confident.mp3', { timeout: 2 }, function(err){
          if (err) throw err
        })

        var audio = player.play('happy.mp3', function(err){
          if (err && !err.killed) throw err
        })
        audio.kill()
      }

  });

});
console.log(str);
var request = require("request");
var toneUsername= "b244ac8b-dc65-4e80-beb1-cf71a3e7f93d";
var tonePassword= "QJLyQUPqSLUb";
var toneUrl = "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21";
