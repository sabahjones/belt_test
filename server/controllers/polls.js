/*
    /server/controllers/polls.js
    Main logic for connecting http requests with database requests, delivering responses
*/
console.log("Loaded: /server/controllers/polls.js");

var Poll = require('../models/poll.js')

module.exports = {

    get: function(request, response){
      Poll.find({}, function(err, results){
        if (err){
          console.log("unable to get polls from db")
        }
        else {
          console.log("successfully retrieved data")
          response.json(results)
        }
      })
    },

    delete: function(request, response){
      Poll.remove({_id: request.params.id}, function(err){
        if (err){
          console.log("error when attempting to delete")
        }
        else {
          console.log("successfully deleted post")
          response.json({success: true})
        }
      })
    },

    update: function (request, response) {
      var updatepoll = Poll.update( {_id: request.body._id}, {
        option_one: request.body.option_one,
        option_two: request.body.option_two,
        option_three: request.body.option_three,
        option_four: request.body.option_four},
        function(err) {
          if (err) {
            console.log("error updating poll results")
          }
          else {
            console.log("update successful")
            response.json(updatepoll)
          }
        })
      },

    add: function (request, response) {
        console.log("Polls Create");
        console.log(request.body)
        console.log(Poll)
        var newpoll = new Poll({
          username: request.body.username,
          title: request.body.title,
          username: request.body.username,
          title: request.body.title,
          option_one: [request.body.option_one, 0],
          option_two: [request.body.option_two, 0],
          option_three: [request.body.option_three, 0],
          option_four: [request.body.option_four, 0]


          // option_one['option']: request.body.option_one,
          // option_one['votes']: 0,
          // option_two['option']:  request.body.option_two,
          // option_two['votes']: 0,
          // option_three['option']: request.body.option_three,
          // option_three['votes']: 0,
          // option_four['option']: request.body.option_four,
          // option_four['votes']: 0,

        })
        newpoll.save(function(err){
          if(err){
            console.log("unable to save post")
          }
          else {
            console.log("saved new post to db")
            response.json(newpoll)
          }
        })
      }

};
